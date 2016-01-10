'use strict';

const React = require('react-native');
const Reflux = require('reflux');
const actions = require('../actions.js');
const styles = require('../styles/dashboard');
const { Icon } = require('react-native-icons');

const { Text, TextInput, TouchableOpacity, View } = React;

module.exports = React.createClass({
  mixins: [Reflux.ListenerMixin],
  getInitialState () {
    return { user: this.props.user,  placeholderTextColor: 'rgba(225, 225, 225, .6)' };
  },
  componentDidMount () {
    console.log('dasboard component mounted', this.props.user);
  },
  handleChange (data, cb) {
    if (typeof this[cb] === 'function') this[cb](data);
  },
  setTask (task) {
    console.log('set task called', task);
  },
  render () {
    return (    
      <View style={styles.container}>
                
        { /* Form Container */ }
        <View style={styles.formContainer}>        

          { /* Password */ }
            <TextInput 
              style={styles.inputField} 
              onChangeText={this.setPassword}                 
              autoCorrect={false} 
              placeholderTextColor={this.state.placeholderTextColor} 
              placeholder={'enter task'} />
            <View style={[styles.underline, styles.secondLine]}></View>

          { /* Enter Task Btn */ }
          <TouchableOpacity onPress={this.onSubmitForm}>
            <View style={styles.button}>
              <Text style={styles.loginBtnCopy}>enter task</Text>         
            </View>
          </TouchableOpacity>                             
        
        </View>           
      </View>     
    )
  },
});