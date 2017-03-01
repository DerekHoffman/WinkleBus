import React, { Component } from 'react'
import Welcome from './components/Welcome'
import Headline from './components/Headline'
import MagazineList from './components/MagazineList'

import './index.css'

class IndexContainer extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<form name='myform' id='myform' action='' method='POST'>
				<input type='hidden' name='offerPK' value='' />
				<input type="hidden" name="webPromotionId" id="webPromotionId" value="" />
				<input type='hidden' name='productID' id='productID' />
				<div className="container-fluid">

					<Welcome />
					<Headline />
					<MagazineList />

				</div>
			</form>
		);
	}
}

export default IndexContainer
// <Selections />
