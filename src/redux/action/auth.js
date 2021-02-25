import http from '../../helper/http';
import jwt_decode from 'jwt-decode';

export const login = (email, password) => {
  console.log(email, '<<< ini email');
  return async (dispatch) => {
    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);
    try {
      const response = await http().post('auth/login', params);
      dispatch({
        type: 'LOGIN',
        payload: response.data.results.token,
      });
      const {id} = jwt_decode(response.data.results.token);
      const profile = await http(response.data.results.token).get(
        `profile?id=${id}`,
      );
      dispatch({
        type: 'PROFILE',
        payload: profile.data.results,
      });
    } catch (err) {
      console.log(err.response.data.message);
      dispatch({
        type: 'LOGIN_MESSAGE',
        msg: err.response.data.message,
      });
    }
  };
};
