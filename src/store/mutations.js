export default {
    appendPalette:(state, payload) => {
        state.palettes.unshift(payload)
    },
    editCPalette:(state,payload) => {
        state.palettes[payload.id]=payload
    }
}