export const state = () => ({
    users:[] ,
    statusLogin: null
})
export const mutations ={
    createUser(state, data) {
        state.users.push(data)
    },
    userLogin(state, data) {
        state.statusLogin = data
    },
    userLogout(state) {
        state.statusLogin = null
    },
}