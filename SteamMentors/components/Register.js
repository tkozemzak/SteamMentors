import React from 'react'
import {
  Text,
  View,
  Button,
  Image,
  TextInput,
  StyleSheet
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"
import {userSignup} from '../redux/actions/userActions'


class Register extends React.Component {

  state = {
    email: '',
    password: '',
    steam_url: ''
  }

  handleSignup = () => {
    this.props.userSignup(this.state, this.props.history)
  }

  render(){
    let {history} = this.props
    return (
      <View style={{height:"100%", backgroundColor: "#11162a", display: "flex", flexDirection: "column"}}>
      <View>
      <Text> Logo </Text>
      </View>
      <View style={{marginTop: "40%"}}>
      <TextInput
          style={{height: 70}}
          placeholder="Email"
          onChangeText={(text) => this.setState({email: text})}
        />
      <TextInput
          style={{height: 70}}
          placeholder="Password"
          onChangeText={(text) => this.setState({password: text})}
        />

      <TextInput
          style={{height: 70}}
          placeholder="Steam Profile URL"
          onChangeText={(text) => this.setState({steam_url: text})}
        />
        <Button style={styles.button} title="Back" onPress={() => history.push("/")}/>
        <Button style={styles.button} title="Register" onPress={() => this.handleSignup(this.state)}/>
      </View>
      <View style={{height:"40%", width: "100%", display: "flex", flexDirection: "row", marginTop: "70%"}}>
      <Button style={styles.button} title="Back" onPress={() => history.push("/")}/>
      <Button style={styles.button} title="Login" onPress={() => history.push("/")}/>
      </View>
      </View>
    )
  }


    }

    const styles = StyleSheet.create({
      button: {
        width: "100%",
        alignSelf: "center",
        marginBottom: 5
      },
    });


    function mapDispatchToProps(dispatch) {
      return {
        userSignup: bindActionCreators(userSignup, dispatch)
      }
    }

    export default connect(null, mapDispatchToProps)(Register)
