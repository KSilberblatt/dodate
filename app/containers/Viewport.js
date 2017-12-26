import React from 'react';
import { View, Text, Animated, PanResponder } from 'react-native';
import { viewportStyles } from '../stylesheets/index';

export default class Viewport extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showDraggable     : true,
      dropZoneValues    : null,
      pan               : new Animated.ValueXY()
    };

    this.panResponder = new PanResponder.create({
      onStartShouldSetPanResponder   : () => true,
      onPanResponderMove             : Animated.event([null, {
        dx : this.state.pan.x,
        dy : this.state.pan.y
      }]),
      onPanResponderRelease          : (e, gesture) => {
        if (this.isDropZone(gesture)) {
          this.setState({
            showDraggable : false
          });
        }else {
          Animated.spring(
            this.state.pan,
            {toValue:{x:0,y :0}}
          ).start();
      }}
    });
  }
  setDropZoneValues(event) {
    this.setState({
      dropZoneValues : event.nativeEvent.layout
    });
  }
  isDropZone(gesture){
    let dz = this.state.dropZoneValues;
    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  }
  render() {
    return (
      <View style={viewportStyles.mainContainer} >
        <View
          onLayout={this.setDropZoneValues.bind(this)}
          style={viewportStyles.dropZone}>
          <Text style={viewportStyles.text}>Drop here!</Text>
        </View>
        {this.renderDraggable()}
      </View>
    );
  }
  renderDraggable() {
    if (this.state.showDraggable) {
      return (
        <View style={viewportStyles.draggableContainer}>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[this.state.pan.getLayout(), viewportStyles.circle]}>
            <Text style={viewportStyles.text}> Drag me! </Text>
          </Animated.View>
        </View>
      );
    }
  }
}
