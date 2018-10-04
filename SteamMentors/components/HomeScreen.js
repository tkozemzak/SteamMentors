import React from 'react'
import {bindActionCreators} from 'redux'
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  Animated,
  Platform,
  Easing,
  TouchableOpacity
} from 'react-native'
import { connect } from "react-redux"
import { guestLogin } from '../redux/actions/userActions'
import { LinearGradient, Constants } from 'expo'
import { ListItem, Icon } from 'react-native-elements'


class HomeScreen extends React.Component {



  handleGuestLogin = () => {
  this.props.guestLogin()
  }
  spinValue = new Animated.Value(0);

    state = {
      spinning: true,
    };

    spin = () => {
      this.spinValue.setValue(0);

      if (this.state.spinning === false) {
        this.setState({ spinning: true });
        this.animation();
      } else {
        this.setState({ spinning: false });
      }
    };

    animation = () => {
      this.spinValue.setValue(0);

      Animated.timing(this.spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
      }).start(() => {
        if (this.state.spinning) {
          this.animation();
        }
      });
    };

  render(){
    const spin = this.spinValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        });

    let {history} = this.props
    return (

        <View style={{height:"100%"}}>

            <View style={{alignSelf: "center", marginTop: 50}}>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={this.spin}>
                    <Animated.View
                      style={{
                        transform: [{ rotate: spin }],
                        position: 'relative',
                        height: 200,
                        width: "100%",
                      }}>
                      <Image
                      style={{width: 400, height: 200, resizeMode: "cover"}}
                      source={require('../assets/images/spinnerLogo.png')}
                    />
                    </Animated.View>
              </TouchableOpacity>
              <Image
              style={{width: 400, height: 200, resizeMode: "cover"}}
              source={require('../assets/images/logo.png')}
            />
            </View>
              <View style={{marginTop: 125}}>
                <View style={styles.button}>
                  <Button color="#58ab7f" title="Login" onPress={() => history.push("/login")}/>
                </View>
                <View style={styles.button}>
                  <Button color="#58ab7f" title="Register" onPress={() => history.push("/register")}/>
                </View>
                <View style={styles.button}>
                  <Button color="#58ab7f" title="Continue As Guest" onPress={() => this.handleGuestLogin()}/>
                </View>
              </View>

        </View>
    )
  }
  }

  const styles = StyleSheet.create(
{
  button: {
    width: "70%",
    alignSelf: "center",
    marginTop: 15
  },
});

    const mapDispatchToProps = dispatch => bindActionCreators({
      guestLogin
    }, dispatch)

    export default connect(null, mapDispatchToProps)(HomeScreen)
