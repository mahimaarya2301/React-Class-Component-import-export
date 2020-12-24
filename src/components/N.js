//Import area
import {Component} from 'react'; 

import O from './O';//Default import

//Create a class component
export class N extends Component{ //Named export
    //1.Property

    //2.Constructor

    //3.Method
    //Everyclass component must have rendetr method and it always return html
    render(){
        return <span className="n">Hello N<O/></span>
    }
}