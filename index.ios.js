'use strict';

var React = require('react-native');
var Auth = require('./app/components/Auth');

var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

var taskDrop = React.createClass({
  render: function() {
    return (
      <View style={styles.wrapper}>
        <Auth/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});

AppRegistry.registerComponent('taskDrop', () => taskDrop);