import React from 'react';
import PropTypes from 'prop-types';
import SideMenu from 'react-native-side-menu';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

const image = require('./knight_360.png');

const styles3 = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00bcd4',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class Basic extends React.Component {
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
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
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
    );
  }
}


export default class App extends React.Component {
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

class ContentView extends React.Component {
  render() {
    return (
      <View style={styles3.container}>
        <Text style={styles3.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles3.instructions}>
          Mis Perritos!
        </Text>
        <Text style={styles3.instructions}>
        </Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#00bcd4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



// -------------------------------------------



const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const styles2 = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});

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
