import vue from 'vue'
import vuex from 'vuex'
import {addStudent, deleteStudent, findStudentByPage, funStudentByKey, updateStudent} from '../request'

vue.use(vuex)
export default new vuex.Store({
    state: {
        list: [],
        count: 0,
        size: 5,
        totalPage: 1,
        current: 1,
        activeStu: null,
        showModal: false,
        hasKey: false
    },
    mutations: {
        setList(state, list) {
            state.list = list
        },
        setTotalPage(state, count) {
            state.count = count
            state.totalPage = Math.ceil(count / state.size)
        },
        handleShowModal(state, bool) {
            state.showModal = bool
        },
        setActiveStu(state, stu) {
            state.activeStu = stu
        }
    },
    actions: {
        getStudentList(context, page) {
            if (typeof context.state.hasKey==='object') return false;
            findStudentByPage(page, context.state.size).then(res => {
                context.state.current = page;
                context.commit('setList', res.data.findByPage);
                context.commit('setTotalPage', res.data.cont);
            })
        },
        getStudentListByKey(context, payload) {
            if (payload.search !== "") {
                context.state.hasKey = {...payload};
                context.state.current = payload.target;
                return funStudentByKey({
                    ...payload,
                    page: context.state.current,
                    size: context.state.size
                }).then(res => {
                    context.commit('setList', res.data.searchList);
                    context.commit('setTotalPage', res.data.cont);
                    return {msg: res.msg,type:1}
                })
            } else {
                if (payload.sex === -1) {
                    context.state.hasKey = false
                    const toast = {msg: "查询成功",type:1}
                    return toast
                } else {
                    context.dispatch('getStudentList', 1);
                    return {msg:'请输入关键字查询',type:2}
                }
            }
            // page, size, sex, search,
        },
        updateStudentInfo(context, params) {
            return updateStudent(params).then(res => {
                if (res.status === 'success') {
                    context.commit('handleShowModal', false);
                    return {msg: res.msg, type: 1};
                } else {
                    return {msg: res.msg, type: 2}
                }
            })
        },
        deleteStudentInfo(context, number) {
            return deleteStudent(number).then(res => {
                return res.msg
            })
        },
        addStudentInfo(context, options) {
            return addStudent(options).then(res => {
                if (res.status === 'success') {
                    return {msg: res.msg, type: 1}
                } else {
                    return {msg: res.msg, type: 2, notReplace: true}
                }
            })
        }
    }
})