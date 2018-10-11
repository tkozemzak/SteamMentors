import React from 'react'
import {
  Text,
  View,
  Button,
  Image,
  TextInput,
  ScrollView,
  StyleSheet
} from 'react-native'
import { userLogout, searchUsers } from '../redux/actions/userActions'
import { SearchBar } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"


class Search extends React.Component {

  state = {
    searchInput: ""
  }

  handleLogout = () => {
  this.props.userLogout(this.props.history)
  }

  handleSearch = () => {
    this.state.searchInput.length > 2 ?
    this.props.searchUsers(this.state.searchInput) :
    alert("Please Enter More Than 2 Characters")
  }

  render(){

    return (
      <View style={{backgroundColor: "#11162a", height: "100%"}}>
      { this.props.isGuest ?
<View style={{padding: 10}}>
<TextInput
    style={styles.textInput}
    placeholder="Search Mentors By Username"
    autoCorrect={false}
    autoFocus={true}
    enablesReturnKeyAutomatically={true}
    selectionColor="#58ab7f"
    underlineColorAndroid="#58ab7f"
    placeholderTextColor="white"
    onChangeText={(text) => this.setState({searchInput: text})}
  />
  <View style={styles.button}>
    <Button color="#58ab7f" title="Search" onPress={() => this.handleSearch()}/>
    <Button color="#58ab7f" title="touserpage" onPress={() => this.props.navigation.navigate("UserPage")}/>
  </View>
      </View>
      :
      <View>
        <View style={{alignSelf: "center", marginTop: 50, marginBottom: 50}}>
          <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}
          />

        </View>
          <Text style={{color: "white", alignSelf: "center"}}>
          Please login or register to view this page
          </Text>
          <View style={styles.button}>
            <Button color="#58ab7f" title="Return to Login/Register" onPress={()=> this.handleLogout()}/>
          </View>
      </View> }
      </View>
    )
  }
    }


    const styles = StyleSheet.create({
      button: {
        width: "70%",
        alignSelf: "center",
        marginTop: 15,
        marginBottom: 15
      },
      logo: {
        width: 400,
        height: 200,
        resizeMode: "cover"
      },
      textInput: {
        fontSize: 20,
        marginTop: 15,
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
      searchUsers
    }, dispatch)

    const mapStateToProps = state => ({
      isGuest: state.users.isGuest
    })

export default connect(mapStateToProps, mapDispatchToProps)(Search)
