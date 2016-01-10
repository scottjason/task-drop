var Reflux = require('reflux');
var actions = require('../actions');
var Api = require('../api');

const devBase = 'http://localhost:3000';

module.exports = Reflux.createStore({
  listenables: [actions],
  isValidEmail: function(email) {
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  },
  isValidPassword: function(password) {
    return password.length >= 5;
  },
  onValidateForm: function() {
    var email = arguments[0].email;
    var password = arguments[0].password;
    this.isValidEmail(email.trim()) && this.isValidPassword(password.trim()) ? this.trigger({}, 'onFormValid'): this.trigger('invalid credentials', 'onFormInvalid');
  },
  login: function() {
    var opts = {};
    opts.url = devBase + '/login';
    opts.email = arguments[0].email;
    opts.password = arguments[0].password;
    Api.post(opts, function(results) {
     results.message ? this.trigger(results.message, 'onLoginError') : this.trigger(results.user, 'onLoginSuccess');
    }.bind(this));
  },
  signup: function() {
    var opts = {};
    opts.url = devBase + '/signup';
    opts.email = arguments[0].email;
    opts.password = arguments[0].password;
    Api.post(opts, function(results) {
     results.message ? this.trigger(results.message, 'onSignupError') : this.trigger(results, 'onSignupSuccess');      
    }.bind(this));
  },
  changeScene: function() {
    var opts = {};
    opts.scene = arguments[0];
    opts.user = arguments[1];
    this.trigger(opts, 'changeScene');
  }
});
