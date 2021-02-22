export const login = (email, password) => {
  console.log(email, '<<< ini email');
  return async (dispatch) => {
    if (email === 'zaqijr7@gmail.com' && password === '1234') {
      dispatch({
        type: 'LOGIN',
        payload: 'stringRandom',
      });
    } else {
      dispatch({
        type: 'LOGIN_MESSAGE',
        msg: 'Email or password is wrong',
      });
    }
  };
};
