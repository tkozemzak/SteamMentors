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
import { fetchUserGames } from '../../redux/actions/profileActions'
import GameCard from "./GameCard"
import { List, Header } from 'react-native-elements'
import { withRouter } from 'react-router-native'

 class Profile extends React.Component {
   componentDidMount(){
     this.props.isLoggedIn ?
     this.props.fetchUserGames(this.props.currentUser.data.steam_id) :
     null
   }

  handleLogout = () => {
    this.props.userLogout()
  }
  render(){

    let {history} = this.props

    return (
      <ImageBackground
      style={{
          width: "100%",
          height: "100%",
        }}
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
      <View style={{marginTop: 18, paddingBottom: 80}}>
        <Header backgroundColor={"transparent"}
          leftComponent={{image: `${this.props.currentUser.data.avatar}`, style: {width: 50, height: 50}}}
          centerComponent={{ text: `${this.props.currentUser.data.steam_name}`, style: {color: "white", fontSize: 30}}}
          rightComponent={<Button color="#58ab7f" title="Logout" onPress={()=> this.handleLogout()}/>}
        />
          <ScrollView >
            <List >
              {this.props.currentUserGames ? this.props.currentUserGames.map((l) => (
                <GameCard
                key={l.appid}
                item={l}
                />
              )) : null
              }
            </List>
          </ScrollView>
      </View>
    }
    </ImageBackground>
    )
  }
    }

    const styles = StyleSheet.create({
      button: {
        width: "70%",
        alignSelf: "center",
        marginBottom: 15,
        marginTop: 15
      },
      logo: {
        width: 400,
        height: 200,
        resizeMode: "cover"
      },
      textInput: {
        height: 70,
        color: "white"

      },
      buttonContainer: {
        height:"40%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginTop: "70%"
      }
    });

    const mapDispatchToProps = dispatch => bindActionCreators({
      userLogout,
      fetchUserGames
    }, dispatch)

    const mapStateToProps = state => ({
      currentUser: state.users.currentUser,
      currentUserGames: state.profile.currentUserGames,
      isGuest: state.users.isGuest,
      isLoggedIn: state.users.isLoggedIn
    })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))
