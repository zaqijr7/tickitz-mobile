import http from '../../helper/http';

export const chooseMovie = (id) => {
  return async (dispatch) => {
    try {
      const response = await http().get(`movies/${id}`);
      dispatch({
        type: 'MOVIE_SELECTED',
        payload: response.data.results,
      });
    } catch (err) {
      console.log(err.response.data.message);
    }
  };
};
