//application state change in response to certain actions to our store or context
//reducer-allows you to change your state and send it down to your application

export default (state, action) => {
	switch (action.type) {
		case "DELETE_TRANSACTION":
			return {
				...state,
				transactions: state.transactions.filter(
					(transaction) => transaction.id !== action.payload
				),
			};
		default:
			return state;
	}
};
