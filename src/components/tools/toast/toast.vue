<template>
    <div id="toast" :class="fade?'fadeIn':'fadeOut'" v-if="show">
        <div class="content" :class="classStyle">{{types}}{{msg}}</div>
    </div>
</template>

<style scoped>
    div {
        width: 150px;
        height: 30px;
        position: absolute;
        display: inline-block;
        left: 50%;
        top: 10%;
        transform: translateX(-50%);
        text-align: center;
        line-height: 30px;
    }

    .fadeIn {
        animation: fadeIn .6s forwards;
    }

    .fadeOut {
        animation: fadeOut .6s forwards;
    }

    .content {
        width: 100%;
        height: 100%;
        padding: 5px 15px;
        border-radius: 5px;
        display: inline-block;
        font-size: 12px;
    }

    .success {
        background-color: green;
        color: pink;
    }

    .error {
        background-color: red;
        color: #fff;
    }

    @keyframes fadeIn {
        from {
            top: 0;
            opacity: 0;
        }
        to {
            top: 50px;
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        from {
            top: 50px;
            opacity: 1;
        }
        to {
            top: 0;
            opacity: 0;
        }
    }
</style>