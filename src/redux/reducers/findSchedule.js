const initialState = {
  listCity: [],
  date: '',
  city: '',
  seatSold: '',
  msgResponse: '',
};

const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT_DATE':
      return {
        ...state,
        date: action.payload,
      };
    case 'INPUT_CITY':
      return {
        ...state,
        city: action.payload,
      };
    case 'LIST_CITY':
      return {
        ...state,
        listCity: action.payload,
      };
    case 'SEAT_SOLD':
      return {
        ...state,
        seatSold: action.payload,
      };
    case 'RESET_FIND_SCHEDULE':
      return {
        ...state,
        date: '',
        city: '',
        seatSold: '',
      };
    case 'MESSAGE_RESPONSE':
      return {
        ...state,
        msgResponse: '',
      };
    default:
      return state;
  }
};

export default scheduleReducer;
