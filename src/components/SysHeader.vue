<template>
    <header>
        <img class="logo" src="../assets/img/index.png" alt="">
        <span>
            <span class="font font1">学</span>
            <span class="font font2">生</span>
            <span class="font font3">管</span>
            <span class="font font4">理</span>
            <span class="font font5">系</span>
            <span class="font font6">统</span>
        </span>
        <div class="back" @click="handleBack">退出登录</div>
    </header>
</template>

<script>
    export default {
        name: "SysHeader",
        methods: {
            handleBack() {
                this.$router.replace('/login');
                this.$isLogin=false;
            }
        },
    }
</script>

<style scoped>
    @keyframes jump {
        from{
            transform: translateY(0px);
        }
        25%{
            transform: translateY(3px);
        }
        50%{
            transform: translateY(8px);
        }
        75%{
            transform: translateY(3px);
        }
        to{
            transform: translateY(0px);
        }
    }
    .font{
        position: absolute;
    }
    .font1{
        left:85px;
        animation: jump 1s ease-in .1s infinite alternate forwards;
    }
    .font2{
        left:110px;
        animation: jump 1s ease-in .2s  infinite alternate forwards;
    }
    .font3{
        left:135px;
        animation: jump 1s ease-in .3s infinite alternate forwards;
    }
    .font4{
        left:160px;
        animation: jump 1s ease-in .4s infinite alternate forwards;
    }
    .font5{
        left:185px;
        animation: jump 1s ease-in .5s infinite alternate forwards;
    }
    .font6{
        left:210px;
        animation: jump 1s ease-in .6s infinite alternate forwards;
    }
    .back {
        position: absolute;
        right: 20px;
        background-color: rgba(90,200,9,.4);
        height: 30px;
        line-height: 30px;
        top: 15px;
        padding: 3px 8px;
        border-radius: 6px;
        color: white;
        font-size: 16px;
    }

    html, body, .container {
        height: 100%;
        overflow: hidden;
    }


    /*页头区域*/
    header {
        width: 100%;
        height: 60px;
        background-image: linear-gradient(to right,#000,#030,#333);
        color: #ccc;
    }

    header .logo {
        width: 25px;
        height: 25px;
        background-color: #cccccc;
        vertical-align: middle;
        margin: 15px 30px;
    }

    header span {
        line-height: 60px;
        font-size: 23px;
        font-weight: bolder;
    }
</style>