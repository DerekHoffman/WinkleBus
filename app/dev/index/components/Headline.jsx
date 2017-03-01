import React, { Component } from 'react'

class Headline extends React.Component {
	constructor() {
		super();
	}

	render() {
		return(
			<div className="row no-gutters text-center headline">
				<div className="col-xs-12">
					<div className="row headline-gradient">
						<div className="col-xs-12">
							<img src="https://static4.mybonuscenter.com/common/ROKT/img/gradientBG.png" alt="You're Entitled to Claim a $100 Reward Value!"/>
							<h1 className="entitleheader">You're Entitled<br className="mobbreak"/> to<br className="deskbreak"/> Claim a $100<br className="mobbreak"/> Reward Value!</h1>
						</div>
					</div>
					<h2 className="subheadline-white">Select up to 4 of your favorite magazines<br className="mobbreak"/> from MagazineOutlet - a $100 Value.</h2>
        	<h3 className="subheadline-blue">Just $2 covers the rate for the<br className="mobbreak"/> first year* with auto renewal benefits. Enjoy!</h3>
				</div>
			</div>
		);
	}
}

export default Headline
