/** @jsx React.DOM */

var React           = require('react');
var Reflux          = require('reflux');
var Router          = require('react-router');
var Link            = Router.Link;
var RouteHandler    = Router.RouteHandler;

var Header          = require('./header').View;
var Footer          = require('./footer').View;

module.exports = React.createClass({
  render :function(){
  	return (
  		<div className="">
  			<Header />
  			<RouteHandler params={this.props.params} />
  			<Footer />
  		</div>
  	)
  },
});