import { UserActionTypes } from './user.types';

// represents initial state reducer receives
const INITIAL_STATE = {
    currentUser: null
}

// set state to our initial default state value in case it's not state 
// every reducer receives every single action that gets fired, so we need to use default for the ones we don't care about
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        // case/action that we want to update the state from
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;
