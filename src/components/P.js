//Import area
import {Component} from 'react'; 

import Q from './Q';//Default import

//Create a class component
export class P extends Component{ //Named export
    //1.Property

    //2.Constructor

    //3.Method
    //Everyclass component must have rendetr method and it always return html
    render(){
        return <span className="p">Hello P<Q/></span>
    }
}