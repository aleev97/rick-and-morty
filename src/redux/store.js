import { createStore, applyMiddleware, compose } from 'redux';
import reducer from "./reducer"
import ThunkMiddleware from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS 

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(ThunkMiddleware)) // esta línea es para poder hacer peticiones a un server
);
export default store;
