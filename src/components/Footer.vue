<template>
    <footer>
        <span class="author">
        Author：Virtual
    </span>
        <span class="date">
        DATE:2020-4-16
    </span>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    footer {
        width: 100%;
        height: 60px;
        background-image: linear-gradient(to right, #333, #030, #000);
        color: #fff;
        line-height: 60px;
        text-align: center;
        position: absolute;
        bottom: 0;
    }

    footer span {
        margin-left: 500px;
        color: orange;
    }
</style>