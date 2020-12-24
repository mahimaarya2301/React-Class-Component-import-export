//Import area
import {Component} from 'react'; 

import { X } from './X';//Named import

//Create a class component
 class W extends Component{ 
    //1.Property

    //2.Constructor

    //3.Method
    //Everyclass component must have rendetr method and it always return html
    render(){
        return <span className="w">Hello W<X/></span>
    }
}
export default W;//default export