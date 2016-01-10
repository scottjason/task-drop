const React = require('react-native');
const { StyleSheet } = React;

module.exports =  StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#30282a'
  },
  logo: {
    fontSize: 28,
    fontFamily: 'Avenir-Light',
    color: 'white',
    marginBottom: 50    
  },
  logoIcon: {
    width: 40,
    height: 40,
    marginBottom: 15,
  },  
  formContainer: {
    flexDirection: 'column',    
    justifyContent: 'center',
    width: 500,
    marginBottom: 30,
    backgroundColor: 'transparent'
  },
  inputField: {
    alignSelf: 'center',
    width: 200,
    height: 30,    
    fontSize: 16,
    fontFamily: 'Avenir-Light',
    backgroundColor: 'transparent',
    color: 'rgba(225, 225, 225, 1)',
  },
  underline: {
    alignSelf: 'center',    
    width: 200,
    height: 1,
    backgroundColor: 'rgba(225, 225, 225, .5)'
  },
  firstLine: {
    marginBottom: 15
  },
  secondLine: {
    marginBottom: 30
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center', 
    width: 200,
    height: 40,
    backgroundColor: '#f63c3c',
    borderRadius: 5
  },
  loginBtnCopy: {
    fontFamily: 'Avenir-Light',
    alignSelf: 'center',  
    color: 'white',
    letterSpacing: 2
  },
  optsCopy: {
    fontFamily: 'Avenir-Light',
    alignSelf: 'center',  
    color: 'rgba(225, 225, 225, .9)',
    marginTop: 15
  },
  toolTip: {
    justifyContent: 'center',    
    marginTop: 15,    
    height: 40,
    backgroundColor: '#4b3f42'
  },
  errMessage: {
    fontFamily: 'Avenir-Light',
    alignSelf: 'center',
    color: '#FFD3D3'
  },
  removeOpacity: {
    opacity: 0
  },
  addOpacity: {
    opacity: 1
  }
});