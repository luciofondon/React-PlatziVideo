import React, { Fragment } from 'react';
import { render } from 'react-dom';
//import Playlist from './src/playlist/components/playlist';
import Videos from '../pages/containers/videos';
import Home from '../pages/components/home';
import data from '../api.json';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/data';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../pages/components/header';

const initialState = {
    data: {
        ...data
    },
    search: []
}
const store = createStore(
    reducer, 
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)

const homeContainer = document.getElementById("home-container");

render(
    <BrowserRouter
        basename="/videos"
    >
        <Provider store={store}>
            <Fragment>
                <Header/>
                <Route exact path="/" component={Home}/>        
                <Route exact path="/videos" component={Videos}>            
                    <div>videos</div>
                </Route>
            </Fragment>
        </Provider> 
    </BrowserRouter>,
    homeContainer
);
//render(<Home data={data}/>, homeContainer)
