import React from 'react';
import PropTypes from 'prop-types';
import SideMenu from 'react-native-side-menu';
import { styles, styles2, styles3 } from './app/stylesheets/index.js';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './app/reducers';
import AppContainer from './app/containers/AppContainer';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
  return createStore(reducer, initialState, enhancer);
}
const store = configureStore({});
import {
  Dimensions,
  AppRegistry,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';


const image = require('./knight_360.png');

export default class App extends React.Component {
  render(){
    return <Provider store={store}>
        <AppContainer />
      </Provider>;
  }
}

export class ContentView extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      selectedItem: 'About',
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected(item) {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  }

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isLeftOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
        menuPosition="left"
      >
        <SideMenu
          menu={menu}
          isOpen={this.state.isRightOpen}
          onChange={isOpen => this.updateMenuState(isOpen)}
          menuPosition="left"
        >
          <View style={styles3.container}>
            <Text style={styles3.welcome}>
              Welcome to Flippin DoDate
            </Text>
            <Text style={styles3.instructions}>
              Mis Perritos!
            </Text>
            <Text style={styles3.instructions}>
            </Text>
            <Text style={styles3.instructions}>
            </Text>
          </View>
          <TouchableOpacity
            onPress={this.toggle}
            style={styles3.button}
          >
            <Image
              source={image}
              style={{ width: 32, height: 32 }}
            />
          </TouchableOpacity>
        </SideMenu>
      </SideMenu>
    );
  }
}
// -------------------------------------------



const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

function Menu({ onItemSelected }) {
  return (
    <ScrollView scrollsToTop={false} style={styles2.menu}>
      <View style={styles2.avatarContainer}>
        <Image
          style={styles2.avatar}
          source={{ uri }}
        />
      <Text style={styles2.name}>Kevin</Text>
      </View>

      <Text
        onPress={() => onItemSelected('About')}
        style={styles2.item}
      >
        ToDo
      </Text>

    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};
