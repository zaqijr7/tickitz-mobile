const initialState = {
  movie: [],
  showTime: [],
  cinema: [],
  listSeat: [],
  totalPayment: 0,
  msgResponse: '',
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVIE_SELECTED':
      return {
        ...state,
        movie: action.payload,
      };
    case 'TIME_SELECTED':
      return {
        ...state,
        showTime: action.payload,
      };
    case 'CINEMA_SELECTED':
      return {
        ...state,
        cinema: action.payload,
      };
    case 'MSG_TRANSACTION':
      return {
        ...state,
        cinema: action.payload,
      };
    case 'LIST_SEAT':
      return {
        ...state,
        listSeat: action.payload,
      };
    case 'TOTAL_PAYMENT':
      return {
        ...state,
        totalPayment: action.payload,
      };
    case 'RESET_DATA_TRANSACTION':
      return {
        ...state,
        movie: [],
        showTime: [],
        cinema: [],
        listSeat: [],
        totalPayment: 0,
      };
    default:
      return state;
  }
};

export default transactionReducer;
