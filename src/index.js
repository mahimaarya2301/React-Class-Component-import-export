//Import area

import React,{Component} from 'react'; //DI
import ReactDOM from 'react-dom'; //DI

import A from './components/A';//NI
import './components/global.css';


ReactDOM.render(<A/>,document.getElementById('root'));