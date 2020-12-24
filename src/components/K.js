//Import area
import {Component} from 'react'; 
import { L } from './L';//Named import
import './l.css';
//Create a class component
 class K extends Component{ 
    //1.Property

    //2.Constructor

    //3.Method
    //Everyclass component must have rendetr method and it always return html
    render(){
        return <span className="k">Hello K<L/></span>
    }
}
export default K;//Default export