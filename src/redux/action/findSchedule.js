export const inputDate = (input) => {
  return async (dispatch) => {
    dispatch({
      type: 'INPUT_DATE',
      payload: input,
    });
  };
};

export const inputCity = (input) => {
  return async (dispatch) => {
    dispatch({
      type: 'INPUT_CITY',
      payload: input,
    });
  };
};
