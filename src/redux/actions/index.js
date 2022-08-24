export const userAction = (value) => ({
  type: 'LOGIN',
  value,
});

export const saveSearchAction = (value) => ({
  type: 'SAVE_SEARCH_TO_STATE',
  value,
});

export const saveInfoObj = (value) => ({
  type: 'SAVE_INFO_OBJ',
  value,
});
