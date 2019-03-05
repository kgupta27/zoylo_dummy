
import { FORCE_UPDATE } from './constant';

const initialState = {
    forceUpdate:''
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
      case FORCE_UPDATE:
      return {
        ...state,
        forceUpdate: action.data
      }

    default:
      return state;
  }
};

export default homeReducer;
