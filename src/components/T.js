//Import area
import {Component} from 'react'; 

import U from './U';//Default import

//Create a class component
export class T extends Component{ //Named export
    //1.Property

    //2.Constructor

    //3.Method
    //Everyclass component must have rendetr method and it always return html
    render(){
        return <span className="t">Hello T<U/></span>
    }
}