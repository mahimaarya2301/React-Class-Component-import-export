import {Component} from 'react';

import { D } from './D';//Named import

 function C(){ 
    return <span className="d">Hello from C Functional Component <D /></span>
}
export default C;//Default export