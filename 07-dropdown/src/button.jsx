var React = require('react');  // NPM Module

module.exports = React.createClass({
  render: function() {
    return <button className={"btn " + this.props.className} type="button">
      {this.props.title} &nbsp; 
			<span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
    </button>
  }
});
