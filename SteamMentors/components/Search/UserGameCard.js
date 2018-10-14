import React from 'react'
import {
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  Linking,
  StyleSheet
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class UserGameCard extends React.Component {

clickCard = (url) => {
  Linking.openURL(url)
}


  render(){
    return (
      <TouchableHighlight onPress={()=>{this.props.navigation.navigate("SendMessage", {game_id: this.props.item.steam_app_id, goBack: this.props.navigation.goBack, name: this.props.navigation.state.params.personaname})}} style={styles.TouchableHighlight}>
      <ImageBackground
      style={styles.background}
        imageStyle={{ borderRadius: 25 }}
        source={{ uri: `https://steamcdn-a.akamaihd.net/steam/apps/${this.props.item.steam_app_id}/header.jpg?t=1539261069` }}
        >
        <View>
      <Text style={styles.text}>{this.props.is_mentor ? "Mentor" : "Not A Mentor"}</Text>
      </View>
      </ImageBackground>
      </TouchableHighlight>

    )
  }
    }

    const styles = StyleSheet.create({
      text: {
        color: "white"
      },
      background: {
        flex: 1,
        width: 300,
        height: "100%",
        justifyContent: 'flex-start'
      },
      TouchableHighlight: {
        width: "85%",
        height: 150,
        flex: 1,
        alignSelf: "center",
        backgroundColor: "transparent",
        marginTop: 15
      }
    });


    const mapDispatchToProps = dispatch => bindActionCreators({

    }, dispatch)

    export default connect(null, mapDispatchToProps)(UserGameCard)
