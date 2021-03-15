import _ from 'lodash';

import {
  REGISTER
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type){
    case REGISTER:
      return {...state, [action.payload.id]: action.payload};
    default:
      return state;
  }
};
