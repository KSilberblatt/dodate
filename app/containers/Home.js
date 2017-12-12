import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  ScrollView,
  View,
  TextInput,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

class Home extends React.Component {
  searchPressed(){
    this.props.fetchTodos('Project');
  }
  render(){
    return<View style={{marginTop:50}}>
        <View>
          <TouchableHighlight onPress={ () => this.searchPressed() }>
            <Text>Fetch Todos</Text>
          </TouchableHighlight>
        </View>

        <ScrollView>

        </ScrollView>
      </View>;
  }

}

function mapStateToProps(state) {
  return {
    searchedTodos: state.searchedTodos
  };
}

export default connect(mapStateToProps)(Home);
