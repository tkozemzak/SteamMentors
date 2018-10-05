<View style={{height:"100%"}}>

    <View style={{alignSelf: "center", marginTop: 50}}>
    <Image
    style={{width: 400, height: 200, resizeMode: "cover"}}
    source={require('../assets/images/logo.png')}
  />
    </View>
      <View style={{marginTop: 125}}>
        <View style={styles.button}>
          <Button color="#58ab7f" title="Login" onPress={() => history.push("/login")}/>
        </View>
        <View style={styles.button}>
          <Button color="#58ab7f" title="Register" onPress={() => history.push("/register")}/>
        </View>
        <View style={styles.button}>
          <Button color="#58ab7f" title="Continue As Guest" onPress={() => this.handleGuestLogin()}/>
        </View>
      </View>

</View>



const styles = StyleSheet.create({
  button: {
    width: "70%",
    alignSelf: "center",
    marginTop: 15
  },
});


onPress={this.spin}



<Image
style={{width: 380, height: 50, resizeMode: "cover"}}
source={require('../assets/images/bottomLogo.png')}
/>
