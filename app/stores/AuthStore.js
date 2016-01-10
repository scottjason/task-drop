var Reflux = require('reflux');
var actions = require('../actions');

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
    
    (this.isValidEmail(email) && this.isValidPassword(password)) ? this.trigger({}, 'onFormValid') : this.trigger({}, 'onFormInvalid');
  }
});
