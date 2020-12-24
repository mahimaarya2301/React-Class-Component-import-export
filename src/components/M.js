//Import area
import {Component} from 'react'; 
import { N } from './N';//Named import
import './n.css';
//Create a class component
 class M extends Component{
    //1.Property

    //2.Constructor

    //3.Method
    //Everyclass component must have rendetr method and it always return html
    render(){
        return <sub className="m">Hello M<N/></sub>
    }
}
export default M;//Default export