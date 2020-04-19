<template>
    <div class="student-add">
        <form class="add-form">
            <div class="item">
                <label for="name">姓名</label>
                <input type="text" v-model="stu.name" id="name">
            </div>
            <div class="item">
                <label for="name">性别</label>
                <label for="edit-male" class="sex">男</label>
                <input type="radio" checked name="sex"
                       value="0"
                       id="edit-male"
                       v-model="stu.sex">
                <label for="edit-female" class="sex">女</label>
                <input type="radio"
                       name="sex"
                       value="1"
                       id="edit-female"
                       v-model="stu.sex">
            </div>
            <div class="item">
                <label for="email">邮箱</label>
                <input type="text" id="email" v-model="stu.email">
            </div>
            <div class="item">
                <label for="sNo">学号</label>
                <input type="text" id="sNo" v-model="stu.sNo">
            </div>
            <div class="item">
                <label for="birth">出生年月</label>
                <input type="text" id="birth" v-model="stu.birth">
            </div>
            <div class="item">
                <label for="phone">手机号</label>
                <input type="text" id="phone" v-model="stu.phone">
            </div>
            <div class="item">
                <label for="address">住址</label>
                <input type="text" id="address" v-model="stu.address">
            </div>
            <div class="item">
                <label for=""></label>
                <input @click="addStu" class="btn" id="addStudentBtn" type="button" value="添加">
                <input class="btn" type="reset" value="重置">
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "StudentAdd",
        data() {
            return {
                stu: {
                    sNo: null,
                    name: null,
                    sex: null,
                    birth: null,
                    phone: null,
                    address: null,
                    email: null
                },
                isAdd: true
            }
        },
        methods: {
            addStu() {
                console.log(this.stu);
                for (const key in this.stu) {
                    if (this.stu[key] == null || this.stu[key] == "") {
                        this.isAdd = false
                        this.$toast({msg: `请填写${key}`});
                        return;
                    }
                }
                if (this.isAdd) {
                    this.$store.dispatch('addStudentInfo', this.stu)
                        .then(msg => {
                            this.$toast({msg:msg.msg,type:2});
                            if (!msg.notReplace) {
                                this.$router.replace('/studentList');
                            }
                        })
                }
            }
        }
    }
</script>

<style scoped>
    /*添加学生区域*/

    .student-add form {
        width: 400px;
        margin: 100px auto;
    }

    .student-add form .item {
        margin: 10px 0px;
    }

    .student-add form .item label:not(.sex) {
        width: 100px;
        text-align: right;
        display: inline-block;
    }

    .student-add form .item .btn {
        padding: 5px 22px;
        color: #cccccc;
        background-color: #666;
        font-weight: bolder;
    }


</style>