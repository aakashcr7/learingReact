import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,Text,AsyncStorage } from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class Home extends Component {
  state = {
     'name':''
  }
    componentDidMount = () => AsyncStorage.getItem('name')
    .then((value)=>this.setState({'name':value}))
    onLogout= () => {
      AsyncStorage.removeItem('name');
      this.setState({ 'name':''});
      Actions.loginPage()
    }
  render() {
    return (
      <View>
      <Text>Hello world!

        {this.state.name}
      </Text>
      <Button
      title={'Logout'}
      
      onPress={this.onLogout.bind(this)}
       />
       </View>
       
    );
  }
}
