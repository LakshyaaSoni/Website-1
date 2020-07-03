import { combineReducers } from 'redux';
import uiReducer from './ui.reducer';
import searchReducer from './search.reducer';

export default combineReducers({
  ui: uiReducer,
  query: searchReducer,
});
