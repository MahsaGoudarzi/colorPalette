export default {
    addPalette: ({ commit }, payload) => {
        commit('appendPalette', payload)
    },
    editPalette:({commit},payload)=>{
        commit('editCPalette', payload)
    }
}