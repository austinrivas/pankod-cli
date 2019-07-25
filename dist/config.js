"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = {
    moleculer: {
        brokerHelper: './test/Utils/BrokerHelper.ts',
        entityDir: './src/Entities',
        integrationTestDir: './test/Integration',
        interfaceDir: './src/Interfaces',
        repositoriesDir: './src/Repositories',
        repositoriesTestDir: './test/Unit/Repositories',
        serviceHelperTestDir: './test/Unit/ServiceHelpers',
        servicesDir: './services',
        servicesHelperDir: './src/ServiceHelpers',
        servicesTestDir: './test/Unit/MicroServices',
        templates: {
            brokerHelperCreate: './dist/Templates/moleculer/Tests/BrokerHelperCreate.mustache',
            brokerHelperImport: './dist/Templates/moleculer/Tests/BrokerHelperImport.mustache',
            createEntityIndexTemplate: './dist/Templates/moleculer/Repositories/EntityIndex.mustache',
            createEntityTemplatePath: './dist/Templates/moleculer/Repositories/Entity.mustache',
            createServiceHelperIndexTemplate: './dist/Templates/moleculer/Services/HelperIndex.mustache',
            createServiceHelperTemplatePath: './dist/Templates/moleculer/Services/Helper.mustache',
            createServiceHelperTestTemplatePath: './dist/Templates/moleculer/Tests/ServiceHelper.mustache',
        }
    },
    nextjs: {
        actionDir: './src/Actions',
        compInterfaceDir: './src/Interfaces/Components',
        componentsDir: './src/Components',
        definitionsDir: './src/Definitions',
        filesDir: './files',
        interfaceDir: './src/Interfaces/index.ts',
        mockDir: '/dir',
        mockPagesDir: '/pages',
        mockSrcDir: '/src',
        pageInterfaceDir: './src/Interfaces/Pages',
        pagesDir: './pages',
        reducerDir: './src/Redux/Reducers',
        reduxInterfaceDir: './src/Interfaces/Redux/Store.d.ts',
        routesDir: './app/routes.js',
        storeDir: './src',
        templates: {
            addRouteTemplate: './dist/Templates/nextjs/Routes.mustache',
            compInterfaceIndex: './dist/Templates/nextjs/Interfaces/ComponentIndex.mustache',
            createInterfaceTempPath: './dist/Templates/nextjs/Interfaces/Component.mustache',
            pageInterfaceIndex: './dist/Templates/nextjs/Interfaces/PageIndex.mustache',
            storeImportInterface: './dist/Templates/nextjs/Interfaces/ReduxImport.mustache',
            storeInterface: './dist/Templates/nextjs/Interfaces/ReduxStore.mustache',
            stylePageTemplate: './dist/Templates/nextjs/Styles.mustache'
        }
    }
};
//# sourceMappingURL=config.js.map