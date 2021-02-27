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
    dispatch({});
  };
};
