import { ADD_CARD } from '../constants';

export const addCard = person => {
	return {
		type: ADD_CARD,
		person
	}
}
