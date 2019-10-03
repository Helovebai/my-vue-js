const dataArr = require('./index');

const serverFun = (app) => {
    dataArr.forEach((item) => {
        app[item.method](item.url, (req, res) => {
            res.send(item.res);
        });
    });
};

module.exports = serverFun;
