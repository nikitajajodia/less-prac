var React           = require('react');
var Reflux          = require('reflux');
var Router          = require('react-router');
var Link            = Router.Link;
var RouteHandler    = Router.RouteHandler;

module.exports = React.createClass({
  render :function(){
  	return (
  		<div>
  			<RouteHandler params={this.props.params} />
  		</div>
  	)
  },
});