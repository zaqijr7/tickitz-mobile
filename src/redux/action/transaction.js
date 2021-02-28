import http from '../../helper/http';

export const chooseMovie = (id) => {
  return async (dispatch) => {
    try {
      const response = await http().get(`movies/${id}`);
      dispatch({
        type: 'MOVIE_SELECTED',
        payload: response.data.results,
      });
      const listCity = await http().get(`schedule?idMovie=${id}`);
      dispatch({
        type: 'LIST_CITY',
        payload: listCity.data.results.city,
      });
    } catch (err) {
      console.log(err.response.data.message);
    }
  };
};

export const cinemaTimeSelected = (idCinema, idTime) => {
  return async (dispatch) => {
    try {
      const showTime = await http().get(`showtime/${idTime}`);
      dispatch({
        type: 'TIME_SELECTED',
        payload: showTime.data.results,
      });
      const cinemaSelected = await http().get(`cinemas/${idCinema}`);
      dispatch({
        type: 'CINEMA_SELECTED',
        payload: cinemaSelected.data.results,
      });
    } catch (err) {
      dispatch({
        type: 'MSG_TRANSACTION',
        payload: 'Sorry something is wrong',
      });
    }
  };
};

export const listSeat = (seat) => {
  return async (dispatch) => {
    dispatch({
      type: 'LIST_SEAT',
      payload: seat,
    });
  };
};

export const totalPayment = (data) => {
  return async (dispatch) => {
    dispatch({
      type: 'TOTAL_PAYMENT',
      payload: data,
    });
  };
};
