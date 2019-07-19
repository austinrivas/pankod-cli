#!/usr/bin/env node

import * as chalk from 'chalk';
import * as program from 'commander';
import * as figlet from 'figlet';
import * as fs from 'fs';
import * as inquirer from 'inquirer';

import { IPankodConfig, IPluginsHelper, IQuestions, IQuestionsHelper, IText } from './ITypes';
import { CommonHelper } from './Scripts/Common';
import { ICommon } from './Scripts/ICommon';
import { Plugins } from './Scripts/nextjs/pluginsEnum';

let projectPath: string;

try {
	const pankodConfig: IPankodConfig = CommonHelper.getPankodConfig();

	projectPath = pankodConfig.projectType;
} catch {
	projectPath = '';
	console.error('Please specify pankod.projectType in package.json');

	process.exit(1);
}

const text: IText = {
	moleculer: 'microservice-cli',
	nextjs: 'Pankod NextJS CLI'
};

console.clear();

console.log(
	chalk.default(
		figlet.textSync(text[projectPath])
	)
);

const questions: IQuestions = {
	moleculer: {
		choices: ['Entity', 'Service'],
		message: 'What would you like to add?',
		name: 'fileType',
		type: 'list'
	},
	nextjs: {
		choices: ['Page', 'Functional Component', 'Class Component', 'Plugin'],
		message: 'What do you want to add?',
		name: 'fileType',
		type: 'list'
	}
};

const askGenerateQuestions = async (): Promise<void> => {
	const answers: ICommon.IAnswers = await inquirer.prompt(questions[projectPath]);

	const questionsHelper: IQuestionsHelper = require(`./Scripts/${projectPath}/index`) as IQuestionsHelper;

	questionsHelper.default.showQuestions(answers.fileType);
};

program.version('0.2.0');

program.command('add').alias('a')
	.description('Adds new component, page or plugin')
	.action(async (): Promise<void> => askGenerateQuestions());

program.command('add:plugin <name>')
	.description('Adds new plugin. Styled or Sass.')
	.action((name: string): void => {
		const pluginsHelper: IPluginsHelper = require(`./Plugins/${projectPath}/index`) as IPluginsHelper;

		pluginsHelper.default.addPlugin(name);
	});

if (process.argv.length === 2) {
	askGenerateQuestions();
}

program.parse(process.argv);