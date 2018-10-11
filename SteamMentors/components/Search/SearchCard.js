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


class SearchCard extends React.Component {



  render(){
    //console.log('props in searchcard', this.props.navigation)
let steamid = this.props.item.steamid
    return (
  <TouchableHighlight onPress={() => {this.props.navigation.navigate("UserPage", {steamid: steamid})}
} style={{width: '85%', height: 130, flex: 1, padding: 10, alignSelf: "center", backgroundColor: "#11162a", marginTop: -1, marginBottom: 10}}>
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

    })

    const mapDispatchToProps = dispatch => bindActionCreators({

    }, dispatch)

    export default connect(mapStateToProps, mapDispatchToProps)(SearchCard)
