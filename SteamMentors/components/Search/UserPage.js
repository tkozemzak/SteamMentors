import React from 'react'
import {
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  Linking,
  Button
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchUserGames} from '../../redux/actions/profileActions'



class UserPage extends React.Component {

componentWillMount(){
this.props.fetchUserGames(this.props.navigation.state.params.steamid)
}

  render(){
    console.log('props in userpage', this.props);
    return (
      <View>
      <Button color="#58ab7f" title="tomessagepage" onPress={() => this.props.navigation.navigate("SendMessage")}/>

      <Text>
      UserPage
      </Text>
      </View>

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
