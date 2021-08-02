import { createStore } from "redux"

const initialState={
    number : 1
}

const reducer = (state = initialState , action) => {
    const {type, number} = action

    if(type === "@changeInterfaz"){
        return{
            ...state,
            number
        }
    }

    return state
}


export default 
createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)