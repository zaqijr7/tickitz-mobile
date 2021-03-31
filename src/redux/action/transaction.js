import http from '../../helper/http';

export const chooseMovie = id => {
  return async dispatch => {
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

export const cinemaTimeSelected = (idCinema, idTime, movieTitle, dateShow) => {
  return async dispatch => {
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
      try {
        const seatIsSold = await http().get(
          `/seat/sold?movie=${movieTitle}&cinema=${cinemaSelected.data.results.name}&showTime=${showTime.data.results.name}&showDate=${dateShow}`,
        );
        if (seatIsSold.data.results.listSold !== null) {
          dispatch({
            type: 'SEAT_SOLD',
            payload: seatIsSold.data.results.listSold,
          });
        } else {
          dispatch({
            type: 'SEAT_SOLD',
            payload: 'a, b',
          });
        }
      } catch (err) {
        dispatch({
          type: 'MESSAGE_RESPONSE',
          payload: 'Server Error',
        });
      }
    } catch (err) {
      dispatch({
        type: 'MSG_TRANSACTION',
        payload: 'Sorry something is wrong',
      });
    }
  };
};

export const listSeat = seat => {
  return async dispatch => {
    dispatch({
      type: 'LIST_SEAT',
      payload: seat,
    });
  };
};

export const totalPayment = data => {
  return async dispatch => {
    dispatch({
      type: 'TOTAL_PAYMENT',
      payload: data,
    });
  };
};

export const resetDataTransaction = () => {
  return async dispatch => {
    dispatch({
      type: 'RESET_DATA_TRANSACTION',
    });
    dispatch({
      type: 'RESET_FIND_SCHEDULE',
    });
  };
};
