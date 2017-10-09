import React, { Component } from 'react';
import SocialCard from './social-card';
import { connect } from 'react-redux'

class SocialCardList extends Component {
	render() {
		return (
			<div>
				{this.props.socialCards.map((socialCard, index) => {
					return <SocialCard name={socialCard.name} job={socialCard.job} key={index}/>
				})}
			</div>
		);
	}
}

export default connect((store) => {
	return {
		socialCards: store.socialCards
	}
})(SocialCardList);
