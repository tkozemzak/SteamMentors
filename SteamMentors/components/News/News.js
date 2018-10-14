import React from 'react'
import {
  ScrollView,
  TouchableHighlight,
  View,
  ImageBackground,
  StyleSheet
} from 'react-native'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchRandomNews, fetchUserNews } from "../../redux/actions/newsActions"
import NewsCard from "./NewsCard"
import { List, Header } from 'react-native-elements'



class News extends React.Component {

  componentWillMount(){
    const validGuestGames = [104900, 208580, 205790, 219890, 11020, 105430, 251470, 221380, 305050, 355950, 813820, 730, 440]
    const validGuestGame = validGuestGames[Math.floor(Math.random()*validGuestGames.length)]

    this.props.isLoggedIn ?
     this.props.fetchUserNews(this.props.currentUser.data.steam_id) : this.props.fetchRandomNews(validGuestGame)
  }

  render(){

let newsObj = this.props.currentNews ? this.props.currentNews[1] : null;
let newsStories = newsObj ? newsObj.appnews.newsitems : null;

    return (
      <ImageBackground
      style={styles.background}
        source={require("../../assets/images/gradient.jpeg")}
      >

        <Header backgroundColor={"transparent"}
          centerComponent={{ text: "News", style: { color: '#fff', fontSize: 30 } }}
        />
        <ScrollView style={styles.scrollView}>
          <List containerStyle={styles.list}>
          {newsStories ? newsStories.map((item) => (
            <NewsCard
            key={item.gid}
            item={item}
            />
          )) : null
          }
          </List>
        </ScrollView>
      </ImageBackground>
    )
  }
  }

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    marginTop: 20
  },
  scrollView: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    alignSelf: "center"
  },
  list: {
    marginBottom: 10,
    backgroundColor: "transparent"
  }

})

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
