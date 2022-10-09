import { combineReducers } from "redux";
import { notesReducer } from './Reducers/notesReducer';

export const rootReducer = combineReducers({
    notes: notesReducer,
})