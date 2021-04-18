const initialState = {
  token: null,
  message: '',
  profile: null,
  emailReset: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.token,
        profile: action.profile,
        message: action.msg,
      };
    case 'PROFILE':
      return {
        ...state,
        profile: action.payload,
      };
    case 'LOGOUT':
      return {
        token: action.payload,
        message: '',
        profile: [],
      };
    case 'LOGIN_MESSAGE':
      return {
        ...state,
        message: action.msg,
      };
    case 'EMAIL_RESET':
      return {
        ...state,
        emailReset: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
