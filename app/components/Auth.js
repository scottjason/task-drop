'use strict';

var React = require('react-native');
var Reflux = require('reflux');
var actions = require('../actions.js');
var AuthStore = require('../stores/AuthStore');

var {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} = React;


var Auth = React.createClass({
  mixins: [Reflux.ListenerMixin],
  getInitialState: function() {
    return { email: '', password: '', placeholderTextColor: 'rgba(225, 225, 225, .6)' };
  },
  componentDidMount: function() {
    this.listenTo(AuthStore, this.handleChange);
  },
  handleChange: function(data, cb) {
    if (typeof this[cb] === 'function') this[cb](data);
  },
  setEmail: function(email) {
    this.setState({ email: email });
  },  
  setPassword: function(password) {
    this.setState({ password: password });
  },
  onSubmitForm: function() {
    actions.validateForm(this.state);
  },
  onFormValid: function() {
    console.log('form valid', this.state);
  },
  onFormInvalid: function() {
    console.log('form invalid', this.state);
  },
  render: function() {
    return (
      <View style={styles.container}>

        { /* Logo Copy */ }
        <Text style={styles.logo}>task drop</Text>
                
        { /* Form Container */ }
        <View style={styles.formContainer}>
        
          { /* Email */ }
          <TextInput 
            style={styles.inputField} 
            onChangeText={this.setEmail}                             
            autoCorrect={false} 
            placeholderTextColor={this.state.placeholderTextColor} 
            placeholder={'Username'} />          
          <View style={[styles.underline, styles.firstLine]}></View>

          { /* Password */ }
            <TextInput 
              style={styles.inputField} 
              onChangeText={this.setPassword}                 
              autoCorrect={false} 
              placeholderTextColor={this.state.placeholderTextColor} 
              placeholder={'Password'} />
            <View style={[styles.underline, styles.secondLine]}></View>

          { /* Login Btn */ }
          <TouchableOpacity onPress={this.onSubmitForm}>
            <View style={styles.loginBtn}>
              <Text style={styles.loginBtnCopy}>LOGIN</Text>
            </View>
          </TouchableOpacity>            

          { /* Need An Acct */ }
          <Text style={styles.needAcct}>need an account?</Text>
        
        </View>      
      </View>
    
    )
  },
});

var styles = StyleSheet.create({
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
  formContainer: {
    flexDirection: 'column',    
    justifyContent: 'flex-start',
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
  loginBtn: {
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
  needAcct: {
    fontFamily: 'Avenir-Light',
    alignSelf: 'center',  
    color: 'rgba(225, 225, 225, .9)',
    marginTop: 15
  }
});


module.exports = Auth;