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
import { fetchGameName } from '../../redux/actions/newsActions'
import moment from 'moment'


class NewsCard extends React.Component {

componentWillMount(){
}
clickCard = (url) => {
  Linking.openURL(url)
}


  render(){
    return (
      <TouchableHighlight onPress={() => this.clickCard(this.props.item.url)} style={styles.TouchableHighlight}>
      <ImageBackground
      style={styles.cardImage}
      imageStyle={{ borderRadius: 25 }}
        source={{ uri: `https://steamcdn-a.akamaihd.net/steam/apps/${this.props.item.appid}/header.jpg?t=1539261069` }}
        >
        <View style={{padding: 10}}>
      <Text style={styles.text}>{this.props.item.title}</Text>
      <Text style={styles.text}>Date:{this.props.item.date}</Text>
      </View>
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
        backgroundColor: "transparent",
        marginTop: 15,
      },
      cardImage: {
        flex: 1,
        width: 300,
        height: "100%",
        justifyContent: 'flex-start'
        }
    });


    const mapStateToProps = state => ({
      currentNews: state.news.currentNews
    })

    const mapDispatchToProps = dispatch => bindActionCreators({
      fetchGameName
    }, dispatch)

    export default connect(mapStateToProps, mapDispatchToProps)(NewsCard)
