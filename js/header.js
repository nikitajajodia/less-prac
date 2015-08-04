/** @jsx React.DOM */

var React        = require('react');
var Router       = require('react-router');
var Reflux       = require('reflux');
var RouteHandler = Router.RouteHandler;
var Link         = Router.Link;

module.exports.View = React.createClass({
  mixins: [Reflux.ListenerMixin, Router.Navigation, Router.State],

  componentDidMount: function(){
  	
  },
	render:function(){
		return(
			<div className="navbar navbar-inverse navbar-fixed-top">
		      <div className="container">
		      	<div className="navbar-header">
		      		<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				      </button>
		        	<a className="navbar-brand left" href="#"><i className="fa fa-music"></i></a>
		        </div>
		        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      				<ul className="nav navbar-nav">
			          <li><Link to="home">Home </Link></li>
			          <li><Link to="products">Products </Link></li>
			          </ul>
		          </div>
		      </div>
		  </div>
		);
	}
});