

const musicaReducer = (state = [], action) => {
 
    switch (action.type) {
        case "crear":
            return [...state,action.payload]

            
            case "borrar":
             return state.filter(musica => musica.id !== action.payload);
            
            
            case "editar":
             let index = state.findIndex(musica => musica.id === action.payload.id);
             state[index] = action.payload;

             return [...state];
            
            
            default:

            return state;
            
    }
}

export default musicaReducer