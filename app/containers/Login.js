import React, { Component } from 'react';
import Button from './Button';
import Label from './Label';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { loginStyle } from '../stylesheets/index';

export default class Login extends Component {
  constructor(props){
    super(props);
  }
  press() {
  //execute any code here
  }
  render() {
    return (
        <View style={loginStyle.loginView}>
          <Text style={loginStyle.title}> DoDate
          </Text>
          <View>
            <Label text="Username or Email" />
            <TextInput
                style={loginStyle.textInput}
            />
        </View>
          <View style={ loginStyle.passwordText }>
              <Label text="Password" />
              <TextInput
                  secureTextEntry={true}
                  style={loginStyle.textInput}
              />
          </View>
          <View>
            <Button
                styles={{button: loginStyle.transparentButton}}
                onPress={this.press.bind(this)}
            >
              <View style={loginStyle.inline}>
                  <Icon name="facebook-official" size={30} color="#3B5699" />
                  <Text style={[loginStyle.buttonBlueText, loginStyle.buttonBigText]}>  Connect </Text>
                  <Text style={loginStyle.buttonBlueText}>with Facebook</Text>
              </View>
            </Button>
          </View>
          <View style={loginStyle.footer}>
            <View>
                <Button
                    label="Log In"
                    underlayColor="#C5E1A5"
                    styles={{button: loginStyle.primaryButton, label: loginStyle.buttonWhiteText}}
                    onPress={this.press.bind(this)} />
                </View>
            <View>
                <Button
                    label="Demo"
                    styles={{label: loginStyle.buttonBlackText}}
                    onPress={this.press.bind(this)} />
                </View>
          </View>


        </View>
    );
  }
}
