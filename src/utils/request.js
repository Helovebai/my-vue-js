import axios from 'axios';

const myAxios = axios.create({
    baseURL: process.env.VUE_APP_PUBLIC_URL,
    timeout: 6000,
});

myAxios.interceptors.request.use((config) => {
    const newConfig = {
        // 根据需求修改请求头部
        ...config,
        headers: {
            ...config.headers,
        },
    };
    return newConfig;
});

myAxios.interceptors.response.use((res) => {
    // 根据后端返回数据修改
    const { data } = res;
    return data;
}, (err) => {
    throw err;
});

export default myAxios;
