import { createStore } from "redux"


const initialState = {
  flagStart: false,
  interfaz : 'HOME'
}

function reducer (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case 'SET_FLAG_START':
      return { ...state, flagStart: payload };
    case 'UPDATE_INTERFAZ':
      return { ...state, interfaz: payload }
    case 'RESET_REDUCER':
      return initialState;
    default:
      return state;
  }
}

export default createStore(reducer);
