import axios from '@/utils/request';

export const login = (username, password) => axios.post('/login', {
    username,
    password,
});

export const logout = () => axios.post('/logout', {});
