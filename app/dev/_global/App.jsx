import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, IndexLink } from 'react-router'

import '../../../bower_components/bootstrap/dist/css/bootstrap.min.css'
import './common.css'

import IndexContainer from '../index/Index'

class App extends React.Component {
	constructor() {
		super();
	}

	// getChildContext() {
	// 		return {
	// 			client: clientname
	// 		}
	// }

	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={ IndexContainer } >

				</Route>
			</Router>
		)
	}
}

// Define types for all contexts here.
// App.childContextTypes = {
// 	client: React.PropTypes.string,
// };

ReactDOM.render(<App />, document.getElementById('root'))

// <Route path='/delivery' component={ DeliveryContainer } />
// <Route path='/billing' component={ BillingContainer } />
// <Route path='/confirm' component={ ConfirmContainer } />
