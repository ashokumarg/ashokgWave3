var React=require('react');
var InboxBoxList = require('./InboxBoxList');
var InboxBox = React.createClass({
  getInitialState: function(){
     return{AllData:[]}
  },

loadData: function(){
      $.ajax({
  //url:"http://localhost:8080/message/findAll",
  url:"http://localhost:8080/data/emaildata.json",
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
},
 componentWillMount() {
    this.loadData();
   },
  render: function() {

    return (
      <div className="message">
        <InboxBoxList dataBox = {this.state.AllData}/>
      </div>
    );
  }
});

module.exports=InboxBox;