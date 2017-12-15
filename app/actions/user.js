import * as APIUtil from '../lib/api';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const receiveUser = user => ({
  type: RECEIVE_USERS,
  user
});



export const fetchUsers = filters => dispatch => (
  APIUtil.fetchUsers(filters).then(users => (
    dispatch(receiveUsers(users))
  ))
);

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id).then(user => (
    dispatch(receiveUser(user))
  ))
);
