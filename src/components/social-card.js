import React, { Component } from 'react';
import placeholder from '../placeholder.svg';

class SocialCard extends Component {
	render() {
		return (
			<div className="social-card">
				<div className="social-card-block">
					<img src={placeholder} alt="Social Card"/>
					<div className="social-card-info">
						<span>Name: </span>
						<span>{this.props.name}</span>
					</div>
					<div className="social-card-info">
						<span>Job: </span>
						<span>{this.props.job}</span>
					</div>
				</div>
			</div>
		);
	}
}

export default SocialCard;
