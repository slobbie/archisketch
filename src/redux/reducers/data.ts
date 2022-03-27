import { REMOVE } from '../action';
import Data from '../../data/dummyData.json';
const initialState: any = {
  data: Data,
};

export const DummyData = (state = initialState, action: any) => {
  switch (action.type) {
    case REMOVE: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
