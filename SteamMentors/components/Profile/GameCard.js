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
      <TouchableHighlight onPress={() => this.clickCard(this.props.item.url)} style={styles.TouchableHighlight}>
      <ImageBackground
      imageStyle={{ borderRadius: 25 }}
      style={styles.cardImage}
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
  text: {
    fontSize: 20,
    color: "white",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 10
  },

  TouchableHighlight: {
    flex: 1,
    alignSelf: "center",
    height: 150,
    marginTop: 15,
  },
  cardImage: {
    flex: 1,
    width: 300,
    height: "100%",
    justifyContent: 'flex-start'
    }
})
    const mapStateToProps = state => ({
    })

    const mapDispatchToProps = dispatch => bindActionCreators({

    }, dispatch)

    export default connect(mapStateToProps, mapDispatchToProps)(GameCard)
