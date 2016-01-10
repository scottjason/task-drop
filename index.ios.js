'use strict';

const React = require('react-native');
const Reflux = require('reflux');
const SceneRouter = require('scene-router');
const Auth = require('./app/components/Auth');
const AuthStore = require('./app/stores/AuthStore');
const Dashboard = require('./app/components/Dashboard');

const {
  AppRegistry
} = React;

const {
  Scene,
  Cameras
} = SceneRouter;


const taskDrop = React.createClass({
  mixins: [Reflux.ListenerMixin],
  getInitialState() {
    return {};
  },
  componentDidMount() {
    this.scene = this.refs['sceneRef'];
    this.listenTo(AuthStore, this.handleChange);
  },
  handleChange(data, cb) {
    if (typeof this[cb] === 'function') this[cb](data);
  },
  changeScene(data) {
    this.scene.goto(data.scene, { user: data.user }, { duration: 350 });
  },
  render() {
  
    const cameraProps = {
      gestures: true,
      toleranceX: 10,
      toleranceY: 10,
      offsetUntilOpen: 50
    };

    return (
      <Scene ref="sceneRef" initialPath="/auth" cameraProps={cameraProps}  onSceneChange={({position, path}) => {
        console.log(position, path);
      }}>
        <Scene path="auth" component={Auth}/>
        <Scene path="dashboard" component={Dashboard}/>
      </Scene>
    );
  }
});



AppRegistry.registerComponent('taskDrop', () => taskDrop);