import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const devTool=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store= createStore(reducer,compose(applyMiddleware(thunk),devTool) )

export default store;