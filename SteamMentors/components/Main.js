import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import BottomTabNav from '../navigation/BottomTabNav';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from '../redux/reducers';
import HomeScreen from './HomeScreen';
import Login from './Login';
import Register from './Register';
import News from './News';
import thunk from 'redux-thunk'
import {
  NativeRouter,
  Route,
  Switch
} from 'react-router-native'


let middleware = [thunk]

const store = createStore(reducer, applyMiddleware(...middleware));


class Main extends React.Component {
  state = {
    isLoggedIn: false
  };

  componentDidMount(){
    this.props.isLoggedIn ? this.setState({isLoggedIn: true}) : null
  }


  render() {

      return (
      <Provider store={store}>
        <NativeRouter>
          <View style={styles.container}>
            {this.props.isLoggedIn || this.props.isGuest ? <BottomTabNav/> : <Switch>
              <Route exact path="/" component={HomeScreen}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path="/news" component={News}/>
            </Switch>}
          </View>
        </NativeRouter>
      </Provider>

      );

  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#11162a"
  },
});

const mapStateToProps = state => ({
  isLoggedIn: state.users.isLoggedIn,
  isGuest: state.users.isGuest
})

export default connect(mapStateToProps)(Main)
