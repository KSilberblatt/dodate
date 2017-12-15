import * as SessionAPIUtil from '../lib/api';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const clearErrors = () =>({
  type: CLEAR_ERRORS
});

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = (user1) => (dispatch) => (
  SessionAPIUtil.signup(user1).then((user2) => (
    dispatch(receiveCurrentUser(user2))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = (formUser) => (dispatch) => (
  SessionAPIUtil.login(formUser).fail(
    err => (dispatch(receiveErrors(err.responseJSON)))).then(
    (user) => (dispatch(receiveCurrentUser(user))))
);

window.login = login; // take out eventually

export const logout = () => (dispatch) => (
  SessionAPIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);
