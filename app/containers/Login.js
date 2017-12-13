import React, { Component } from 'react';
import Button from './Button';
import Label from './Label';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Container,
  ScrollView
} from 'react-native';



const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#E1D7D8',
    padding: 30,
    flexDirection: 'column'
  },
  textLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    marginBottom: 10,
    color: '#595856'
  },
  label: {
    color: '#0d8898',
    fontSize: 20
  },
  alignRight: {
      alignSelf: 'flex-end'
  },
});

export default class Login extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <ScrollView style={styles.scroll}>
          <Container>
            <Button
                label="Forgot Login/Pass"
                styles={{button: styles.alignRight, label: styles.label}}/>
          </Container>
          <Container>
            <Label text="Username or Email" />
            <TextInput
                style={styles.textInput}
            />
          </Container>
          <Container>
              <Label text="Password" />
              <TextInput
                  secureTextEntry={true}
                  style={styles.textInput}
              />
          </Container>
        </ScrollView>
    );
  }
}
