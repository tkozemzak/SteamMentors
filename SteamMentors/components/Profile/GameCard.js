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


class GameCard extends React.Component {

clickCard = (url) => {
  Linking.openURL(url)
}

  render(){
    return (
      <TouchableHighlight onPress={() => this.clickCard(this.props.item.url)} style={styles.TouchableHighlight>
      <ImageBackground
      imageStyle={{ borderRadius: 25 }}
      style={styles.background}
        source={{ uri: "https://previews.123rf.com/images/kasto/kasto1702/kasto170200053/72096795-pictur-perfect-tropical-anse-patates-beach-on-la-digue-island-seychelles-summer-vacations-on-picture.jpg" }}
        >
      <Text style={styles.text}>{this.props.item.appid}</Text>
      <Text style={styles.text}>Playtime: {this.props.item.playtime_forever} hrs</Text>
      </ImageBackground>
      </TouchableHighlight>
    )
  }
    }

const styles = StyleSheet.create({
  background: {
      backgroundColor: '#ccc',
      flex: 1,
      width: 300,
      height: "100%",
      justifyContent: 'center',
    },
  TouchableHighlight: {
    borderColor: "red",
    flex: 1,
    padding: 30,
    alignSelf: "center",
    backgroundColor: "#11162a",
    maxHeight: 200,
    marginTop: -1
  },
  text: {
    color: "white"
  }
})
    const mapStateToProps = state => ({
    })

    const mapDispatchToProps = dispatch => bindActionCreators({

    }, dispatch)

    export default connect(mapStateToProps, mapDispatchToProps)(GameCard)
