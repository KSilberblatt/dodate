import React from 'react';
import PropTypes from 'prop-types';
import SideMenu from 'react-native-side-menu';
import Viewport from './Viewport';
import { styles, styles2, styles3 } from '../stylesheets/index.js';
import {
  Dimensions,
  AppRegistry,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Subheader } from 'react-native-material-design';

const image = require('../../knight_360.png');

export default class Day extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View>
          <Subheader text="Normal Subheader"/>
          <Subheader text="Normal Subheader with color" color="paperRed" />
          <Subheader text="Normal Subheader" inset />
          <Subheader text="Normal Subheader with color" color="paperOrange" inset />
      </View> 
    );
  }
}
// -------------------------------------------
