import React from 'react'
import {
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  Linking,
  Button
} from 'react-native'



export default class UserPage extends React.Component {



  render(){
    return (
      <View>
      <Button color="#58ab7f" title="tomessagepage" onPress={() => this.props.navigation.navigate("SendMessage")}/>

      <Text>
      UserPage
      </Text>
      </View>

    )
  }
    }
