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
      <TouchableHighlight onPress={() => this.clickCard(this.props.item.url)} style={{borderColor: "red", flex: 1, padding: 30, alignSelf: "center", backgroundColor: "#11162a", maxHeight: 200, marginTop: -1}}>
      <ImageBackground
      style={{
          backgroundColor: '#ccc',
          flex: 1,
          width: 300,
          height: "100%",
          justifyContent: 'center',
        }}
        source={{ uri: "https://previews.123rf.com/images/kasto/kasto1702/kasto170200053/72096795-pictur-perfect-tropical-anse-patates-beach-on-la-digue-island-seychelles-summer-vacations-on-picture.jpg" }}
        >
      <Text style={{color: "white"}}>{this.props.currentNews[2]}</Text>
      <Text style={{color: "white"}}>{this.props.item.title}</Text>
      <Text style={{color: "white"}}>Date:{this.props.item.date}</Text>
      </ImageBackground>
      </TouchableHighlight>

    )
  }
    }

    const mapStateToProps = state => ({
      currentNews: state.news.currentNews
    })

    const mapDispatchToProps = dispatch => bindActionCreators({
      fetchGameName
    }, dispatch)

    export default connect(mapStateToProps, mapDispatchToProps)(NewsCard)
