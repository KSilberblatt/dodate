import {
  StyleSheet,
  Dimensions,
} from 'react-native';
const myBlue = "#80DEEA";
const myGrey = 'rgba(47,79,79,0.3)';

let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');
export const viewportStyles = StyleSheet.create({
    mainContainer: {
        flex    : 1
    },
    dropZone    : {
        height         : 100,
        backgroundColor:'#2c3e50'
    },
    text        : {
        marginTop   : 25,
        marginLeft  : 5,
        marginRight : 5,
        textAlign   : 'center',
        color       : '#fff'
    },
    draggableContainer: {
        position    : 'absolute',
        top         : Window.height/2 - CIRCLE_RADIUS,
        left        : Window.width/2 - CIRCLE_RADIUS,
    },
    circle      : {
        backgroundColor     : '#1abc9c',
        width               : CIRCLE_RADIUS*2,
        height              : CIRCLE_RADIUS*2,
        borderRadius        : CIRCLE_RADIUS
    }
});
export const navBar = StyleSheet.create({
  navBar: {
    height: '15%',
    width: '100%',
    backgroundColor: myBlue,
    justifyContent: 'center'
  },
  text: {
    marginTop: 20,
    fontSize: 40,
    alignSelf: 'center',
    color: 'white'
  }
});
export const week = StyleSheet.create({
  week: {
    display: 'flex',
    flexDirection: 'column'
  },
  day: {
    height: '100%'
  },

});
export const day = StyleSheet.create({
  schedule: {
    display: 'flex',
  },
  header: {
    marginTop: 5,
    fontSize: 50,
    alignSelf: 'center',
    color: 'black',
  },
  none:{
    backgroundColor: "white",
    flex: 1,
    height: 50
  },
  task: {
    fontSize: 20
  },
  blue:{
    backgroundColor: "rgba(135,210,250,.15)",
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    height: 50
  },
  orange:{
    backgroundColor: "rgba(255, 182, 194, 0.4)",
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    height: 50
  },
  yellow:{
    backgroundColor: "rgba(255, 255, 224, 0.3)",
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    height: 50
  },
  green:{
    backgroundColor: "rgba(172, 255, 47, 0.466)",
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    height: 50
  },
  pink:{
    backgroundColor: "rgba(252, 80, 186, 0.466)",
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    height: 50
  },

  border: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'lightgrey',
    borderRadius: 10,
    alignSelf: 'center',
    width: '70%'
  },
  hours: {
    display: 'flex',
  },
  backgroundDay:{
    alignSelf: 'center',
    position: 'absolute',
    fontSize: 100,
    color: myGrey,
    backgroundColor: 'transparent',
    top: '35%'
  },
  hour: {
    flex: 1,
    height: 50
  },
  hourText: {
    color: myGrey,
  },
  test: {
    backgroundColor: 'red',
    height: 25,
    width: '65%',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'lightgrey',
    borderRadius: 10,

  },

});
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
