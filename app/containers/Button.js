import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
// C5E1A5
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
});

export default class Button extends React.Component {
  constructor(props){
    super(props);
  }
  press() {
  //execute any code here
  }
  getContent(){
    if(this.props.children){
        return this.props.children;
    }
    return <Text style={this.props.styles.label}>{this.props.label}</Text>;
  }
  render(){
  return (
      <TouchableHighlight
          underlayColor={this.props.underlayColor ?
            this.props.underlayColor : "#26C6DA"}
          onPress={this.props.onPress}
          style={[
              this.props.noDefaultStyles ? '' : styles.button,
              this.props.styles ? this.props.styles.button : '']}
      >
        { this.getContent() }
      </TouchableHighlight>
    );
  }
}
