const path = require('path');

const PROJECT_PATH = process.cwd();

const config = {
    PROJECT_PATH,
    CONFIG_PATH: path.join(__dirname),
    SRC_PATH: path.join(PROJECT_PATH, './src/'),
    BUILD_PATH: path.join(PROJECT_PATH, './dist/'),
    PUBLIC_PATH: path.join(PROJECT_PATH, './src/assets/'),
    HTML_PATH: path.join(PROJECT_PATH, './src/'),
    NODE_MODULES_PATH: path.join(PROJECT_PATH, './node_modules/'),
    ignorePages: [],
}

module.exports = config;
