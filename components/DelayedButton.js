import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class DelayedButton extends Component{

	constructor(){
		super()
			this.handleClick = this.handleClick.bind(this)
		}

	handleClick(event){
		event.persist()
		setTimeout(() => {
			this.props.onDelayedClick(event)
		},this.props.delay)
	}

	render(){
		return(
			<button onClick={this.handleClick}>Click me!</button>
			)
	}

	}
