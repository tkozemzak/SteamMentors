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
import { userLogin } from "../../redux/actions/userActions"


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
      <View style={{height:"100%", backgroundColor: "transparent", display: "flex", flexDirection: "column"}}>

        <View>
          <TextInput
              style={styles.textInput}
              placeholder="Email"
              selectionColor="#58ab7f"
              underlineColorAndroid="#58ab7f"
              onChangeText={(text) => this.setState({email: text})}
            />
          <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Password"
              selectionColor="#58ab7f"
              underlineColorAndroid="#58ab7f"
              onChangeText={(text) => this.setState({password: text})}
            />
        </View>
        <View style={{marginTop: 50}}>
          <View style={styles.button}>
            <Button color="#58ab7f" title="Back" onPress={() => history.push("/")}/>
          </View>
          <View style={styles.button}>
            <Button color="#58ab7f" title="Login" onPress={() => this.handleLogin(this.state)}/>
          </View>
        </View>
      </View>
    )
  }
  }

    const styles = StyleSheet.create({
      button: {
        width: "70%",
        alignSelf: "center",
        marginBottom: 15
      },
      logo: {
        width: 400,
        height: 200,
        resizeMode: "cover"
      },
      textInput: {
        height: 70,
        color: "white"

      },
      buttonContainer: {
        height:"40%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginTop: "70%"
      }
    });

    const mapDispatchToProps = dispatch => bindActionCreators({
        userLogin
      }, dispatch)


    const mapStateToProps = state => ({
      currentUser: state.users.currentUser,
      currentUserGames: state.profile.currentUserGames
    })

    export default connect(mapStateToProps, mapDispatchToProps)(Login)
