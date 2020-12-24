//Import area
import {Component} from 'react';

import { J } from './J';

//Create a class component
class I extends Component{
    //1.Property

    //2.Constructor

    //3.Method
    //Every class component must have render method and it always return html
    render(){
        return(
            <div className="i">
                <span>Hello</span>
                <span>I<J/></span>
            </div>
        );
    }
}
export default I;//Default export