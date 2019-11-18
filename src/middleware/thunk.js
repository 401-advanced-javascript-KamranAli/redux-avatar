export const thunkMiddleware = store => next => action => {
  console.log('Thunk about it', action);
  if(typeof action === 'function') {
    action(store.dispatch);
  } else {
    next(action);
  }
};
