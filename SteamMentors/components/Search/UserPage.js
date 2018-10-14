import React from 'react'
import {
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  Button,
  ScrollView
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchUserGames} from '../../redux/actions/profileActions'
import { List, Header } from 'react-native-elements'
import UserGameCard from './UserGameCard'

class UserPage extends React.Component {

  componentDidMount(){
    this.props.fetchUserGames(this.props.navigation.state.params.steamid)
  }

  render(){
    return (
      <ImageBackground
      style={{
          flex: 1,
          width: "100%",
          height: "110%",
          justifyContent: 'center',
          paddingTop: 20
        }}
        source={require("../../assets/images/gradient.jpeg")}>
        <Header backgroundColor={"transparent"}
          leftComponent={<Button color="#58ab7f" title="Back" onPress={()=> this.props.navigation.goBack()}/>}
          centerComponent={{ text: `${this.props.navigation.state.params.personaname}`, style: { color: '#fff', fontSize: 30} }}/>
          <ScrollView style={{width: "100%", height: "100%", backgroundColor: "transparent", alignSelf: "center"}}>
            <List containerStyle={{marginBottom: 10, backgroundColor: "transparent"}}>
            {this.props.currentUserGames ? this.props.currentUserGames.map((l) => (
              <UserGameCard
              key={l.appid}
              navigation={this.props.navigation}
              item={l}
              />
            )) : null
            }
            </List>
          </ScrollView>
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
