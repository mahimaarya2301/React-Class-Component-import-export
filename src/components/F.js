//Import area 
import {Component} from 'react';

import G from './G';

//Create a class component
export class F extends Component { //Named export
    //1.Property

    //2.Constructor

    //3.Method
    //Every class component must have render method and it always return html
    render(){
        return(
            <div className="f">
                <span>Hello Priyanka</span>
                <span>How are you?<G/></span>
            </div>
        );
    }

}