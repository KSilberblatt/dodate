import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Day from './DayContainer';

class Week extends React.Component {
  searchPressed(){
    this.props.fetchTodos('Project');
  }
  render(){
    return <Day />;
  }

}

function mapStateToProps(state) {
  return {
    searchedTodos: state.searchedTodos
  };
}

export default connect(mapStateToProps)(Week);
