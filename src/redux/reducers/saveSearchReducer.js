const INITIAL_STATE = {};

const saveSearchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SAVE_SEARCH_TO_STATE':
    return {
      search: action.value,
    };
  default:
    return state;
  }
};

export default saveSearchReducer;
