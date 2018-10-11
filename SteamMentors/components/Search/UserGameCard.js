import React from 'react'
import {
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  Linking
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class UserGameCard extends React.Component {

clickCard = (url) => {
  Linking.openURL(url)
}


  render(){

    return (
      <TouchableHighlight  style={{width: 200, height: 200, flex: 1, padding: 30, alignSelf: "center", backgroundColor: "#11162a", maxHeight: 200, marginTop: -1}}>
      <ImageBackground
      style={{
          flex: 1,
          width: 300,
          height: "100%",
          justifyContent: 'center',
        }}
        source={{ uri: "https://previews.123rf.com/images/kasto/kasto1702/kasto170200053/72096795-pictur-perfect-tropical-anse-patates-beach-on-la-digue-island-seychelles-summer-vacations-on-picture.jpg" }}
        >
      <Text style={{color: "white"}}>Game card</Text>
      </ImageBackground>
      </TouchableHighlight>

    )
  }
    }

    const mapStateToProps = state => ({
    })

    const mapDispatchToProps = dispatch => bindActionCreators({

    }, dispatch)

    export default connect(mapStateToProps, mapDispatchToProps)(UserGameCard)
