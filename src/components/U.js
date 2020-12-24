//Import area
import {Component} from 'react'; 

import { V } from './V';//Named import

//Create a class component
 class U extends Component{ 
    //1.Property

    //2.Constructor

    //3.Method
    //Everyclass component must have rendetr method and it always return html
    render(){
        return <span className="u">Hello U<V/></span>
    }
}
export default U;//default export