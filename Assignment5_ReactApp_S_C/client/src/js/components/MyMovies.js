var React = require('react');

var MyMovies = React.createClass({

  render: function() {
    return (
      <div className="myMovies"><center>
         <input type="submit" className="btn btn-danger" value="View My Movies List"/>
         </center>
      </div>
    );
  }
});
module.exports = MyMovies;
