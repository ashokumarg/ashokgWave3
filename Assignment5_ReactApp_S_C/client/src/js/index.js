var React = require('react');
var ReactDOM = require('react-dom');
var MovieBox = require('./components/MovieBox');
var MyMovies = require('./components/MyMovies');
ReactDOM.render(<MyMovies />, document.getElementById('content'));
ReactDOM.render(<MovieBox />, document.getElementById('app'));
