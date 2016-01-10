var Reflux = require('reflux');
var actions = require('../actions');
var Api = require('../api');

const devBase = 'http://localhost:3000';

module.exports = Reflux.createStore({
  listenables: [actions],
  isValidEmail(email) {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email);
  },
  isValidPassword(password) {
    return password.length >= 5;
  },
  isValidTeamName(teamName) {
    return teamName.length >= 3;
  },
  isValidFirstName(firstName) {
    return firstName.length >= 2;
  },
  isValidLastName(lastName) {
    return lastName.length >= 2;
  },
  onValidateForm() {

    var email = arguments[0].email;
    var password = arguments[0].password;

    var isLogin = arguments[0].showLogin;

    if (!isLogin) {

      var teamName = arguments[0].teamName;
      var firstName = arguments[0].firstName;
      var lastName = arguments[0].lastName;

      var isValidTeamName = this.isValidTeamName(teamName.trim());
      var isValidFirstName = this.isValidFirstName(firstName.trim());
      var isValidLastName = this.isValidLastName(lastName.trim());
      var isValidEmail = this.isValidEmail(email.trim());
      var isValidPassword = this.isValidPassword(password.trim());

      if (isValidTeamName && isValidFirstName && isValidLastName && isValidEmail && isValidPassword) {
        this.trigger({}, 'onFormValid');
      } else {
        this.trigger('invalid credentials', 'onFormInvalid');
      }
    } else {
      this.isValidEmail(email.trim()) && this.isValidPassword(password.trim()) ? this.trigger({}, 'onFormValid'): this.trigger('invalid credentials', 'onFormInvalid');      
    }
  },
  login() {
    var opts = {};
    opts.url = devBase + '/login';
    opts.email = arguments[0].email;
    opts.password = arguments[0].password;
    Api.post(opts, function(results) {
      results.message ? this.trigger(results.message, 'onLoginError') : this.trigger(results, 'onLoginSuccess');
    }.bind(this));
  },
  signup() {
    var opts = {};
    opts.url = devBase + '/signup';
    opts.email = arguments[0].email;    
    opts.password = arguments[0].password;
    opts.teamName = arguments[0].teamName;
    opts.firstName = arguments[0].firstName;
    opts.lastName = arguments[0].lastName;    
    Api.post(opts, function(results) {
      results.message ? this.trigger(results.message, 'onSignupError') : this.trigger(results, 'onSignupSuccess');
    }.bind(this));
  },
  changeScene() {
    var opts = {};
    opts.scene = arguments[0];
    opts.user = arguments[1];
    this.trigger(opts, 'changeScene');
  }
});
