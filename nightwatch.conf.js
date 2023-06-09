module.exports = {
    // An array of folders (excluding subfolders) where your tests are located;
    // if this is not specified, the test source must be passed as the second argument to the test runner.
    src_folders: ["test"],

    // See https://nightwatchjs.org/guide/concepts/page-object-model.html
    page_objects_path: ["nightwatch/page-objects"],

    // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
    custom_commands_path: ["nightwatch/custom-commands"],

    // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
    custom_assertions_path: ["nightwatch/custom-assertions"],

    // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
    plugins: [],

    // See https://nightwatchjs.org/guide/concepts/test-globals.html
    globals_path: "",

    webdriver: {},

    test_workers: {
        enabled: true
    },

    test_settings: {
        default: {
            disable_error_log: false,
            launch_url: "",

            screenshots: {
                enabled: false,
                path: "screens",
                on_failure: true
            },

            desiredCapabilities: {
                browserName: "chrome",
                chromeOptions: {
                    args: ["start-maximized"]
                }
            },

            webdriver: {
                start_process: true,
                server_path: ""
            }
        },

        chrome: {
            desiredCapabilities: {
                browserName: "chrome",
                "goog:chromeOptions": {
                    // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
                    //
                    // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
                    w3c: true,
                    args: [
                        //'--no-sandbox',
                        //'--ignore-certificate-errors',
                        //'--allow-insecure-localhost',
                        //'--headless'
                    ]
                }
            },

            webdriver: {
                start_process: true,
                server_path: require("chromedriver").path,
                port: 9515
            }
        }
    },

    usage_analytics: {
        enabled: true,
        log_path: "./logs/analytics",
        client_id: "28bd7043-3f6c-499c-80bd-9d7cdcfaf573"
    }
}
