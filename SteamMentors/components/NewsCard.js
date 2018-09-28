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
import { fetchNewsPics } from '../redux/actions/newsActions'


class NewsCard extends React.Component {

componentDidMount(){
  this.props.fetchNewsPics(this.props.appid)
}
clickCard = (url) => {
  Linking.openURL(url)
}


  render(){


    // let editedContent = this.props.item.contents.includes('<a') ? this.props.item.contents.slice(-this.props.item.contents.indexOf(">)")) : this.props.item.contents
    console.log("props in newscard", this.props);

    return (
      <TouchableHighlight onPress={() => this.clickCard(this.props.item.url)} style={{borderColor: "red", flex: 1, padding: 30, alignSelf: "center", backgroundColor: "#11162a", maxHeight: 200}}>
      <ImageBackground
      style={{
          backgroundColor: '#ccc',
          flex: 1,
          width: "100%",
          height: "100%",
          justifyContent: 'center',
        }}
        source={{ uri: "https://previews.123rf.com/images/kasto/kasto1702/kasto170200053/72096795-pictur-perfect-tropical-anse-patates-beach-on-la-digue-island-seychelles-summer-vacations-on-picture.jpg" }}
        >
      <Text style={{color: "white"}}>News card</Text>
      <Text style={{color: "white"}}>{this.props.item.title}</Text>
      <Text style={{color: "white"}}>{this.props.item.contents}</Text>
      </ImageBackground>
      </TouchableHighlight>

    )
  }
    }

    const mapStateToProps = state => ({
      newsPics: state.news.newsPics
    })

    const mapDispatchToProps = dispatch => bindActionCreators({
      fetchNewsPics
    }, dispatch)

    export default connect(mapStateToProps, mapDispatchToProps)(NewsCard)
