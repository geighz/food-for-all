import connections from '../apis/streams';
import {
  SIGN_IN,
  SIGN_OUT,
  REGISTER
} from './types';

export const signIn = (userId) => {
   return {
     type: SIGN_IN,
     payload: userId
   };
};

export const signOut = () => {
  return{
    type: SIGN_OUT
  };
};

export const register = formValues => async (dispatch, getState) => {

  const { userId } = getState().auth;
  const response = await streams.post('/connections', {...formValues, userId});

  dispatch({type: REGISTER, payload: response.data});
};
