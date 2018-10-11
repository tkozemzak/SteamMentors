import React from 'react'
import {
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  Linking,
  Button,
  ScrollView
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchUserGames} from '../../redux/actions/profileActions'
import { List, Header } from 'react-native-elements'
import UserGameCard from './UserGameCard'



class UserPage extends React.Component {

  state = {

  }

  componentDidMount(){
    this.props.fetchUserGames(this.props.navigation.state.params.steamid)
  }

  render(){
    console.log('props in userpage', this.props);
    return (
      <ImageBackground
      style={{
          flex: 1,
          width: "100%",
          height: "100%",
          justifyContent: 'center',
        }}
        source={require("../../assets/images/gradient.jpeg")}
      >
      <View style={{ height: "100%", width: "100%"}}>

        <ScrollView style={{ backgroundColor: "black", width: "100%", height: "80%"}}>
          <List containerStyle={{marginBottom: 20, backgroundColor: "white"}}>
          {this.props.currentUserGames ? this.props.currentUserGames.map((l) => (
            <UserGameCard
            key={l.appid}
            item={l}
            />
          )) : null
          }
          </List>
        </ScrollView>
        </View>
      </ImageBackground>

    )
  }
    }
    const mapStateToProps = state => ({
      currentUserGames: state.profile.currentUserGames
    })

    const mapDispatchToProps = dispatch => bindActionCreators({
      fetchUserGames
    }, dispatch)

    export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
