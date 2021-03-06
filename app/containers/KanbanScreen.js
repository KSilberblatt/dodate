import React from 'react';
import PropTypes from 'prop-types';
import SideMenu from 'react-native-side-menu';
import Viewport from './Viewport';
import { styles, styles2, styles3 } from '../stylesheets/index.js';
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

export default class ContentView extends React.Component {
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
            <Viewport />
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
