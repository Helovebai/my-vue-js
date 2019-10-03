import { mapState, mapActions, mapMutations } from 'vuex';

const componentMixin = {
    methods: {
        ...mapActions({
            changeMsgSync: 'changeMsgSync',
            login: 'login',
        }),
        ...mapMutations({
            changeMsg: 'changeMsg',
        }),
    },
    computed: {
        ...mapState({
            msg: state => state.index.msg,
        }),
    },
    created() {
        this.changeMsgSync('SenSir').then(() => {
            console.log('changeDown');
            setTimeout(() => {
                this.changeMsg('changeMsgAgin');
                console.log('changeAginDown');
                this.login({
                    username: 'username',
                    password: 'password',
                });
            }, 1000, this);
        });
    },
};

export default componentMixin;
