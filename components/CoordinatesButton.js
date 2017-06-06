import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class CoordinatesButton extends Component{

	constructor(props){
		super(props)
			this.handleClick = this.handleClick.bind(this)
		}

	handleClick(event){
		return this.props.onReceiveCoordinates([event.clientX, event.clientY])
	}

	render(){
		return(
			<button onClick={this.handleClick}>Click me!</button>
			)
	}

	}

