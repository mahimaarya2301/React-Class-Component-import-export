//Import area
import {Component} from 'react'; 

import Y from './Y';//Default import

//Create a class component
export class X extends Component{ //Named export
    //1.Property

    //2.Constructor

    //3.Method
    //Everyclass component must have rendetr method and it always return html
    render(){
        return <sub className="x">Hello X<Y/></sub>
    }
}