export const state = () => ({
    users:[] 
})
export const mutation ={
    statusLogin(state,data){
        state.status = data
    },
    statusNone(state){
        state.status = false
    }
}