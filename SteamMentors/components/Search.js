import React from 'react'
import {
  Text,
  View,
  Button,
  Image,
  TextInput,
  ScrollView
} from 'react-native'
import { SearchBar } from 'react-native-elements'
import { connect } from "react-redux"


export default class Search extends React.Component {

  state = {
    searchInput: ""
  }

  render(){

    return (
      <View style={{height:"100%", backgroundColor: "#11162a", paddingTop: 26}}>
      <SearchBar
      
  clearIcon={{ color: 'red' }}
  searchIcon={false}

  placeholder='Search Mentors' />

      </View>
    )
  }


    }
