import React from 'react'
import {
  Text,
  View,
  Button,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  ImageBackground
} from 'react-native'
import { List } from 'react-native-elements'

import { userLogout } from '../../redux/actions/userActions'
import { SearchBar } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"
import { searchUsers } from '../../redux/actions/searchActions'
import SearchCard from './SearchCard'


class Search extends React.Component {

  state = {
    searchInput: ""
  }

  handleLogout = () => {
  this.props.userLogout(this.props.history)
  }

  handleSearch = () => {
    this.state.searchInput.length > 2 ?
    this.props.searchUsers(this.state) :
    alert("Please Enter More Than 2 Characters")
  }

  render(){
    //console.log('lkdfjal;ksjdflksdjf=====', this.props.navigation);
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
  <ScrollView style={{ backgroundColor: "transparent", width: "100%", height: "80%"}}>
    <List containerStyle={{marginBottom: 20, backgroundColor: "transparent"}}>
    {this.props.searchResults ? this.props.searchResults.map((item) => (
      <SearchCard
      key={item[0].steamid}
      item={item[0]}
      navigation={this.props.navigation}
      />
    )) : null
    }
    </List>
  </ScrollView>
      </View>
      :
      <View>
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
      </View> }
      </View>
      </ImageBackground>
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
      isGuest: state.users.isGuest,
      searchResults: state.search.searchResults
    })

export default connect(mapStateToProps, mapDispatchToProps)(Search)
