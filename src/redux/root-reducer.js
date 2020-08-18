/* root-reducer
    Actual base reducer object that represents all of the state of our app.
    It'll end up being the actual code that combines all of our other states together from their individual sections. 
*/

import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
});