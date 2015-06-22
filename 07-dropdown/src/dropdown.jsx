var React = require('React');
var Button = require('./button');
//var List = require('./list');

module.exports = React.createClass({
	handleClick: function() {
		alert("hello from the dropdown");
	},
	render: function() {
		
		return <div className="dropdown">
			<Button 
				title={this.props.title}  
				className="btn-default" 
				subTitleClassName="caret" 
				whenClicked={this.handleClick} 
			/>
		</div>
	}
});
