import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

//Initial state
const initialState = {
	transactions: [
		{ id: 1, text: "Flower", amount: -20 },
		{ id: 2, text: "Salary", amount: 300 },
		{ id: 3, text: "Book", amount: -10 },
		{ id: 4, text: "Camera", amount: 150 },
	],
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider component- provides state values/actions to components that it's wrapped around
export const GlobalProvider = ({children}) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

  // transactions state can be used by any component through useContext. state is placed in the value of Provider.
	return <GlobalContext.Provider value={{transactions: state.transactions}}>{children}</GlobalContext.Provider>;
};
