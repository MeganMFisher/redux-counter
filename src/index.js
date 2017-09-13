import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from 'react-redux'; //we only use redux in the store everywhere else is react-redux.
import store from './store';

ReactDOM.render(
	<Provider store={store}> 
		<App />
	</Provider>
	, document.getElementById( 'root' )
);

//Provider needs the store so that it can watch the store and know when it changed. 