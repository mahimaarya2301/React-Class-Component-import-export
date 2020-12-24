//Import area
import {Component} from 'react'; 

import { T } from './T';//Named import

//Create a class component
 class S extends Component{
    //1.Property

    //2.Constructor

    //3.Method
    //Everyclass component must have rendetr method and it always return html
    render(){
        return <strong className="s">Hello S<T/></strong>
    }
}
export default S;//default export