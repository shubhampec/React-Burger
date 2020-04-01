import React , {Component} from 'react';
import classes from './Input.module.css';

const input=(props)=>{
let InputElement=null;
switch(props.inputTye){
      
case('input'):
InputElement=<input className={classes.Input} {...props}/>
break;
case('textarea'):
InputElement=<textarea {...props}/>
break;
default:
InputElement=<input className={classes.InputElement} {...props}/>
}
    return(
        <div className={classes.Input}> 
            <label className={classes.Label}>{props.label}</label>
            {InputElement}
        </div>
    );
}

export default input;