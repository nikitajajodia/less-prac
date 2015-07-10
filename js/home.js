/** @jsx React.DOM */

var React        = require('react');
var Router       = require('react-router');
var Reflux       = require('reflux');
var RouteHandler = Router.RouteHandler;

module.exports = React.createClass({
  mixins: [Reflux.ListenerMixin, Router.Navigation, Router.State],

	render:function(){
		return(
			<div className="header">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				<RouteHandler params={this.props.params} />
			</div>
		);
	},
});