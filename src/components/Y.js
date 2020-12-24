//Import area
import {Component} from 'react'; 

import { Z } from './Z';//Named import
import './z.css';

//Create a class component
 class Y extends Component{ 
    //1.Property

    //2.Constructor

    //3.Method
    //Everyclass component must have rendetr method and it always return html
    render(){
        return <span className="y">Hello Y<Z/></span>
    }
}
export default Y;