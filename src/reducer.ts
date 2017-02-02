import { combineReducers } from 'redux';

import heroes from './heroes/reducer';
import hero from './hero/reducer';

export default combineReducers({
  heroes,
  hero
});
