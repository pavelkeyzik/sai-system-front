const carNumberReducer = (state = {isLoading: false, isRequestedBefore: false}, action) => {
  switch(action.type) {
    case 'INFORMATION_ABOUT_NUMBER_IS_LOADING':
      return {...state, isLoading: true, isRequestedBefore: true};
    case 'INFORMATION_ABOUT_NUMBER_IS_LOADED':
      return {...state, isLoading: false, informationList: action.payload};
    default:
      return state;
  }
};

export default carNumberReducer;