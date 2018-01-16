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
  FlatList,
} from 'react-native';


export default class Day extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const hours = [];
    for (let i = 8; i < 20; i++) {
        if (i > 12) {
            let hourNum = i - 12;
            hours.push({ hour: hourNum, timeOfDay: "p", key: i+"p" });
        }else{
            if (i === 12) {
            hours.push({ hour: i, timeOfDay: "p", key: i+"a" });
            }else{
            hours.push({ hour: i, timeOfDay: "a" , key: i+"a"});
            }
        }

    }
    let myHours= hours.map(hour => (
        <View
            workflowpos={this.props.day}
            timeslot={hour.hour}
        >

      </View>
    ));

    return (
      <View>
        <View style={day.schedule}>
          <Text style={day.header}>{this.props.day}</Text>
        </View>
        <View style={day.border}/>
          <FlatList scrollEnabled={false} data={hours}
            style={day.hours} renderItem={({item}) => (
            <View workflowpos={this.props.dayNickName}
                  timeslot={item.hour}
                  style={day.hour}
            >
              <Text style={day.hourText}>{item.hour} {item.timeOfDay}</Text>
            </View>
          )}/>
        <Text style={day.backgroundDay}>{this.props.dayNickName}</Text>
      </View>
    );
  }
}
// -------------------------------------------
