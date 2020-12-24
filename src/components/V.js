//Import area
import {Component} from 'react'; 

import W from './W';//Default import

//Create a class component
export class V extends Component{ //Named export
    //1.Property

    //2.Constructor

    //3.Method
    //Everyclass component must have rendetr method and it always return html
    render(){
        return <span className="v">Hello V<W/></span>
    }
}