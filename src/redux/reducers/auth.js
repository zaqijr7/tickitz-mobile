const initialState = {
  token: null,
  message: '',
  profile: [],
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
        ...state,
        token: action.payload,
      };
    case 'LOGIN_MESSAGE':
      return {
        ...state,
        message: action.msg,
      };
    default:
      return state;
  }
};

export default authReducer;
