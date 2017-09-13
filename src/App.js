import React, { Component } from "react";
import "./App.css";

import { connect } from 'react-redux';
import { increment, decrement } from './ducks/counter'


export class App extends Component {
	render() {

		//increment //Just a function, not connected. Goes to import on line 5. Nobody is listening.
		//this.props.increment //Just a function, is connected. Wrapped in listener and connected one is on props and is wrapped and listened to and Redux will pay attention. 

		var { counter, increment, decrement } = this.props; //same as: let counter = this.props.counter. This pattern is better for getting variable off props. If you forget to use this.props you are pulling the original imported action creators that are not connected up at the top. 

		return (
			<div className="app">
				<section className="counter">
					<h1 className="counter__current-value">{ counter }</h1>
					<div className="counter__button-wrapper">
						<button
							className="counter__button increment-one"
							onClick={ () => increment(1) }
						>
							+1
						</button>
						<button
							className="counter__button increment-five"
							onClick={ () => increment(5) }
						>
							+5
						</button>
						<button
							className="counter__button decrement-one"
							onClick={ () => decrement(1) }
						>
							-1
						</button>
						<button
							className="counter__button decrement-five"
							onClick={ () => decrement(5) }
						>
							-5
						</button>
						<br />
						<button
							className="counter__button undo"
							disabled={ true }
							onClick={ () => null }
						>
							Undo
						</button>
						<button
							className="counter__button redo"
							disabled={ true }
							onClick={ () => null }
						>
							Redo
						</button>
					</div>
				</section>
				<section className="state">
					<pre>
						{ JSON.stringify( this.props, null, 2 ) }
					</pre>
				</section>
			</div>
		);
	}
}

function mapStateToProps(state) { //takes in the application state(store) as it's parameter.
	//can pick off properties for this one we will return all of state.
	return state //Returned object will merge with props.
}

let actionOutputs = {
	increment, //increment: increment  //decrement: decrement
	decrement
}

let connected = connect(mapStateToProps, actionOutputs) //function first parameter. Object second parameter.

export default connected(App);

//export default connect(mapStateToProps, actionOutputs)(App); Personal preference sometimes you need one sometimes you need the other. They both get the job done. 