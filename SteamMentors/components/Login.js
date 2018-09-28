import React from 'react'
import {
  Text,
  View,
  Button,
  Image,
  TextInput,
  StyleSheet
} from 'react-native'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { userLogin } from "../redux/actions/userActions"


class Login extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleLogin = () => {
    this.props.userLogin(this.state, this.props.history)
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
        </View>
        <View style={{height:"40%", width: "100%", display: "flex", flexDirection: "row", marginTop: "70%"}}>
          <Button style={styles.button} title="Back" onPress={() => history.push("/")}/>
          <Button style={styles.button} title="Login" onPress={() => this.handleLogin(this.state)}/>
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

    const mapDispatchToProps = dispatch => bindActionCreators({
        userLogin
      }, dispatch)


    const mapStateToProps = state => ({
      currentUser: state.users.currentUser,
      currentUserGames: state.profile.currentUserGames
    })

    export default connect(mapStateToProps, mapDispatchToProps)(Login)
