'use strict';

const React = require('react-native');
const Reflux = require('reflux');
const actions = require('../actions.js');
const AuthStore = require('../stores/AuthStore');

const SceneRouter = require('scene-router');


const {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} = React;

const {
  Scene,
  Cameras
} = SceneRouter;


const Dashboard = React.createClass({
  mixins: [Reflux.ListenerMixin],
  getInitialState: function() {
    return { user: this.props.user };
  },
  componentDidMount: function() {
    console.log('dasboard component mounted', this.props.user);
  },
  handleChange: function(data, cb) {
    if (typeof this[cb] === 'function') this[cb](data);
  },
  render: function() {
    return (
    
      <View style={styles.container}>
        <Text> {this.state.user._id}</Text>     
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
  }
});


module.exports = Dashboard;