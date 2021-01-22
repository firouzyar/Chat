import {combineReducers,compose,createStore,applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";

//reducers
import {homeReducer} from "./containers/Home/_redux/reducer";

const composeenhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default () =>{
    const store = createStore(combineReducers({
            threads:homeReducer,
    }),
        composeenhance(applyMiddleware(ReduxThunk))
    );
    return store;
}