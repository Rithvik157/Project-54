import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component {

  render() {
    return (
      <View
      style={{width:200,height:50,marginTop:50,marginLeft:60}} >
        <Button
          color="red"
          title="Sound 1"
        />      
       <View style={{
         marginTop:50
       }}> <Button
        color="purple"
        title="Sound 2"
        /></View>
        <View
        style={{
          marginTop:50
        }}>
        <Button
        color="green"
        title="Sound 3"
        />
        </View>
        <View
        style={{marginTop:50}}
        >
        <Button
        color="black"
        title="Sound 4"
        />
        </View>
       </View>
    );
  }
}


