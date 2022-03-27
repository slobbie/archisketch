import { DummyData } from './data';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  DummyData,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
