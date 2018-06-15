const usersReducer = (state = {}, action) => {
  return [
    {
      id: 1,
      name: 'Pavel',
      height: 182
    },
    {
      id: 2,
      name: 'Kate',
      height: 157
    }
  ];
};

export default usersReducer;