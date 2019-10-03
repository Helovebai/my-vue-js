const strToMd5 = (str) => {
    const supportMd5 = !!window.btoa;
    return supportMd5 ? window.btoa(str) : str;
};

const md5ToStr = (md5Str) => {
    const supportMd5 = !!window.atob;
    return supportMd5 ? window.atob(md5Str) : md5Str;
};

// 根据需求修改需要保存到 localstorage 中的数据
const TOKEN_KET = strToMd5('point_event_token');
export const setToken = (token) => {
    const tokenValue = strToMd5(token || null);
    localStorage.setItem(TOKEN_KET, tokenValue);
};
export const getToken = () => {
    const res = localStorage.getItem(TOKEN_KET);
    return res ? md5ToStr(res) : null;
};
export const clearToken = () => {
    localStorage.removeItem(TOKEN_KET);
};
