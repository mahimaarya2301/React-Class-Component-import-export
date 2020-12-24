//Import area
import {Component} from 'react';//Named import
 
import { F } from './F';

//Create a class component
class E extends Component{
    //1.Property

    //2.Constructor

    //3.Method
    //Every class component must have render method and it always return html
    render(){
        return <sub className="e">Hello from E class component<F/></sub>;
    }
}
export default E;