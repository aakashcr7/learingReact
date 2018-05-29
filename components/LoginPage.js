import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,Text,AsyncStorage } from 'react-native';
import {Actions} from 'react-native-router-flux';
import CheckBox from 'react-native-checkbox';
export default class LoginPage extends Component {
    constructor(props) {
          super(props);
          
          this.state = {
            username: '',
            password: '',
          };
        }
        
        onLogin() {
          const { username, password } = this.state;
          Actions.home()
          
      
        //   Alert.alert('Credentials', `${username} + ${password}`);
        }
        setName= (value) => {
          AsyncStorage.setItem('name',value);
          this.setState({ 'username':value});
        }
      
  render() {
    return (
        <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={this.setName}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
        <CheckBox
          label='Label'
          checked={true}
          onChange={(checked) => console.log('I am checked', checked)}
         />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
  });
  