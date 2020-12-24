//Import area
import {Component} from 'react'; 

import S from './S';//Default import
import './s.css';

//Create a class component
export class R extends Component{ //Named export
    //1.Property

    //2.Constructor

    //3.Method
    //Everyclass component must have rendetr method and it always return html
    render(){
        return <span className="r">Hello R<S/></span>
    }
}