import {Component} from 'react';

import { B } from './B';

import './a.css';

//Lets create a class component
class A extends Component{
    //1.Property

    //2.Constructor

    //3.Method
    //Every class component must have render method
    render(){
        return <h1 className="a">Hello <span className="b">Mahima</span> <B /> </h1>
    }
}
export default A;