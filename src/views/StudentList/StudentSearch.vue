<template>
    <div class="search">
        <span>关键字查找学生：</span>
        <input type="text" v-model="options.search" placeholder="输入邮箱，学号关键字">
        <div class="sex-search">
            <label for="male">男</label>
            <input type="radio" id="male" name="sex" :value="0" v-model="options.sex">
            <label for="female">女</label>
            <input type="radio" id="female" name="sex" :value="1" v-model="options.sex">
            <label for="all">全部</label>
            <input type="radio" id="all" name="sex" :value="-1" v-model="options.sex">
        </div>
        <button @click="search">查找</button>
    </div>
</template>

<script>
    // page, size, sex, search,
    export default {
        name: "StudentSearch",
        data() {
            return {
                options: {
                    sex: -1,
                    search: '',
                    target:1
                }
            }
        },
        methods: {
            search() {
                this.$store.dispatch('getStudentListByKey',this.options)
                .then(toast=>{
                  this.$toast({...toast})
                })
            }
        },
    }
</script>

<style scoped>
    .search {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    input[type=text] {
        width: 150px;
    }

    .search span {
        font-weight: bolder;
    }

    button {
        margin-left: 10px;
        background-color: #666666;
        color: #fff;
        border: 1px solid #ccc;
    }

    .sex-search {
        margin: 0 20px;
        font-size: 15px;
    }
</style>