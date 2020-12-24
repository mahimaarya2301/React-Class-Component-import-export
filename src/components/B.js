import {Component} from 'react';

import  C  from './C';

export class B extends Component{//Named Export
    //1.Property

    //2. Constructor

    //3.Method
    //Every class component must have render method
    render(){
        return <span className="c">How are you?  <C /> </span> ;
    }
}