var React=require('react');
var InboxBoxList = require('./InboxBoxList');
var SentBox = React.createClass({
  getInitialState: function(){
     return{AllData:[]}
  },
  render: function() {
    $.ajax({
  url:"http://localhost:8080/message/findAll",
  type:'GET',
  datatype:"JSON",
  success: function(data)
  {
    console.log(data);
    this.setState({AllData:data});

  }.bind(this),
  error: function(err)
  {
    console.log(err);
  }.bind(this)
});
    return (
      <div className="message">
        <InboxBoxList dataBox = {this.state.AllData}/>
      </div>
    );
  }
});

module.exports=SentBox