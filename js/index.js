
$ = jQuery = require('jquery');

require('../less/less.min.js'); //require less.js
require('../css/main.css'); //require css file


var React           = require('react');
var Router          = require('react-router');
var Route           = Router.Route;
var Routes          = Router.Routes;
var Redirect        = Router.Redirect;
var DefaultRoute    = Router.DefaultRoute;
var NotFoundRoute   = Router.NotFoundRoute;

var App             = require('./app');
var Home            = require('./home');

var routes = 
  (
    <Route name="app" path="/" handler={App}>
      <Route name="home" path="/home" handler={Home} />
      <DefaultRoute handler={Home} />
    </Route>
  );

Router.run(routes, function (Handler, state) {
  React.render(<Handler params={state.params}/>, document.body);
});