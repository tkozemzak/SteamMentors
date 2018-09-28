import React from 'react'
import {bindActionCreators} from 'redux'
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet
} from 'react-native'
import { connect } from "react-redux"
import { guestLogin } from '../redux/actions/userActions'



class HomeScreen extends React.Component {

  handleGuestLogin = () => {
    console.log("handle guest login ");
  this.props.guestLogin()
  }

  render(){
    let {history} = this.props
    return (
      <View style={{height:"100%", backgroundColor: "#11162a"}}>
      <View style={{alignSelf: "center", marginTop: "30%"}}>
      <Text> Logo </Text>
      </View>
      <View style={{marginTop: 130}}>
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

    const styles = StyleSheet.create({
      button: {
        width: "50%",
        alignSelf: "center",
        marginBottom: 5
      },
    });


    const mapDispatchToProps = dispatch => bindActionCreators({
      guestLogin
    }, dispatch)

    export default connect(null, mapDispatchToProps)(HomeScreen)
