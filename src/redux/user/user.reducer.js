import UserActionTypes from './user.types';

const initialState = {
  currentUser: null,
  error: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload
      }

    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }

    default:
      return state;
  }
}

export default userReducer;
