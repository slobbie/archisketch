import { review } from "./review";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  review,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
