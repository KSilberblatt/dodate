import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Day from './DayContainer';
import {
  FlatList,
  View,
  Text
} from 'react-native';
import { week, navBar} from '../stylesheets/index.js';

class Week extends React.Component {
  searchPressed(){
    this.props.fetchTodos('Project');
  }
  render(){
    const days = [
      {day : 'Sunday', dayNickName : 'Su', key : 1},
      {day : 'Monday', dayNickName : 'M', key : 2},
      {day : 'Tuesday', dayNickName : 'Tu', key : 3},
      {day : 'Wednesday', dayNickName : 'W', key : 4},
      {day : 'Thursday', dayNickName : 'Th', key : 5},
      {day : 'Friday', dayNickName : 'F', key : 6},
      {day : 'Saturday', dayNickName : 'Sa', key : 7}
    ];
    return (
      <View>
        <View style={navBar.navBar}>
          <Text style={navBar.text}>DoDate</Text>
        </View>
        <FlatList scrollEnabled={true} data={days} style={week.week}
          renderItem={({item}) => (
            <Day  style={week.day}
                  day={item.day}
                  dayNickName={item.dayNickName}
                  key={item.key}/>
          )}/>
      </View>
    );}

} //has to be called item

function mapStateToProps(state) {
  return {
    searchedTodos: state.searchedTodos
  };
}

export default connect(mapStateToProps)(Week);
