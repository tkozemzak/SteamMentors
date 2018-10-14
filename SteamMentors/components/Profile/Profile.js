import React from 'react'
import {bindActionCreators} from 'redux'
import {
  ScrollView,
  TouchableHighlight,
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  ImageBackground
} from 'react-native'
import { connect } from "react-redux"
import { userLogout } from '../../redux/actions/userActions'
import { fetchUserGames, fetchMessages } from '../../redux/actions/profileActions'
import GameCard from "./GameCard"
import MessageCard from "./MessageCard"
import { List, Header } from 'react-native-elements'
import { withRouter } from 'react-router-native'

 class Profile extends React.Component {

   state = {
     screen: "games"
   }

   componentDidMount(){
     if(this.props.isLoggedIn){
       this.props.fetchUserGames(this.props.currentUser.data.steam_id);
       this.props.fetchMessages(this.props.currentUser.data.id);
     }
   }

  handleLogout = () => {
    this.props.userLogout()
  }
  render(){
    let {history} = this.props

    return (
      <ImageBackground
      style={styles.background}
        source={require("../../assets/images/gradient.jpeg")}
      >
      { this.props.isGuest ? <View>

      <Text style={{color: "white", alignSelf: "center"}}>
      Please login or register to view this page
      </Text>
      <View style={styles.button}>
      <Button color="#58ab7f" title="Return to Login/Register" onPress={()=> this.handleLogout()}/>
      </View>
      </View> :
      <View style={{marginTop: 18}}>
        <Header backgroundColor={"transparent"}
          leftComponent={{image: `${this.props.currentUser.data.avatar}`, style: {width: 50, height: 50}}}
          centerComponent={{ text: `${this.props.currentUser.data.steam_name}`, style: {color: "white", fontSize: 30}}}
          rightComponent={<Button color="#58ab7f" title="Logout" onPress={()=> this.handleLogout()}/>}
        />
        <View style={{marginTop: 15, flexDirection: "row", justifyContent: "center"}}>
          <View style={styles.leftButton}>
            <Button color="#58ab7f" title="Games" onPress={() => this.setState({screen: "games"})}/>
          </View>
          <View style={styles.rightButton}>
            <Button color="#58ab7f" title="Requests" onPress={() => this.setState({screen: "requests"})}/>
          </View>
        </View>
        {this.state.screen === "games" ? <ScrollView >
          <List >
            {this.props.currentMessages ? this.props.currentMessages.map((l) => (
              <GameCard
              key={l.appid}
              item={l}
              />
            )) : null
            }
          </List>
        </ScrollView> : <ScrollView >
          <List >
            {this.props.currentMessages ? this.props.currentMessages.map((l) => (
              <MessageCard
              key={l.id}
              item={l}
              />
            )) : null
            }
          </List>
        </ScrollView>}

      </View>
    }
    </ImageBackground>
    )
  }
    }

    const styles = StyleSheet.create({
      background: {
        width: "100%",
        height: "100%",
      },
      leftButton: {
        width: "40%",
        marginBottom: 5,
        marginRight: 5
      },
      rightButton: {
        width: "40%",
        marginBottom: 5,
        marginLeft: 5
      },
      logo: {
        width: 400,
        height: 200,
        resizeMode: "cover"
      }
    });

    const mapDispatchToProps = dispatch => bindActionCreators({
      userLogout,
      fetchUserGames,
      fetchMessages
    }, dispatch)

    const mapStateToProps = state => ({
      currentUser: state.users.currentUser,
      currentUserGames: state.profile.currentUserGames,
      currentMessages: state.profile.currentMessages,
      isGuest: state.users.isGuest,
      isLoggedIn: state.users.isLoggedIn
    })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))
