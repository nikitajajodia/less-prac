/** @jsx React.DOM */

var React        = require('react');
var Router       = require('react-router');
var Reflux       = require('reflux');
var RouteHandler = Router.RouteHandler;

var Header       = require('./header').View;

module.exports.View = React.createClass({
  mixins: [Reflux.ListenerMixin, Router.Navigation, Router.State],

	render:function(){
		return(
			<div className="container-fluid">
				<Header />
				<RouteHandler params={this.props.params} />
			</div>
		);
	},
});