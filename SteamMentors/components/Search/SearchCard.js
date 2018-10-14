import React from 'react'
import {
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  Linking,
  Image
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {fetchUserGames} from '../../redux/actions/profileActions'


class SearchCard extends React.Component {



  render(){
let steamid = this.props.item.steamid
    return (
  <TouchableHighlight onPress={() => {this.props.navigation.navigate("UserPage", {steamid: steamid, personaname: this.props.item.personaname, avatar: this.props.item.avatarfull, goBack: this.props.navigation.goBack})}
} style={{width: '85%', height: 150, flex: 1, paddingTop: 25, paddingLeft: 10, alignSelf: "center", backgroundColor: "#11162a", marginTop: 15, borderRadius: 25}}>
        <View style={{flexDirection: "row", flex: 1}}>
        <View>
        <Image
              style={{width: 100, height: 100}}
              source={{uri: `${this.props.item.avatarfull}`}}
            />
        </View>
          <View style={{marginLeft: 10}}>
            <Text style={{color: "white"}}>{this.props.item.personaname}</Text>
            <Text style={{color: "white"}}>{this.props.item.personastate === 0 ? "Offline" : "Online"}</Text>
            <Text style={{color: "white"}}>{this.props.item.locstatecode ? `Location: ${this.props.item.locstatecode}` : null}</Text>
          </View>
        </View>
  </TouchableHighlight>

    )
  }
    }

    const mapStateToProps = state => ({
      currentUserGames: state.profile.currentUserGames
    })

    const mapDispatchToProps = dispatch => bindActionCreators({
      fetchUserGames
    }, dispatch)

    export default connect(mapStateToProps, mapDispatchToProps)(SearchCard)
