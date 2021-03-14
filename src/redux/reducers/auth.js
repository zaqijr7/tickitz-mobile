const initialState = {
  token: null,
  message: '',
  profile: [],
  emailReset: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.payload,
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
