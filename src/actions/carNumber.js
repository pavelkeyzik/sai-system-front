export const informationAboutNumberIsLoading = () => {
  return {
    type: 'INFORMATION_ABOUT_NUMBER_IS_LOADING'
  }
}

export const informationAboutNumberIsLoadedSuccessful = (information) => {
  return {
    type: 'INFORMATION_ABOUT_NUMBER_IS_LOADED',
    payload: information
  }
}

export const loadInformationAboutNumber = (number) => {
  return (dispatch) => {
    dispatch(informationAboutNumberIsLoading());
    
    setTimeout(() => {
      dispatch(informationAboutNumberIsLoadedSuccessful([
        {
          id: 1,
          name: 'Штраф за непристёгнутый ремень',
          date: new Date().toUTCString(),
          paid: true
        },
        {
          id: 2,
          name: 'Штраф за отсутствие знака 70',
          date: new Date().toUTCString(),
          paid: false
        }
      ]));
    }, 2000);
  }
};