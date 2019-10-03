const path = require('path');
const serverFun = require('./src/mock/mockserver');

const httpPath = process.env.VUE_APP_USE_MOCK === 'true'
    ? `http://localhost:${process.env.VUE_APP_PORT}`
    : '';

module.exports = {
    publicPath: process.env.VUE_APP_PUBLIC_PATH,
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                path.resolve(__dirname, './src/styles/mixin.scss'),
                path.resolve(__dirname, './src/styles/params.scss'),
            ],
        },
    },
    devServer: {
        port: Number(process.env.VUE_APP_PORT),
        before: (app) => {
            if (process.env.VUE_APP_USE_MOCK === 'true') {
                serverFun(app);
            }
        },
        proxy: {
            [process.env.VUE_APP_PUBLIC_URL]: {
                target: httpPath,
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    [`^${process.env.VUE_APP_PUBLIC_URL}`]: '',
                },
            },
        },
    },
};
