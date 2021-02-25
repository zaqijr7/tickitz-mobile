const initialState = {
  movie: [],
  showTime: '',
  cinema: [],
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVIE_SELECTED':
      return {
        ...state,
        movie: action.payload,
      };
    default:
      return state;
  }
};

export default transactionReducer;
