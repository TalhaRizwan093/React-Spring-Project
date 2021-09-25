import { combineReducers } from "redux";

import auth from './auth';

const reducers = combineReducers({
    autherize: auth
})

export default reducers