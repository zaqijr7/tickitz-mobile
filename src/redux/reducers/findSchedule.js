const initialState = {
  listCity: [],
  date: '',
  city: '',
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
    default:
      return state;
  }
};

export default scheduleReducer;
