import React from 'react'
import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import Search from "../components/Search"
import News from "../components/News"
import Profile from "../components/Profile"
import { connect } from 'react-redux'


export default createBottomTabNavigator ({
  News: {screen: News,
  navigationOptions:{
    tabBarLabel: "News",
    tabBarIcon: ({tintColor}) => (
      <Icon name="md-planet" size={24}/>
    )
  }},
  Search: {screen: Search,
  navigationOptions:{
    tabBarLabel: "Search",
    tabBarIcon: ({tintColor}) => (
      <Icon name="md-search" size={24}/>
    )
  }},
  Profile: {screen: Profile,
  navigationOptions:{
    tabBarLabel: "Profile",
    tabBarIcon: ({tintColor}) => (
      <Icon name="md-person" size={24}/>
    )
  }}
},
 {
    tabBarOptions: {
        activeTintColor: '#11162a', // active icon color
        inactiveTintColor: '#586589',  // inactive icon color
        style: {
            backgroundColor: '#58AB7F', // TabBar background

        }
    }
  }
)
