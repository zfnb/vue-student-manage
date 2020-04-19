<template>
    <div class="modal">
        <div class="mask" @click="$store.commit('handleShowModal',false)"></div>
        <form class="modal-form">
            <p>编辑表单</p>
            <div class="item">
                <label for="name">姓名</label>
                <input type="text" id="name"
                       :value="activeStu.name"
                       @input="edit('name',$event.target.value)"
                >
            </div>
            <div class="item">
                <label for="name">性别:</label>
                <label for="male" class="sex">男</label>
                <input type="radio" checked name="sex"
                       :checked="activeStu.sex===0?true:false" id="male"
                       @change="edit('sex',0)"
                >
                <label for="female" class="sex">女</label>
                <input type="radio" name="sex"
                       :checked="activeStu.sex===1?true:false" id="female"
                       @change="edit('sex',1)"
                >
            </div>
            <div class="item">
                <label for="email">邮箱</label>
                <input type="text" id="email"
                       :value="activeStu.email"
                       @input="edit('email',$event.target.value)"
                >
            </div>
            <div class="item">
                <label for="sNo">学号</label>
                <input type="text" id="sNo"
                       :value="activeStu.sNo"
                       readonly
                       @input="edit('sNo',$event.target.value)"
                >
            </div>
            <div class="item">
                <label for="birth">出生年月</label>
                <input type="text" id="birth"
                       :value="activeStu.birth"
                       @input="edit('birth',$event.target.value)"
                >
            </div>
            <div class="item">
                <label for="phone">手机号</label>
                <input type="text" id="phone"
                       :value="activeStu.phone"
                       @input="edit('phone',$event.target.value)"
                >
            </div>
            <div class="item">
                <label for="address">住址</label>
                <input type="text" id="address"
                       :value="activeStu.address"
                       @input="edit('address',$event.target.value)">
            </div>
            <div class="form-btn">
                <input
                        class="btn edit"
                        type="button"
                        value="修改"
                        @click="commit"/>
                <input
                        class="btn reset"
                        type="button"
                        value="重置"
                        @click="reset"
                />
            </div>
        </form>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        name: "StudentModal",
        data() {
            return {
                stu: {}
            }
        },
        computed: {
            ...mapState(['activeStu']),
              mapActiveStu(){
                return this.activeStu.map(_=>_)
              }
        },
        methods: {
            ...mapActions(['updateStudentInfo']),
            edit(type, value) {
                this.stu[type] = value
            },
            commit() {
                const newStu = Object.assign({}, this.activeStu, this.stu)
                this.updateStudentInfo(newStu).then(data => {
                    this.$toast({msg: data.msg, type: data.type})
                })
            },
            reset() {
                for (let key in this.activeStu) {
                    if (key === 'sex'||key === 'sNo') continue;
                    else {
                        this.activeStu[key] = ""
                    }
                    this.activeStu['sex'] = 0;
                }
            }
        },
    }
</script>

<style scoped>
    .mask {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: -3;
    }

    .modal {
        background-color: rgba(0, 0, 0, .7);
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }

    .modal form {
        width: 400px;
        margin: 150px auto;
        padding: 20px 50px;
        box-sizing: border-box;
        background-color: #fff;
    }

    .modal form p {
        font-size: 25px;
        font-weight: bolder;
        text-align: center;
    }

    .modal form .item {
        margin: 10px;
    }

    .modal .form-btn {
        width: 200px;
        margin: 10px 110px;
    }

    .modal form .item label:not(.sex) {
        width: 100px;
        text-align: right;
        display: inline-block;
    }

    .modal form .form-btn .btn {
        padding: 5px 22px;
        color: #cccccc;
        background-color: #666;
        font-weight: bolder;
    }
</style>