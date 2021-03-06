// #region Global Imports
import {
    QuestionCollection,
    InputQuestion,
    Question,
    ConfirmQuestion,
    ListQuestion
} from 'inquirer';
// #region Global Imports

// #region Local Imports
import { ICommon } from '.';
// #region Local Imports

export type NextElement = 'Page' | 'ClassComponent' | 'FunctionalComponent';

export interface INextjsCommonQuestions {
    addStyle: ConfirmQuestion<ICommon.IAnswers>;
    connectStore: ConfirmQuestion<ICommon.IAnswers>;
    enterComponentName: InputQuestion<ICommon.IAnswers>;
    isHaveReducer: ListQuestion<ICommon.IAnswers>;
}

export interface INextjsQuestions {
    Plugin: QuestionCollection<ICommon.IAnswers>;
    ClassComponent: QuestionCollection<ICommon.IAnswers>;
    FunctionalComponent: QuestionCollection<ICommon.IAnswers>;
    Page: QuestionCollection<ICommon.IAnswers>;
    [key: string]: QuestionCollection<ICommon.IAnswers>;
}

export interface INextjsActions {
    ClassComponent: Function;
    FunctionalComponent: Function;
    Page: Function;
    // Plugin: Function;
    [key: string]: Function;
}

export declare namespace INextjsHelper {
    export interface IAddRoutesReplaceParams {
        routesDir: string;
        routesTemplate: string;
    }

    export interface ICreateInterfaceParams {
        templatePath: string;
        pageInterfaceDir: string;
        compInterfaceDir: string;
        pageInterfaceIndex: string;
        compInterfaceIndex: string;
        storeInterface: string;
        storeImportInterface: string;
        storeImportInterfaceFormatted: string;
        interfaceDir: string;
        reduxInterfaceDir: string;
    }

    export interface ICreateStyle {
        templatePath: string;
        pageDirPath: string;
        compDirPath: string;
    }

    export interface ICreateClassComponentParams {
        templatePath: string;
        indexTemplatePath: string;
        createInterfaceParams: ICreateInterfaceParams;
        addReducerParams: IAddReducerParams;
        addActionParams: IAddActionParams;
    }

    export interface ICreateFuncComponentParams {
        createInterfaceParams: ICreateInterfaceParams;
    }

    export interface IAddReducerParams {
        reducerIndexTemplatePath: string;
        reducerTemplatePath: string;
        reducerStoreTemplatePath: string;
        addActionConstIndexParams: IAddActionConstIndexParams;
    }

    export interface IAddActionConstIndexParams {
        actionConstTemplatePath: string;
    }

    export interface IAddActionParams {
        actionTemplatePath: string;
        actionIndexTemplatePath: string;
    }

    export interface ICreateFuncComponentParams {
        templatePath: string;
        indexTemplatePath: string;
        componentsDir: string;
    }
}
