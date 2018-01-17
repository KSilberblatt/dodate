import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Day from './DayContainer';
import {fetchTodosIfNeeded, fetchTodos} from '../actions/todos';
import {fetchUsers, fetchUser, receiveTodos} from '../actions/todos';
import {
  FlatList,
  View,
  Text,
} from 'react-native';
import { week, navBar} from '../stylesheets/index.js';

class Week extends React.Component {
  searchPressed(){
    this.props.fetchTodos('Project');
  }
  componentDidMount() {
  fetchTodos(13);
  }
  render(){
    const days = [
      {day : 'Sunday', dayNickName : 'Su', key : 1, daySlot : 'SN'},
      {day : 'Monday', dayNickName : 'M', key : 2, daySlot : 'M'},
      {day : 'Tuesday', dayNickName : 'Tu', key : 3, daySlot :'T'},
      {day : 'Wednesday', dayNickName : 'W', key : 4, daySlot :'W'},
      {day : 'Thursday', dayNickName : 'Th', key : 5, daySlot :'TH'},
      {day : 'Friday', dayNickName : 'F', key : 6, daySlot :'F'},
      {day : 'Saturday', dayNickName : 'Sa', key : 7, daySlot :'ST'}
    ];
    return (
      <View>
        <View style={navBar.navBar} >
          <Text style={navBar.text}>DoDate</Text>
        </View>
        <FlatList scrollEnabled={true} data={days} style={week.week}
          renderItem={({item}) => (
            <Day  style={week.day}
                  day={item.day}
                  dayNickName={item.dayNickName}
                  key={item.key}
                  daySlot={item.daySlot}/>
          )}/>
      </View>
    );}

} //has to be called item
Week.propTypes = {
  selectedUserId: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { todosByUserId } = state;
  const myTodos = {"218":{"id":218,"task":"Go to Tilden Park for hike","notes":"","user_id":13,"tag":"Misc.","etc":60,"workflow_pos":"T","time_slot":5},"3":{"id":3,"task":"df","notes":"heyy ;)","user_id":13,"tag":"Misc.","etc":60,"workflow_pos":"T","time_slot":null},"221":{"id":221,"task":"Wash the dishes","notes":"","user_id":13,"tag":"Home: General","etc":60,"workflow_pos":"T","time_slot":10},"5":{"id":5,"task":"sdf","notes":"sdf","user_id":13,"tag":"Misc.","etc":60,"workflow_pos":"M","time_slot":null},"219":{"id":219,"task":"Trim the bunny's nails","notes":"","user_id":13,"tag":"Home: General","etc":60,"workflow_pos":"TH","time_slot":4},"209":{"id":209,"task":"Wash the dishes","notes":"","user_id":13,"tag":"Home: General","etc":60,"workflow_pos":"ST","time_slot":11},"212":{"id":212,"task":"Organize GitHub","notes":"","user_id":13,"tag":"Work: Organization","etc":60,"workflow_pos":"W","time_slot":1},"213":{"id":213,"task":"call Dad","notes":"","user_id":13,"tag":"Misc.","etc":60,"workflow_pos":"M","time_slot":2},"214":{"id":214,"task":"Study React DnD","notes":"Learn how to talk about monitors for React DnD","user_id":13,"tag":"Work: General","etc":60,"workflow_pos":"W","time_slot":4},"216":{"id":216,"task":"DoDate: Add Custom Categories","notes":"implement custom category functionality for new/edit todo forms","user_id":13,"tag":"Work: General","etc":60,"workflow_pos":"T","time_slot":11},"230":{"id":230,"task":"Go get lunch","notes":"","user_id":13,"tag":"Misc.","etc":60,"workflow_pos":"ST","time_slot":12},"220":{"id":220,"task":"Change the bunny's cage","notes":"","user_id":13,"tag":"Home: General","etc":60,"workflow_pos":"TH","time_slot":9}};
  const selectedUserId = '13';
  const {
    isFetching,
    lastUpdated,
    items: todos
  } = {
    isFetching: true,
    items: []
  };

  return {
    selectedUserId,
    todos,
    myTodos,
    isFetching,
    lastUpdated
  };
}

export default connect(mapStateToProps)(Week);
