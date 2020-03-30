
import React from 'react';

import classes from './BackDrop.module.css';

const backdrop = (props) => (

props.show ? <div onClick = {props.remove} className = {classes.BackDrop}></div> : null
)

export default  backdrop;