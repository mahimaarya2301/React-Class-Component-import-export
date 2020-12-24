//Import area
import {Component} from 'react'; 

import { R } from './R';//Named import

//Create a class component
 class Q extends Component{ 
    //1.Property

    //2.Constructor

    //3.Method
    //Everyclass component must have rendetr method and it always return html
    render(){
        return <span className="q">Hello Q<R/></span>
    }
}
export default Q;