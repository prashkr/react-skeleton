import React from 'react'
import { render } from 'react-dom'
import Button from './components/Button'
import Header from './components/Header'

var App = React.createClass({
	getInitialState: function () {
		return {
			data = []
		};
	},
	
	render: function() {
		return (
			<div>
				<Button />
			</div>
		);
	}
});

render(<App />, document.getElementById('app'));