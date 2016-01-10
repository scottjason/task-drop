'use strict';

const React = require('react-native');
const Reflux = require('reflux');
const actions = require('../actions.js');
const AuthStore = require('../stores/AuthStore');
const styles = require('../styles/auth');
const { Icon } = require('react-native-icons');

const { Text, TextInput, TouchableOpacity, View } = React;

module.exports = React.createClass({
  mixins: [Reflux.ListenerMixin],
  getInitialState () {
    return { teamName: '', firstName: '', lastName: '', email: '', password: '', errMessage: 'default', showLogin: true, placeholderTextColor: 'rgba(225, 225, 225, .6)' };
  },
  componentDidMount () {
    this.listenTo(AuthStore, this.handleChange);
  },
  handleChange (data, cb) {
    if (typeof this[cb] === 'function') this[cb](data);
  },
  setTeamName (teamName) {
    this.setState({ teamName: teamName });
  },
  setFirstName (firstName) {
    this.setState({ firstName: firstName });
  },  
  setLastName (lastName) {
    this.setState({ lastName: lastName });
  },  
  setEmail (email) {
    this.setState({ email: email });
  },  
  setPassword (password) {
    this.setState({ password: password });
  },
  toggleOpts () {
    this.setState({ showLogin: !this.state.showLogin });
  },
  onSubmitForm () {
    actions.validateForm(this.state);
  },
  onFormValid () {
    this.state.showLogin ? actions.login(this.state) : actions.signup(this.state);    
  },
  onFormInvalid (errMessage) {
    this.setState({ errMessage: errMessage });
  },
  onLoginSuccess (user) {
    actions.changeScene('/dashboard', user);
  },
  onLoginError (errMessage) {
    this.setState({ errMessage: errMessage });
  },
  onSignupSuccess (user) {
    actions.changeScene('/dashboard', user);
  },
  onSignupError (errMessage) {
    this.setState({ errMessage: errMessage });
  },
  render () {
    var buttonCopy = (this.state.showLogin) ? <Text style={styles.loginBtnCopy}>LOGIN</Text> : <Text style={styles.loginBtnCopy}>SIGNUP</Text>
    var optsCopy = (this.state.showLogin) ? <Text style={styles.optsCopy}>create new team</Text> : <Text style={styles.optsCopy}>have an account?</Text>
    var toolTipStyle = (this.state.errMessage !== 'default') ? styles.toolTip : [styles.toolTip, styles.removeOpacity];
    var signUpStyle = (this.state.showLogin) ? styles.hideInput : styles.showInput;
    var loginStyle = (this.state.showLogin) ? styles.showInput : styles.hideInput;
    return (
    
      <View style={styles.container}>

          { /* Logo Container */ }        
          <View style={styles.logoContainer}>
            
            { /* Logo Copy */ }
            <Text style={styles.logoCopy}>task drop</Text>
            
            { /* Logo Icon */ }
              <Icon name='material|check' size={18} color='#f63c3c' style={styles.logoIcon} />           
          </View>
               

        { /* Form Container */ }
        <View style={styles.formContainer}>

          { /* Signup Style */ }
          <View style={signUpStyle}>

          { /* Team Name */ }
            <TextInput 
              style={styles.inputField} 
              onChangeText={this.setTeamName}                             
              autoCorrect={false} 
              placeholderTextColor={this.state.placeholderTextColor} 
              placeholder={'Team Name'} />          
            <View style={[styles.underline, styles.firstLine]}></View>
         
            { /* First Name */ }
            <TextInput 
              style={styles.inputField} 
              onChangeText={this.setFirstName}                             
              autoCorrect={false} 
              placeholderTextColor={this.state.placeholderTextColor} 
              placeholder={'First Name'} />          
            <View style={[styles.underline, styles.firstLine]}></View>
            
            { /* Last Name */ }
            <TextInput 
              style={styles.inputField} 
              onChangeText={this.setLastName}                             
              autoCorrect={false} 
              placeholderTextColor={this.state.placeholderTextColor} 
              placeholder={'Last Name'} />          
            <View style={[styles.underline, styles.firstLine]}></View>                
        </View>

        
          { /* Email */ }
          <TextInput 
            style={styles.inputField} 
            onChangeText={this.setEmail}                             
            autoCorrect={false} 
            placeholderTextColor={this.state.placeholderTextColor} 
            placeholder={'Email'} />          
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
            <View style={styles.button}>
              { buttonCopy }
            </View>
          </TouchableOpacity>       

          { /* Login Opts */ }
          <View style={loginStyle}>
            <TouchableOpacity onPress={this.toggleOpts}> 
              { optsCopy }
            <View style={styles.underlineBright}></View>                
            </TouchableOpacity>      
          </View>                      

          { /* Signup Opts */ }
          <View style={signUpStyle}>
            <TouchableOpacity onPress={this.toggleOpts}> 
              { optsCopy }
            </TouchableOpacity>    
            <View style={styles.underlineBright}></View>              
          </View>  

        
        { /* Error Message */ }
        <View style={ toolTipStyle }>
          <Text style={ styles.errMessage }>{this.state.errMessage.toUpperCase()}</Text>   
        </View>
        
        </View>           
      </View>    
    )
  },
});



