import {
  StyleSheet,
} from 'react-native';

export const loginStyle = StyleSheet.create({
  passwordText: {
    paddingTop: 10
  },

  title: {
    color: 'white',
    padding: 30,
    fontSize: 40,
    alignSelf: 'center'
  },
  loginView: {
    backgroundColor: '#80DEEA',
    justifyContent: 'center',
    height: '100%',
    padding: 20,
    flexDirection: 'column',

  },
  textInput: {
    height: 40,
    fontSize: 16,
    width: '95%',
    backgroundColor: '#FFF'
  },
  textLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    marginBottom: 10,
    color: '#595856'
  },
  label: {
    color: '#0d8898',
    fontSize: 20
  },
  alignRight: {
      alignSelf: 'flex-end'
  },
  buttonWhiteText: {
    fontSize: 20,
    color: '#FFF',
  },
  buttonBlackText: {
      fontSize: 20,
      color: '#595856'
  },
  primaryButton: {
      backgroundColor: '#9CCC65'
  },
  footer: {
     marginTop: 100
  },
  transparentButton: {
    marginTop: 30,
    borderColor: '#3B5699',
    borderWidth: 2
  },
  buttonBlueText: {
      fontSize: 20,
      color: '#3B5699'
  },
  buttonBigText: {
      fontSize: 20,
      fontWeight: 'bold'
  },
  inline: {
      flexDirection: 'row'
  },

});

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#00bcd4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const styles3 = StyleSheet.create({
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

export const styles2 = StyleSheet.create({
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
