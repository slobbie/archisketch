import { REMOVE } from "./../action";
const initialState: any = {
  id: Number,
};

export const review = (state = initialState, action: any) => {
  switch (action.type) {
    case REMOVE: {
      console.log(action);
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
