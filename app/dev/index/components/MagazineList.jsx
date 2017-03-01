import React, { Component } from 'react'
import Magazine from './_Magazine'

class MagazineList extends React.Component {
	constructor(context) {
		super();
	}

	render() {
		// const MAGS = require('dummy.json');

		return(
			<div className="row magList">
				{MAGS.map(function(name, index) {
					return <Magazine prodID={name.productID} />
				})}
				<Magazine />
			</div>
		);
	}
}

export default MagazineList
