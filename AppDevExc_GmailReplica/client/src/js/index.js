var React=require('react');
var ReactDom=require('react-dom');

var {browserHistory, Router, Route, IndexRoute}=require('react-router');

var NavBar=require('./Components/NavBar');
var Home=require('./Components/Home');
var InboxBox=require('./Components/InboxBox');
var SentBox=require('./Components/SentBox');

var MainComponent = React.createClass({
  render:function() {
        return (
        <div className="MainComponent">
        <NavBar />
        <br/>
        {this.props.children}
        </div>
      );
    }
  });
ReactDom.render (
  <Router history = {browserHistory}>
    <Route path='/' component={MainComponent}>
      <IndexRoute component={Home}/>
      <Route path='InboxBox' component={InboxBox}/>
      <Route path='SentBox' component={SentBox}/>
    </Route>
  </Router>,  document.getElementById('app')
);
