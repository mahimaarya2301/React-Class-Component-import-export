//Import area
import {Component} from 'react'; 

import { P } from './P';//Named import

//Create a class component
 class O extends Component{ 
    //1.Property

    //2.Constructor

    //3.Method
    //Everyclass component must have rendetr method and it always return html
    render(){
        return <span className="o">Hello O <P/></span>
    }
}
export default O;//default export