import React from 'react'
import {
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  StyleSheet,
  Button,
  TextInput
} from 'react-native'
import { Header } from 'react-native-elements'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {sendMessage} from '../../redux/actions/searchActions'


class SendMessage extends React.Component {

  state = {
    mentor_id: this.props.currentUser.data.id,
    mentee_id: this.props.loggedInUser.id,
    game_id: this.props.navigation.state.params.game_id,
    content: ''
  }

  render(){

    handleMessage = () => {
      this.props.sendMessage(this.state);
      this.props.navigation.goBack()
    }

    return (
      <ImageBackground
      style={styles.background}
        source={require("../../assets/images/gradient.jpeg")}
      >
      <Header backgroundColor={"transparent"}
        centerComponent={{ text: `${this.props.navigation.state.params.name}`, style: { color: '#fff', fontSize: 24} }}
      />
      <View style={{marginTop: 150}}>
      <TextInput
      style={{paddingLeft: 20}}
        placeholder={"Enter Message Here.."}
        onChangeText={(text) => this.setState({content: text})}
        value={this.state.content}
        multiline = {true}
        numberOfLines = {4}
      />
      </View>
      <View style={{marginTop: 50}}>
        <View style={styles.button}>
          <Button color="#58ab7f" title="Cancel" onPress={() => this.props.navigation.goBack()}/>
        </View>
        <View style={styles.button}>
          <Button color="#58ab7f" title="Send" onPress={() => handleMessage()}/>
        </View>
      </View>
      </ImageBackground>
    )
  }
    }

    const styles = StyleSheet.create({
      button: {
        width: "70%",
        alignSelf: "center",
        marginBottom: 15
      },
      background: {
        flex: 1,
        width: "100%",
        height: "100%",
        paddingTop: 20
      }
    });

    const mapStateToProps = state => ({
      loggedInUser: state.users.loggedInUser,
      currentUser: state.users.currentUser
    })

    const mapDispatchToProps = dispatch => bindActionCreators({
      sendMessage
    }, dispatch)

    export default connect(mapStateToProps, mapDispatchToProps)(SendMessage)
