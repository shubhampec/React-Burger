import React from 'react';
import classes from './BuildControl.module.css';


const buildControl = (props)=>{
    let lessbutton ;
if (props.ingredientLength > 0){
    lessbutton = <button className={classes.Less} onClick = {props.removed}>less</button>
}
else{
    lessbutton  = <button className={classes.Less} onClick = {props.removed} disabled>less</button>

}
return(
    <div className={classes.BuildControl}> 
        <div className={classes.Label}>{props.type}</div>      
            {lessbutton }   
        <button className={classes.More} onClick = {props.added}>More</button>
        
    </div>

)
}

export default buildControl;