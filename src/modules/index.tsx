import { combineReducers } from 'redux';
import { weatherReducer }from './store'


const rootReducer = combineReducers({
    weatherReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer