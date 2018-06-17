export const select = (user) => {
  return {
    type: 'USER_SELECTED',
    payload: user
  };
};

export const isLoading = () => {
  return {
    type: 'USERS_IS_LOADING'
  };
};

export const isLoaded = (users) => {
  return {
    type: 'USERS_IS_LOADED',
    payload: users
  };
};

export const getUsers = () => {
  return (dispatch) => {
    dispatch(isLoading());
    fetch('http://api.github.com/users')
      .then(res => res.json())
      .then(data => dispatch(isLoaded(data)));
  };
}