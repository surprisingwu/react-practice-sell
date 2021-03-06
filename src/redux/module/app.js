const initialState = {
  error: null
}

export const types = {
  CLEAR_ERROR: "APP/CLEAR_ERROR"
}
//action creators
export const actions = {
  clearError: () => ({
    type: types.CLEAR_ERROR
  })
}



export default (state = initialState, action) => {
  const { type, error } = action
  if (type === types.CLEAR_ERROR) {
    return {...state, error: null}
  } else if (error) {
    console.log(error)
    return {...state, error: error}
  }
  return state;
};
