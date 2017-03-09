const LOG_IN = 'user/LOG_IN';
const initialState = {
  userName: 'NOT LOGGED IN'
}

export default function reducer(state=initialState, action){
  switch(action.type) {
    case LOG_IN:
      return {
        userName: action.payload
      }
    default:
      return state;
  }
}
export function logInUser(user){
  return {
    type: LOG_IN,
    payload: user
  }
}
