var React = require('react');
var Mail = React.createClass({
    render: function() {
    return (
      <div className="mail">
      <div className="row">
      <div className="col-md-12">
      <div className="col-md-3">
            <a id="modal-486494" href="#modal-container-486494" role="button" className="btn" data-toggle="modal"> {this.props.allMails.mailId}</a>
			
			<div className="modal fade" id="modal-container-486494" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							 
							
							<h4 className="modal-title" id="myModalLabel">
								My Modal
							</h4>
						</div>
						<div className="modal-body">
							<h1>This is my personal details</h1>
						</div>
						<div className="modal-footer">							 
							
							<button type="button" className="btn btn-primary">
								Add
							</button>
							<button type="button" className="btn btn-default" data-dismiss="modal">
								Close
							</button> 
						</div>
					</div>
					
				</div>
				
			</div>

</div>
<div className="col-md-3">
{this.props.allMails.subject}
</div>
<div className="col-md-3">
{this.props.allMails.date}
</div>
<div className="col-md-3">
<button type="button" className="btn btn-primary">Add</button>
</div>

	</div>
	</div>
                        

      </div>
    );
  }
});
module.exports = Mail;