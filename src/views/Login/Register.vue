<template>
    <div class="register-box">
        <div class="register">
            <img class="logo" src="@/assets/img/left.svg"
                 @click="$router.push('/login')"
                 alt="左箭头">
            <h1>注册</h1>
            <form>
                <div class="item">
                    <span>输出用户名：</span>
                    <input type="text" placeholder="请输入用户名" v-model="register.username">
                </div>
                <div class="item">
                    <span>请输入账号：</span>
                    <input type="text" placeholder="请输入账号" v-model="register.account">
                </div>
                <div class="item">
                    <span>请输入密码：</span>
                    <input type="password" placeholder="请输入密码" v-model="register.password">
                </div>
                <div class="item">
                    <span>请确认密码：</span>
                    <input type="password" placeholder="请确认密码" v-model="register.rePassword">
                </div>
            </form>
            <input type="button" class="btn" value="注册" @click="handleRegister">
        </div>
    </div>
</template>

<script>
    import {register} from '../../request/index'

    export default {
        name: "Register",
        data() {
            return {
                register: {
                    account: null,
                    username: null,
                    password: null,
                    rePassword: null
                }
            }
        },
        methods: {
            handleRegister() {
                register('/api/student/stuRegister', this.register).then(res => {
                    if (res.status === 'success') {
                        this.$toast({msg: res.msg, type: 1})
                        this.$router.push('/login')
                    } else {
                        this.$toast({msg: res.msg, type: 2})
                    }
                })
            }
        },
    }
</script>

<style scoped>
    .logo {
        width: 20px;
        height: 20px;
        position: absolute;
        -webkit-text-fill-color: #ff9988;
    }

    .register-box {
        width: 100%;
        height: 100%;
        background: url('../../assets/img/register.jpg');
        background-size: cover;
    }

    .register {
        box-shadow: 3px 3px 2px 5px rgba(25, 25, 25, .5);
        padding: 50px 50px;
        box-sizing: border-box;
        width: 450px;
        height: 420px;
        background-color: rgba(0, 0, 0, .5);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    h1 {
        font-size: 25px;
        margin-bottom: 50px;
        color: orange;
        text-align: center;
    }

    .item {
        margin-top: 35px;
        display: flex;
        /*align-items: bottom;*/
    }

    .item span {
        margin-right: 20px;
        color: #eee;
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
        background-color: forestgreen;
        border: none;
        border-radius: 10px;
        outline: none;
        color: #fff;
        margin-top: 30px;
    }

</style>