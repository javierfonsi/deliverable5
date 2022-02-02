const INITIAL_STATE = {
    name: ""
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_NAME":
            return {
                ...state,
                name: action.payload
            }    
        case "SET_POKELIST":
            return {
                ...state,
                pokemonList: action.payload            
            }
        case "DELETE_USER":
            return {
                ...state,
                name:""
            }
        default:
            return state
    }
    
};

export default reducer;