import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './HelloWorldApp';
import Timer from './TimerApp';
import TodoApp from './TodoApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<div> 
		<HelloWorld name="Ritesh"/>
		<Timer/>
		<TodoApp/>
	</div>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
