const packFun = require('./util');

const loginRes = packFun('post', '/login', {
    token: '12sddw2122121',
    uid: '122222222222',
});

module.exports = {
    loginRes,
};
