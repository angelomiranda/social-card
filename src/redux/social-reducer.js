const socialReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_CARD':
			return [
				...state,
			  {
					name: action.person.name,
					job: action.person.job
			  }
			];
		case 'DELETE_CARD':
			return [];
		default:
			return state
	}
}

export default socialReducer;