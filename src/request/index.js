import axios from 'axios'

axios.defaults.baseURL = 'https://open.duyiedu.com'
const appkey='zf_yyy_1569734712113'
// const appkey = 'BestLeaderJN_1569886865181'
// const appkey = 'BestLeaderJN_1569886865181'
// const appkey = 'kaivon_1574822824764'
axios.interceptors.response.use(res => {
    // console.log(res);
    if (res.data.msg === '已达今日上限10000') alert(res.data.msg);
    return res.data
})

export function findAllStudent() {
    return axios.get('/api/student/findAll', {
        params: {
            appkey
        }
    }).then(res => {
        if (res.data.status === "success") {
            return res;
        } else {
            console.log(res);
        }
    })
}

export function findStudentByPage(page, size) {
    return axios.get('api/student/findByPage', {
        params: {
            appkey,
            page,
            size
        }
    }).then(res => {
        if (res.status === "success") {
            return res;
        }
    })
}

export function funStudentByKey({page, size, sex, search}) {
    return axios.get('/api/student/searchStudent', {
        params: {
            appkey,
            page,
            size,
            sex,
            search,
        }
    }).then(res => {
        return res;
    })
}

export function deleteStudent(sNo) {
    return axios.get('/api/student/delBySno', {
        params: {
            appkey,
            sNo
        }
    }).then(res => {
        if (res.status === "success") {
            return res;
        }
    })
}

export function addStudent(param) {
    return axios.get('/api/student/addStudent', {
        params: {
            appkey,
            ...param
        }
    }).then(res => {
        return res;
    })
}

export function updateStudent(options) {
    return axios.get('/api/student/updateStudent', {
        params: {
            ...options,
        }
    }).then(res => {
        return res;
    })
}

export function register(url, {account, username, password, rePassword}) {
    return axios({
        url,
        method: 'post',
        params: {
            appkey,
            account,
            username,
            password,
            rePassword
        },
    }).then(res => {
        return res
    })
}

export function login({account, password}) {
    return axios({
        url: '/api/student/stuLogin',
        method: 'post',
        params: {
            appkey,
            account,
            password,
        },
    }).then(res => {
        return res
    })
}