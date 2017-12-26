import React from 'react';
import PropTypes from 'prop-types';
import SideMenu from 'react-native-side-menu';
import { styles, styles2, styles3 } from './app/stylesheets/index.js';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import configureStore from './app/store/store';
import AppContainer from './app/containers/AppContainer';
import Login from './app/containers/Login';
import KanbanScreen from './app/containers/KanbanScreen';

/* shit to lookup
  onLayout
*/

let preloadedState={};
// if (window.currentUser) {
//   preloadedState = {
//     session: {
//       currentUser: window.currentUser
//     }
//   };
// }
const store = configureStore(preloadedState);
import {
  Dimensions,
  AppRegistry,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';



//ToDo switch to Login
export default class App extends React.Component {
  render(){
    return <Provider store={store}>
        <KanbanScreen />
      </Provider>;
  }
}
AppRegistry.registerComponent('DoDate', () => App);
