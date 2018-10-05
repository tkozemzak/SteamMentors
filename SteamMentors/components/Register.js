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
    
      <View style={{marginTop: 10}}>
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

      <TextInput
          style={styles.textInput}
          placeholder="Steam Profile URL"
          selectionColor="#58ab7f"
          underlineColorAndroid="#58ab7f"
          onChangeText={(text) => this.setState({steam_url: text})}
        />
        <View style={{marginTop: 5}}>
          <View style={styles.button}>
            <Button color="#58ab7f" title="Back" onPress={() => history.push("/")}/>
          </View>
          <View style={styles.button}>
            <Button color="#58ab7f" title="Register" onPress={() => this.handleSignup(this.state)}/>
          </View>
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


    function mapDispatchToProps(dispatch) {
      return {
        userSignup: bindActionCreators(userSignup, dispatch)
      }
    }

    export default connect(null, mapDispatchToProps)(Register)
