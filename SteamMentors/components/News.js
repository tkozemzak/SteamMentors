import React from 'react'
import {
  ScrollView,
  TouchableHighlight,
  View
} from 'react-native'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchNews } from "../redux/actions/newsActions"
import NewsCard from "./NewsCard"
import { List, Header } from 'react-native-elements'



class News extends React.Component {

  componentDidMount(){
    this.props.fetchNews()
  }

  render(){

    return (
      <View style={{marginTop: 18, paddingBottom: 80}}>
        <Header backgroundColor={"#11162a"}
          centerComponent={{ text: 'News', style: { color: '#fff', fontSize: 30 } }}
        />
          <ScrollView style={{ backgroundColor: "#11162a"}}>
            <List containerStyle={{marginBottom: 20}}>
              {this.props.currentNews.appnews ? this.props.currentNews.appnews.newsitems.map((l) => (
                <NewsCard
                key={l.gid}
                item={l}
                appurl={l.url}
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
fetchNews
}, dispatch)

const mapStateToProps = state => ({
  currentNews: state.news.currentNews
})


export default connect(mapStateToProps, mapDispatchToProps)(News)
