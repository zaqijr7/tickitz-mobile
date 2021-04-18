import http from '../../helper/http';
import jwt_decode from 'jwt-decode';

export const login = (email, password) => {
  return async dispatch => {
    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);
    try {
      const response = await http().post('auth/login', params);
      const {id} = jwt_decode(response.data.results.token);
      const profile = await http(response.data.results.token).get(
        `profile?id=${id}`,
      );
      dispatch({
        type: 'LOGIN',
        token: response.data.results.token,
        profile: profile.data.results,
        msg: 'Login Successfully',
      });
    } catch (err) {
      dispatch({
        type: 'LOGIN_MESSAGE',
        msg: err.response.data.message,
      });
    }
  };
};

export const updatePhoto = (token, id) => {
  return async dispatch => {
    const profile = await http(token).get(`profile?id=${id}`);
    dispatch({
      type: 'PROFILE',
      payload: profile.data.results,
    });
  };
};

export const cleanMsg = () => {
  return async dispatch => {
    dispatch({
      type: 'LOGIN_MESSAGE',
      msg: '',
    });
  };
};

export const updateProfileUser = data => {
  return dispatch => {
    dispatch({
      type: 'PROFILE',
      payload: data,
    });
  };
};

export const destoryToken = () => {
  return async dispatch => {
    dispatch({
      type: 'LOGOUT',
      payload: null,
    });
  };
};

export const emailReset = email => {
  return async dispatch => {
    dispatch({
      type: 'EMAIL_RESET',
      payload: email,
    });
  };
};
