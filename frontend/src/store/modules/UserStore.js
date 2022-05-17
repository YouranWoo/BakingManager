import router from '@/router' 

const UserStore = { 
    state: { 
        userId: '', 
        userName: '', 
        token: '' }, //login 성공 시 저장되는 값 (backend에서 전달받은 값)
    mutations: { 
        login: function (state, payload) { //login 성공시
            state.userEmail = payload.userEmail 
            state.userName = payload.userName 
            state.token = payload.token 
        }, 
        loginCheck: function (state) { 
            if (!state.token) { 
                router.push({ name: 'login' 
            }).catch(error => { 
                console.log(error) 
            }) 
        } 
    } 
}      
} 

export default UserStore