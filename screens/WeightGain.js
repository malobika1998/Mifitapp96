import React ,{ Component } from 'react';
import {
  Text,
  View,
  StyleSheet
  } from "react-native";

export default class WeightGain extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titleText}>Weight gain page  </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  titleText:{
    color:"blue",
    marginLeft:130,
    marginTop:390,

  }
})
