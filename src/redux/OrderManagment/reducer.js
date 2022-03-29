/* @flow */

import {
  LOGIN_SUCCESS,
  SET_ERROR_MESSAGE,
  LOGIN_REQUEST,
  ACCOUNT_INFO_SUCCESS,
  ADD_REQUEST,
  UPLOAD_REQUEST,
} from './constant';

const initialState = [];

export default function reducer(state = initialState, action) {
  console.log(action.payload, 'ppppppppppp');
  switch (action.type) {
    case ADD_REQUEST:
      return [...state, action.payload];
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        [action.payload.errorType]: action.payload.message,
      };
    case UPLOAD_REQUEST:
      return state;
    default:
      return state;
  }
}
