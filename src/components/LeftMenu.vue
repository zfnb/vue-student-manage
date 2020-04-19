<template>
    <div class="left-menu">
        <dl class="student-menu">
            <dt>学生管理</dt>
            <router-link tag="dd" to="/home/studentList">学生列表</router-link>
            <router-link tag="dd" to="/home/studentAdd">添加学生</router-link>
        </dl>
    </div>
</template>

<script>
    export default {
        name: "LeftMenu"
    }
</script>

<style scoped>

    /*中间左区域*/
    .left-menu {
        background-image: linear-gradient(to bottom, #357, #688, #666);
        height: calc(100% - 120px);
        width: 100%;
        float: left;
        width: 200px;
        background-color: aqua;
    }

    .left-menu dl {
        text-shadow: 1px 1px 2px #fff;
        line-height: 80px;
        font-size: 28px;
        font-weight: bolder;

    }

    .left-menu dd {
        font-weight: bold;
        font-size: 20px;
        line-height: 50px;
        text-align: center;
        width: 100%;
    }

    .left-menu .active {
        background-color: rgba(0,0,0,.3);
        color: #ff9;
        border-bottom-left-radius: 25px;
        border-top-left-radius: 25px;
    }

    .left-menu dd:hover {
          border-bottom-left-radius: 25px;
        border-top-left-radius: 25px;
         background-color: rgba(0,0,0,.2);
    }

</style>