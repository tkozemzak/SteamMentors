import React from 'react'
import {bindActionCreators} from 'redux'
import {
  ScrollView,
  TouchableHighlight,
  Text,
  View,
  Button,
  Image,
  StyleSheet
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
    this.props.userLogout(this.history)
  }
  render(){

    let {history} = this.props

    return (
      <View>
      { this.props.isGuest ? <View>
      <View style={{alignSelf: "center", marginTop: 50, marginBottom: 50}}>
      <Image
      style={styles.logo}
      source={require('../../assets/images/logo.png')}
    />
      </View>
      <Text style={{color: "white", alignSelf: "center"}}>
      Please login or register to view this page
      </Text>
      <View style={styles.button}>
      <Button color="#58ab7f" title="Return to Login/Register" onPress={()=> this.handleLogout()}/>
      </View>
      </View> :
      <View style={{marginTop: 18, paddingBottom: 80}}>
        <Header backgroundColor={"#11162a"}
          centerComponent={{ text: `${this.props.currentUser.data.steam_name}`, style: {color: "white", fontSize: 30}}}
          rightComponent={<Button color="#58ab7f" title="Logout" onPress={()=> this.handleLogout()}/>}
        />
          <ScrollView style={{ backgroundColor: "#11162a", marginBottom: 100}}>
            <List containerStyle={{marginBottom: 20}}>
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
      </View>
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
