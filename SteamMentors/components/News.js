import React from 'react'
import {
  ScrollView,
  TouchableHighlight,
  View
} from 'react-native'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchRandomNews, fetchUserNews } from "../redux/actions/newsActions"
import NewsCard from "./NewsCard"
import { List, Header } from 'react-native-elements'



class News extends React.Component {

  componentWillMount(){
    const validGuestGames = [104900, 208580, 205790, 219890, 11020, 105430, 251470, 221380, 305050, 355950, 813820, 878760, 730, 440]
    const validGuestGame = validGuestGames[Math.floor(Math.random()*validGuestGames.length)]

    this.props.isLoggedIn ?
     this.props.fetchUserNews(this.props.currentUser.data.steam_id) : this.props.fetchRandomNews(validGuestGame)
  }

  render(){

let newsObj = this.props.currentNews ? this.props.currentNews[1] : null;
let newsStories = newsObj ? newsObj.appnews.newsitems : null;

    return (
      <View style={{marginTop: 18, paddingBottom: 80, width: "100%"}}>
        <Header backgroundColor={"#11162a"}
          centerComponent={{ text: "News", style: { color: '#fff', fontSize: 30 } }}
        />
        <ScrollView style={{ backgroundColor: "#11162a", width: "100%"}}>
          <List containerStyle={{marginBottom: 20}}>
          {newsStories ? newsStories.map((item) => (
            <NewsCard
            key={item.gid}
            item={item}
            />
          )) : null
          }
          </List>
        </ScrollView>
      </View>
    )
  }
  }


const mapDispatchToProps = dispatch => bindActionCreators({
fetchUserNews,
fetchRandomNews
}, dispatch)

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  currentNews: state.news.currentNews,
  isGuest: state.users.isGuest
})

export default connect(mapStateToProps, mapDispatchToProps)(News)
