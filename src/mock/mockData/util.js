/**
 * 包装数据为需要的格式
 * @param {*} method 请求的方法
 * @param {*} url 请求的链接
 * @param {*} data 发送的data
 */
const packFun = (method, url, data) => ({
    method,
    url,
    res: {
        code: 0,
        msg: 'success',
        data,
    },
});
module.exports = packFun;
