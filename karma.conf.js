    // Karma configuration
    // Generated on Sun Jan 29 2017 22:51:56 GMT+0200 (Jerusalem Standard Time)

    module.exports = function (config) {
        config.set({
            plugins: [
                'karma-*',
                require('karma-jasmine-html-reporter')
            ],
            // base path that will be used to resolve all patterns (eg. files, exclude)
            basePath: '',
            // frameworks to use
            // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
            frameworks: ['jasmine'], //测试的套件
            // list of files / patterns to load in the browser
            files: [ //测试的文件位置
                'src/external/*.js',
                'config/*.js',
                'src/*.js',
                'tests/test.js',
                'index.html'
            ],
            exclude: [ // 排除不需要测试的内容
                'node_modules',
                '**/*.swp',
              ],
            autoWatch: true,
            // list of files to exclude
            exclude: [],

            // preprocess matching files before serving them to the browser
            // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor

            // preprocessors: {'src/*.js': ['coverage']},

            // test results reporter to use
            // possible values: 'dots', 'progress'
            // available reporters: https://npmjs.org/browse/keyword/karma-reporter

            reporters: ['dots', 'junit'],
            junitReporter: {
                useBrowserName: false,
                outputFile: 'test-results.xml',
                outputDir: 'reporters'
            },
            // jasmineHtmlReporter: {
            //     suppressAll: true, // Suppress all messages (overrides other suppress settings)
            //     suppressFailed: true // Suppress failed messages
            // },

            // web server port
            port: 9876,

            // enable / disable colors in the output (reporters and logs)
            colors: true,

            // level of logging
            // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
            logLevel: config.LOG_INFO,

            // enable / disable watching file and executing tests whenever any file changes

            // start these browsers
            // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
            browsers: ['myChrome'],
            // browsers: ['myChrome'],
            customLaunchers: {
              MyHeadlessChrome: {
                    base: 'ChromeHeadless',
                    flags: ['--use-fake-device-for-media-stream','--autoplay-policy=no-user-gesture-required']
                },
              myChrome:{
                base: 'Chrome',
                flags: ['--use-fake-device-for-media-stream','-use-fake-ui-for-media-stream','--disable-web-security','--no-sandbox',' --headless',' --disable-gpu','--remote-debugging-port=9222']
              }
            },
            // reporters: ['jasmine-diff'],
            // Continuous Integration mode
            // if true, Karma captures browsers, runs the tests and exits
            singleRun: true,
            // Concurrency level
            // how many browser should be started simultaneous
            concurrency: Infinity
        })
    }
