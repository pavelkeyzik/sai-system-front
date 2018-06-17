const usersReducer = (state = {isLoading: true}, action) => {
  switch(action.type) {
    case 'USERS_IS_LOADING':
      return {...state, isLoading: true};
    case 'USERS_IS_LOADED':
      return {...state, isLoading: false, list: action.payload};
    default:
      return state;
  }
};

export default usersReducer;