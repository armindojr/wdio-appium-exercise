import { join } from 'path';
import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
    runner: 'local',

    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },

    specs: [
        './test/specs/**/*.ts'
    ],

    exclude: [],

    maxInstances: 1,

    capabilities: [
        {
            platformName: 'Android',
            maxInstances: 1,
            'appium:deviceName': 'Pixel_3a',
            'appium:platformVersion': '13.0',
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'UiAutomator2',
            'appium:app': join(process.cwd(), './apps/native-v0.4.0.apk'),
            'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
            'appium:newCommandTimeout': 240,
        }
    ],

    logLevel: 'error',

    bail: 0,

    baseUrl: '',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    // Default appium port
    port: 4723,

    services: [
        ['appium', {
            command: 'appium',
            relaxedSecurity: true,
            address: 'localhost',
            log: './appium.log',
        }]
    ],

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
