#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const program = require("commander");
const figlet = require("figlet");
const inquirer = require("inquirer");
const Common_1 = require("./Scripts/Common");
let projectPath;
try {
    const pankodConfig = Common_1.CommonHelper.getPankodConfig();
    projectPath = pankodConfig.projectType;
}
catch (_a) {
    projectPath = '';
    console.error('Please specify pankod.projectType in package.json');
    process.exit(1);
}
const text = {
    moleculer: 'microservice-cli',
    nextjs: 'Pankod NextJS CLI'
};
console.clear();
console.log(chalk.default(figlet.textSync(text[projectPath])));
const questions = {
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
const askGenerateQuestions = () => __awaiter(this, void 0, void 0, function* () {
    const answers = yield inquirer.prompt(questions[projectPath]);
    const questionsHelper = require(`./Scripts/${projectPath}/index`);
    questionsHelper.default.showQuestions(answers.fileType);
});
program.version('0.2.0');
program.command('add').alias('a')
    .description('Adds new component, page or plugin')
    .action(() => __awaiter(this, void 0, void 0, function* () { return askGenerateQuestions(); }));
program.command('add:plugin <name>')
    .description('Adds new plugin. Styled or Sass.')
    .action((name) => {
    const pluginsHelper = require(`./Plugins/${projectPath}/index`);
    pluginsHelper.default.addPlugin(name);
});
if (process.argv.length === 2) {
    askGenerateQuestions();
}
program.parse(process.argv);
//# sourceMappingURL=index.js.map