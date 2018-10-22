import React, { Fragment, Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import logger from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import Videos from './videos';
import Home from '../components/home';
import data from '../api.json';
import reducer from '../../reducers/data';
import Header from './componentsheader';
import NotFound from '../components/not-found';

// Creacion de un middleareware de forma manual
function logger_({ getState, dispatch}){
    return (next) => {
        return (action) => {
            console.log("Este es mi viejo estado", getState().toJS());
            console.log("Vamos a enviar esta acción", action);
            const value = next(action);
            console.log("Este es mi nuevo estado", getState().toJS());
            return value;
        }
    }

}
/*
const logger_ = (({ getState, dispatch}) => bext => actio0n =>{
    console.log("Este es mi viejo estado", getState().toJS());
    console.log("Vamos a enviar esta acción", action);
    const value = next(action);
    console.log("Este es mi nuevo estado", getState().toJS());
    return value;
}
*/
const initialState = {
    data: {
        ...data
    },
    search: []
}
const store = createStore(
    reducer, 
    initialState,
    composeWithDevTools(
        applyMiddleware(logger, logger_, thunk)
    )
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)


class App extends Component{
    render(){
        return (
            <Provider store={store}>
                <Fragment>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>        
                        <Route exact path="/videos" component={Videos}>            
                            <div>videos</div>
                        </Route>
                        <Route compoent={NotFound} />
                        <Redirect from="/v" to="videos"/>
                    </Switch>
                </Fragment>
            </Provider>
        )
    }
}

export default App;
