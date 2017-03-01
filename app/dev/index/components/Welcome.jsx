import React, { Component } from 'react'

class Welcome extends React.Component {
	constructor(context) {
		super();
		// let logoURL = "https://static4.mybonuscenter.com/common/ROKT/img/"+this.context.client+"-logo.png";
		// let logoAlt = this.context.client+" Logo";
	}

	render() {
		return(
			<div className="row no-gutters logowrapper">
				<div className="col-xs-12">
					<img src="https://static4.mybonuscenter.com/common/ROKT/img/ticketmaster-logo.png" alt="Ticketmaster Logo"/>
					<h2>As a thank-you for completing the survey...</h2>
				</div>
			</div>
		);
	}
}

// Welcome.contextTypes = {
// 	client: React.PropTypes.string,
// }

export default Welcome
