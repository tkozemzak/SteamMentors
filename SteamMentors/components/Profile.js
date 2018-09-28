import React from 'react'
import {bindActionCreators} from 'redux'
import {
  Text,
  View,
  Button,
  Image
} from 'react-native'
import { connect } from "react-redux"
import { userLogout } from '../redux/actions/userActions'
import { fetchUserGames } from '../redux/actions/profileActions'

 class Profile extends React.Component {

   // componentDidMount(){
   //   this.props.fetchUserGames()
   // }
   componentDidMount(){
     this.props.fetchUserGames()

   }

  handleLogout = () => {
  this.props.userLogout()
  }
  render(){
    console.log("props in profile", this.props.currentUser);


    return (
      <View style={{height:"100%", backgroundColor: "#11162a"}}>
      <Text>Profile</Text>
      <Button title="Logout" onPress={()=> this.handleLogout()}/>
      </View>
    )
  }
    }

    const mapDispatchToProps = dispatch => bindActionCreators({
      userLogout,
      fetchUserGames
    }, dispatch)

    const mapStateToProps = state => ({
      currentUser: state.users.currentUser,
      currentUserGames: state.profile.currentUserGames
    })

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
