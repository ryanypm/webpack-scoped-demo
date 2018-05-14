const isProd = process.env.NODE_ENV === 'production';

// modify here to change the env (backend services)
const env = 'dev'; // beta/prod

const serverConfig = {
    dev_baidu: {
        STATIC_SITE: 'xxx',
    },
    beta_baidu: {
        STATIC_SITE: 'xxx',
    },
    prod_baidu: {
        STATIC_SITE: 'xxx',
    },
}


const config = {
    // current running environment type, prod or staging
    PROD: isProd,

    // static website
    STATIC_SITE: serverConfig[env].STATIC_SITE,

    // game base url
    GAME_SITE: serverConfig[env].GAME_SITE,

    //APP VERSION
    APP_VERSION: '1.0.0',
};

export const setConfig = (options) => {
    Object.assign(config, options);
}

export default config;
