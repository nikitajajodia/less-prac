/** @jsx React.DOM */

var React        = require('react');
var Router       = require('react-router');
var Reflux       = require('reflux');
var RouteHandler = Router.RouteHandler;

module.exports.View = React.createClass({
  mixins: [Reflux.ListenerMixin, Router.Navigation, Router.State],

	render:function(){
		return(
			<div className="">
				
			  
			  
			</div>
		);
	},
});