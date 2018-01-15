import React from 'react';
import PropTypes from 'prop-types';
import SideMenu from 'react-native-side-menu';
import Viewport from './Viewport';
import { navBar, day } from '../stylesheets/index.js';
import {
  Dimensions,
  AppRegistry,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

const image = require('../../knight_360.png');

export default class Day extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View>
        <View style={navBar.navBar}>
          <Text style={navBar.text}>DoDate</Text>
        </View>
        <View style={day.schedule}>
          <Text style={day.header}>Monday</Text>
        </View>
      </View>
    );
  }
}
// -------------------------------------------
