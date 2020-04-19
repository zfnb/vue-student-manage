<template>
    <table>
        <thead>
        <tr>
            <th>学号</th>
            <th>姓名</th>
            <th>性别</th>
            <th>邮箱</th>
            <th>年龄</th>
            <th>手机号</th>
            <th>住址</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody id="tbody" v-if="list.length>0">
        <tr v-for="stu in list" :key="stu.id">
            <td>{{stu.sNo}}</td>
            <td>{{stu.name}}</td>
            <td>{{stu.sex===0?'男':'女'}}</td>
            <td>{{stu.email}}</td>
            <td>{{new Date().getFullYear() - stu.birth}}</td>
            <td>{{stu.phone}}</td>
            <td>{{stu.address}}</td>
            <td>
                <button class="btn edit" @click="edit(stu)">修改</button>
                <button class="btn delete" @click="deleteStu(stu.sNo)">删除</button>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    // import {findAllStudent} from '../../request'
    import {mapActions, mapMutations, mapState} from 'vuex'

    export default {
        name: "StudentTable",
        computed: {
            ...mapState(['list'])
        },
        methods: {
            ...mapActions(['getStudentList', 'deleteStudentInfo']),
            ...mapMutations(['handleShowModal', 'setActiveStu']),
            edit(stu) {
                this.setActiveStu(stu);
                this.handleShowModal(true);
            },
            deleteStu(number) {
                this.deleteStudentInfo(number).then(msg => {
                    const isDelete = window.confirm("是否确定删除学生信息？");
                    if (isDelete) {
                        this.$toast({msg, type: 1});
                        this.getStudentList(1);
                    } else return;
                })
            }
        },
        created() {
            this.getStudentList(1);
        },
    }
</script>

<style scoped>
    table {
        width: 100%;
        border-collapse: collapse;
    }

    table tr th {
        background-color: #ddd;
    }

    table tr, th, td {
        font-weight: bold;
        line-height: 35px;
        text-align: center;
        border: 1px solid #ccc;
        font-size: 14px;
    }

    table td .btn {
        padding: 3px 10px;
        color: #fff;
        border-radius: 8px;
        text-shadow: 1px 1px 1px #000;
    }

    table td .edit {
        background-color: green;
    }

    table td .delete {
        background-color: red;
    }

</style>