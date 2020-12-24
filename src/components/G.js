//Import area
import {Component} from 'react';
import { H } from './H';
//Create a class component
class G extends Component{
    //1.Property

    //2.Constructor

    //3.Method
    //Everyclass component must have rendetr method and it always return html
    render(){
        return <h1 className="g">Hello G<H/></h1>
    }
}
export default G;//Default export