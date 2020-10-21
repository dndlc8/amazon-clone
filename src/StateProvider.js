import React, { createContext, useContext, useReducer } from "react";

//Prepares the dataLayer
export const StateContext = createContext();

//Wrap our app and provide the dataLayer to every component inside of our app
export const StateProdiver = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pulls information from the dataLayer
export const useStateValue = () => useContext(StateContext);
