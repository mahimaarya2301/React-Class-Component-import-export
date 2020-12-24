//Import area
import {Component} from 'react';

import K from './K';
import './k.css';
//Create a class component
export class J extends Component{ //Named export
    //1.Property

    //2.Constructor

    //3.Method
    //Every class component must have render method and it always return html
    render(){
        return(
            <div className="j">
                <span>Hello</span>
                <span>J<K/></span>
            </div>
        );
    }
}
