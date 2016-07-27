var React = require('react');
var Mail = require('./Mail');
var InboxBoxMail = React.createClass({
  render: function() {
    var mailNodes = this.props.dataBox.map(function(mail) {
       return (
         <Mail allMails={mail} key={mail.mailId}>
         </Mail>
        );
      });

       return(
      <div className="inboxList">
        {mailNodes}
      </div>
    );

  }
});

module.exports = InboxBoxMail;