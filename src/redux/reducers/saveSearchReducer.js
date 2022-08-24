const INITIAL_STATE = { search: [], info: [] };

const saveSearchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SAVE_SEARCH_TO_STATE':
    return {
      ...state,
      search: action.value,
    };
  case 'SAVE_INFO_OBJ':
    return {
      ...state,
      info: [...state.info, action.value],
    };
  default:
    return state;
  }
};

export default saveSearchReducer;
