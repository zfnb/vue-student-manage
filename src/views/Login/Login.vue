<template>
    <div class="loginBox">
        <div class="login">
            <h2>请登录</h2>
            <form>
                <div class="item">
                    <span>账号:</span>
                    <input type="text" placeholder="请输入账号"
                           v-model="data.account">
                </div>
                <div class="item">
                    <span>密码:</span>
                    <input type="password" placeholder="请输入密码"
                           v-model="data.password">
                </div>
            </form>
            <input type="button"
                   class=" btn login-btn"
                   value="登录"
                   @click="handleLogin">
            <input type="button" class="btn register-btn" value="注册"
                   @click="$router.push('/register')">
        </div>
    </div>
</template>

<script>
    import {login} from '../../request/index'

    export default {
        name: "Login",
        data() {
            return {
                data: {
                    account: null,
                    password: null,
                }
            }
        },
        methods: {
            handleLogin() {
                login(this.data).then(res => {
                    if (res.status === 'success') {
                        this.$isLogin = true;
                        this.$toast({msg: res.msg, type: 1})
                        this.$router.push('/home/studentList')
                    } else {
                        this.$toast({msg: res.msg, type: 2})
                    }
                })
            }
        },
    }
</script>

<style scoped>
    .loginBox {
        width: 100%;
        height: 100%;
        background: url('../../assets/img/login.jpg');
        background-size: cover;
        font-family: sans-serif;
    }

    .login {
        padding: 50px 50px;
        box-sizing: border-box;
        width: 350px;
        height: 420px;
        background-color: rgba(0, 0, 0, .5);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 3px 3px 2px 5px rgba(25,25,25,.6);

    }

    h2 {
        margin-bottom: 50px;
        color: orange;
        text-align: center;
    }

    .item {
        margin-top: 50px;
        display: flex;
        /*align-items: bottom;*/
    }

    .item span {
        margin-right: 20px;
        color: white;
        font-size: 18px;
    }

    .item input {
        -webkit-text-fill-color: #ccc;
        font-size: 15px;
        background: none;
        outline: none;
        border: none;
        padding-bottom: 5px;
        border-bottom: 1px solid #ccc;
    }

    .btn {
        width: 100%;
        height: 30px;
        background-color: deeppink;
        border: none;
        border-radius: 10px;
        outline: none;
        color: #fff;
    }

    .login-btn {
        margin-top: 50px;

    }

    .register-btn {
        margin-top: 10px;
        background-color: forestgreen;
    }
</style>