import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addCard } from '../redux/actionCreators'

class socialForm extends Component {
	onSubmit(e) {
		e.preventDefault();
		const target = e.target;
		const fname = target.querySelector('#fname');
		const job = target.querySelector('#job');

		const person = {
			name: fname.value,
			job: job.value
		};

		this.props.dispatch(addCard(person));

		e.target.reset();
	}

	render() {
		return (
			<div>
			<br />
				<form action="" onSubmit={this.onSubmit.bind(this)}>
					<input type="text" id="fname" name="fname" placeholder="First name"/> <br />
					<input type="text" id="job" name="job" placeholder="Job"/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
}

export default connect()(socialForm);