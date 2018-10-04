import React from 'react'
import {
  ScrollView,
  TouchableHighlight,
  View
} from 'react-native'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchRandomNews, fetchUserNews } from "../redux/actions/newsActions"
import { fetchUserGames } from "../redux/actions/profileActions"
import NewsCard from "./NewsCard"
import { List, Header } from 'react-native-elements'




const validGuestGames = [104900, 208580, 205790, 219890, 11020, 105430, 251470, 221380, 305050, 355950, 813820, 878760, 730, 440]
const validGuestGame = validGuestGames[Math.floor(Math.random()*validGuestGames.length)]



class News extends React.Component {



  grabGameId = (obj) => {
    let arr = []
    for(let i=0; i<obj.length; i++){
      arr.push(obj[i].appid)
    }
    return arr
  }

  componentWillMount(){
    this.props.isGuest ?
    this.props.fetchRandomNews(validGuestGame) :
     this.props.fetchUserGames(this.props.currentUser.data.steam_id)
  }

  // componentDidUpdate(){
  //   const theGame = this.props.currentUserGames.length ?
  //   this.grabGameId(this.props.currentUserGames)[Math.floor(Math.random()*this.props.currentUserGames.length)] : null;
  //
  //   theGame !== null  && !this.props.currentNews.appnews ?
  //   this.props.fetchUserNews(theGame) : null;
  //
  //   // console.log("props in news", this.props.currentNews ? this.props.currentNews[0].appnews.newsitems : null);
  //
  //   // newsData = this.props.currentNews ? this.props.currentNews[0].appnews.newsItems : null;
  //   //
  //   // gameName = this.props.currentNews ? this.props.currentNews[1] : null;
  // }





  render(){

    const theGame = this.props.currentUserGames.length && this.grabGameId(this.props.currentUserGames)[Math.floor(Math.random()*this.props.currentUserGames.length)]
    theGame !== null  && !this.props.currentNews.appnews ?
       this.props.fetchUserNews(theGame) : null;

    let newsData = this.props.currentNews[0] ? this.props.currentNews[0].appnews.newsitems : null
    let gameName = this.props.currentNews[1] ? this.props.currentNews[1] : null
    console.log("newsdata", newsData, 'game name: ', gameName);
    return (
      <View style={{marginTop: 18, paddingBottom: 80, width: "100%"}}>
        <Header backgroundColor={"#11162a"}
          centerComponent={{ text: "News", style: { color: '#fff', fontSize: 30 } }}
        />
          <ScrollView style={{ backgroundColor: "#11162a", width: "100%"}}>
            <List containerStyle={{marginBottom: 20}}>
            {newsData ? newsData.map((item) => (
              <NewsCard
              key={item.gid}
              item={item}
              gameName={this.gameName !== null ? this.gameName : null}

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
fetchRandomNews,
fetchUserNews,
fetchUserGames
}, dispatch)

const mapStateToProps = state => ({
  currentNews: state.news.currentNews,
  currentUserGames: state.profile.currentUserGames,
  currentUser: state.users.currentUser,
  isLoggedIn: state.users.isLoggedIn,
  isGuest: state.users.isGuest
})


export default connect(mapStateToProps, mapDispatchToProps)(News)
