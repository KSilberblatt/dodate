import React from 'react';
import PropTypes from 'prop-types';
import SideMenu from 'react-native-side-menu';
import { connect } from 'react-redux';
import Viewport from './Viewport';
import {fetchTodos, fetchUser} from '../actions/todos';
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


class Day extends React.Component {
  constructor(props) {
    super(props);
  }
  myTask(item){
      if (item.tag !== 'none'){
        let myStyle;
        if (item.color === 'blue'){
          myStyle = day.blue;
        }
        if (item.color === 'orange'){
          myStyle = day.orange;
        }
        if (item.color === 'yellow'){
          myStyle = day.yellow;
        }
        if (item.color === 'green'){
          myStyle = day.green;
        }
        if (item.color === 'pink'){
          myStyle = day.pink;
        }
      return (
        <View style={myStyle}>
          <Text style={day.task}>   {item.task}</Text>
          <Text style={day.task}>   tag: {item.tag}   </Text>
        </View>
      );
    }}
  render() {
    const myTodos = {"213":{"id":213,"task":"call Dad","notes":"","user_id":13,"tag":"Misc.","etc":60,"workflow_pos":"TH","time_slot":11},"3":{"id":3,"task":"df","notes":"heyy ;)","user_id":13,"tag":"Misc.","etc":60,"workflow_pos":"T","time_slot":null},"221":{"id":221,"task":"Wash the dishes","notes":"","user_id":13,"tag":"Home: General","etc":60,"workflow_pos":"D","time_slot":10},"5":{"id":5,"task":"sdf","notes":"sdf","user_id":13,"tag":"Misc.","etc":60,"workflow_pos":"M","time_slot":null},"219":{"id":219,"task":"Trim the bunny's nails","notes":"","user_id":13,"tag":"Home: General","etc":60,"workflow_pos":"TH","time_slot":4},"212":{"id":212,"task":"Organize GitHub","notes":"","user_id":13,"tag":"Work: Organization","etc":60,"workflow_pos":"TH","time_slot":1},"246":{"id":246,"task":"Make Dinner","notes":"","user_id":13,"tag":"Home: General","etc":60,"workflow_pos":"TH","time_slot":6},"249":{"id":249,"task":"Go Out for Dinner","notes":"","user_id":13,"tag":"Home: Organization","etc":60,"workflow_pos":"F","time_slot":7},"250":{"id":250,"task":"Beef Up Project","notes":"","user_id":13,"tag":"Work: Organization","etc":60,"workflow_pos":"F","time_slot":3},"252":{"id":252,"task":"Plan Project","notes":"","user_id":13,"tag":"Work: General","etc":60,"workflow_pos":"M","time_slot":3},"209":{"id":209,"task":"Wash the dishes","notes":"","user_id":13,"tag":"Home: General","etc":60,"workflow_pos":"W","time_slot":10},"256":{"id":256,"task":"Pick Up Dinner","notes":"","user_id":13,"tag":"Misc.","etc":60,"workflow_pos":"SN","time_slot":5},"214":{"id":214,"task":"Study React DnD","notes":"Learn how to talk about monitors for React DnD","user_id":13,"tag":"Work: General","etc":60,"workflow_pos":"W","time_slot":4},"251":{"id":251,"task":"Start Project","notes":"","user_id":13,"tag":"Work: Organization","etc":60,"workflow_pos":"T","time_slot":12},"254":{"id":254,"task":"Yoga","notes":"","user_id":13,"tag":"Misc.","etc":60,"workflow_pos":"SN","time_slot":8},"255":{"id":255,"task":"Run","notes":"","user_id":13,"tag":"Misc.","etc":60,"workflow_pos":"SN","time_slot":2},"230":{"id":230,"task":"Go get lunch","notes":"","user_id":13,"tag":"Misc.","etc":60,"workflow_pos":"ST","time_slot":12},"216":{"id":216,"task":"DoDate: Add Custom Categories","notes":"implement custom category functionality for new/edit todo forms","user_id":13,"tag":"Work: General","etc":60,"workflow_pos":"M","time_slot":9},"220":{"id":220,"task":"Change the bunny's cage","notes":"","user_id":13,"tag":"Home: General","etc":60,"workflow_pos":"F","time_slot":12},"245":{"id":245,"task":"Make Dinner","notes":"","user_id":13,"tag":"Home: General","etc":60,"workflow_pos":"T","time_slot":6},"248":{"id":248,"task":"Go Out for Dinner","notes":"","user_id":13,"tag":"Home: Organization","etc":60,"workflow_pos":"ST","time_slot":6}};
    let todos = Object.keys(myTodos).map(function(objectKey, index) {
      var value = myTodos[objectKey];
      return value;
    });
    // console.log(todos);
    const result = todos.filter(todo => todo[`workflow_pos`] === this.props.daySlot);
    // console.log(result);
    const hours = [];
    for (let i = 8; i < 20; i++) {
        if (i > 12) {
            let hourNum = i - 12;
            hours.push({ hour: hourNum, timeOfDay: "p", key: i+"p", tag:"none"});
        }else{
            if (i === 12) {
            hours.push({ hour: i, timeOfDay: "p", key: i+"a", tag:"none" });
            }else{
            hours.push({ hour: i, timeOfDay: "a" , key: i+"a", tag:"none"});
            }
        }
        // console.log(result);
        Object.keys(result).map(function(objectKey, index) {
          var value = result[objectKey];
          if (value["time_slot"] === i || value["time_slot"] === i - 12){
            hours[hours.length - 1].task = value["task"];
            hours[hours.length - 1].tag = value["tag"];
            if(value["tag"] === "Misc."){
              hours[hours.length - 1].color = "blue";
            }
            else if(value["tag"] === "Home: General"){
              hours[hours.length - 1].color = "yellow";
            }
            else if(value["tag"] === "Work: General"){
              hours[hours.length - 1].color = "orange";
            }
            else if(value["tag"] === "Home: Organization"){
              hours[hours.length - 1].color = "pink";
            }
            else if(value["tag"] === "Work: Organization"){

              hours[hours.length - 1].color = "green";
            }
          }
        });

      }

      console.log(hours);
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
                  style={day.none}
            >
              <Text style={day.hourText}>{item.hour} {item.timeOfDay}</Text>
              {this.myTask(item)}
            </View>
          )}/>
        <Text style={day.backgroundDay}>{this.props.dayNickName}</Text>
      </View>
    );
  }

}
// -------------------------------------------
function mapStateToProps(state) {
  return {
    todos: state.myTodos
  };
}

export default connect(mapStateToProps)(Day);
