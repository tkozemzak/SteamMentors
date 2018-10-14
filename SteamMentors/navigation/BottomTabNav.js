import React from 'react'
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import Search from "../components/Search/Search"
import UserPage from "../components/Search/UserPage"
import SendMessage from "../components/Search/SendMessage"
import News from "../components/News/News"
import Profile from "../components/Profile/Profile"
import { connect } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons';



const SearchStack = createStackNavigator({
  Search: {
    screen: Search,
  navigationOptions: () => ({
      title: `Search`,
      header: null
    }),
  },
  UserPage: {
    screen: UserPage,
  navigationOptions: () => ({
      title: `UserPage`,
      header: null
    }),
  },
  SendMessage: {
    screen: SendMessage,
  navigationOptions: () => ({
      title: `SendMessage`,
      header: null
    }),
  },
});

export default createBottomTabNavigator(
  {
    News: News,
    Search: SearchStack,
    Profile: Profile,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'News') {
          iconName = `md-planet`;
        } else if (routeName === 'Search') {
          iconName = `md-search`;

        } else  {
          iconName = `md-person`;
        }

        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#3098C8',
      inactiveTintColor: 'white',
      style: {
                  backgroundColor: '#58AB7F',

              }
    },
  }
);
