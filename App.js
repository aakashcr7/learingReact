import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,Platform,AsyncStorage,ActivityIndicator } from 'react-native';
import LoginPage from './/components/LoginPage';
import Home from './/components/Home';


import {Router, Scene} from 'react-native-router-flux';

export default class App extends Component {
  state = {
    'name':'',
    hasToken:false,
    isLoaded:false
 }
   componentDidMount = () => AsyncStorage.getItem('name')
   .then((value)=>this.setState({'name':value,hasToken:value!==null,isLoaded:true}))
     
  render() {
    if (!this.state.isLoaded){
      return(
        <ActivityIndicator />
      )
    }
    else{
    return (
      <Router>
      <Scene key = "root">
         <Scene key = "loginPage" component = {LoginPage} title = "LoginPage" initial = {!this.state.hasToken} />
         <Scene key = "home" component = {Home} title = "Home" initial = {this.state.hasToken}  />
      </Scene>
   </Router>
      
    );
  }
}
}
