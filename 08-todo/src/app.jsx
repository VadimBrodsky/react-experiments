var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');

var App = React.createClass({
  render: function() {
    return <h1>
      Hello!
    </h1>
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
