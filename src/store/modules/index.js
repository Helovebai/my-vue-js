import { login } from '@/api/user';

const indexModule = {
    state: {
        msg: 'hello word',
    },
    mutations: {
        changeMsg(state, value) {
            state.msg = value;
        },
        signIn() {
            console.log('登录完成');
        },
    },
    actions: {
        changeMsgSync({ commit }, value) {
            return new Promise((resolve, reject) => {
                try {
                    setTimeout(() => {
                        commit('changeMsg', value);
                        resolve();
                    }, 1000);
                } catch (err) {
                    reject(err);
                }
            });
        },
        async login({ commit }, { username, password }) {
            await login(username, password);
            commit('signIn');
        },
    },
    getters: {
        getterMsg: state => `getter msg: ${state.msg}`,
    },
};
export default indexModule;
