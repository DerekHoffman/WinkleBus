import React, { Component } from 'react'

class Magazine extends React.Component {
	constructor(context) {
		super();
	}

	render() {
		return(
			<div className="col-md-6 mags thumblarge">
				<div className="magcontainer" id={this.props.prodID}>

				</div>
			</div>
		);
	}
}

export default Magazine
