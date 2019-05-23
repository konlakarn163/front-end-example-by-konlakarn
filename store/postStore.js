export const state = () =>({
    post:[],
    searchPost: '',
})
export const mutation = {
    searchPosts(state, value){
        state.searchPost= value
    },
    clearSearch(state){
        state.searchPost= ''
    }
}
export const getter ={
    isSearch: (state) =>{
        if(state.searchPost !=''){
            return state.post.filter((each) =>{
                return each.post.title.includes(state.searchPost)
            })
        }
    }
}