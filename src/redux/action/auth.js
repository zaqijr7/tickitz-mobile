import http from '../../helper/http';

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
    } catch (err) {
      dispatch({
        type: 'LOGIN_MESSAGE',
        payload: err.response.data.message,
      });
    }
  };
};
