import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import BottomTabNav from '../navigation/BottomTabNav';
import { connect } from 'react-redux';
import reducer from '../redux/reducers';
import HomeScreen from './Home/HomeScreen';
import Login from './Home/Login';
import Register from './Home/Register';
import News from './News/News';
import {
  NativeRouter,
  Route,
  Switch
} from 'react-router-native'


class Main extends React.Component {

  render() {
      return (
        <NativeRouter>
          <View style={styles.container}>
            {this.props.isLoggedIn || this.props.isGuest ? <BottomTabNav/> : <Switch>
              <Route exact path="/" component={HomeScreen}/>
              <Route path="/news" component={News}/>
            </Switch>}
          </View>
        </NativeRouter>
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
