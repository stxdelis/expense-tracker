import React from "react";

export const AddTransaction = () => {
	return (
		<>
			<h3>Add new Transaction</h3>
			<form>
				<div className="form-control">
					<label htmlFor="text">Text</label>
					<input type="text" placeholder="Enter text..." />
				</div>
				<div className="form-control">
					<label htmlFor="text">
						Amount <br />
						(negative - expense, positive - income)
					</label>
					<input type="number" placeholder="Enter amount..." />
				</div>
				<button className="btn">Add transaction</button>
			</form>
		</>
	);
};
