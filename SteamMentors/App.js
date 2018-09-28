import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from './redux/reducers';
import Main from './components/Main';
import thunk from 'redux-thunk'
import {
  NativeRouter,
  Route,
  Switch
} from 'react-router-native'

let middleware = [thunk]

const store = createStore(reducer, applyMiddleware(...middleware));

export default class App extends React.Component {

  render() {
      return (
      <Provider store={store}>
        <NativeRouter>
          <Main/>
        </NativeRouter>
      </Provider>
      );
    }
}
