var Parent = React.createClass({ displayName: "Parent",
  getInitialState: function () {
    return { signup: false, login: true };
  },
  switch: function (word) {
    var signup, login;
    if (word == "signup") {signup = true;login = false;} else
    {login = true;signup = false;}
    return this.setState({ login: login, signup: signup });

  },
  render: function () {

    var self = this;
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { id: "buttons" }, /*#__PURE__*/
      React.createElement("p", { id: "signupButton", onClick: self.switch.bind(null, "signup"), className: self.state.signup ? "yellow" : "blue" }, "Sign In"), /*#__PURE__*/
      React.createElement("p", { id: "loginButton", onClick: self.switch.bind(null, "login"), className: self.state.login ? "yellow" : "blue" }, " Login")),


      self.state.signup ? /*#__PURE__*/React.createElement(Signup, null) : null,
      self.state.login ? /*#__PURE__*/React.createElement(Login, null) : null));






  } });



var Signup = React.createClass({ displayName: "Signup",


  render: function () {


    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/

      React.createElement("div", { id: "signup" }, /*#__PURE__*/
      React.createElement("input", { type: "text", id: "first", placeholder: "First Name" }), /*#__PURE__*/
      React.createElement("input", { type: "text", id: "last", placeholder: "Last Name" }), /*#__PURE__*/
      React.createElement("input", { type: "email", id: "email", placeholder: "Email" }), /*#__PURE__*/
      React.createElement("input", { type: "password", id: "password", placeholder: "Password" }), /*#__PURE__*/
      React.createElement("input", { type: "password", id: "confirm", placeholder: "Confirm Password" }), /*#__PURE__*/
      React.createElement("button", { id: "send" }, "Send"))));




  } });


var Login = React.createClass({ displayName: "Login",
  render: function () {



    return /*#__PURE__*/(

      React.createElement("div", null, /*#__PURE__*/

      React.createElement("div", { id: "login" }, /*#__PURE__*/
      React.createElement("input", { type: "email", id: "email", placeholder: "Email" }), /*#__PURE__*/
      React.createElement("input", { type: "password", id: "password", placeholder: "Password" }), /*#__PURE__*/
      React.createElement("button", { id: "send" }, "Send"))));





  } });



ReactDOM.render( /*#__PURE__*/React.createElement(Parent, null), document.getElementById("space"));