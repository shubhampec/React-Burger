import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls=[
{lable:'Salad',type:'salad'},
{lable:'Cheese',type:'cheese'},
{lable:'Meat',type:'meat'},
{lable:'Bacon',type:'bacon'},
];
const buildControls = (props)=>{
let disable= false;
if(props.price === 2){
    disable = true;
}

    return(
   <div className={classes.BuildControls}>

<p>Total Price :{props.price.toFixed(2)} </p>
    {controls.map(ctrl=>(
    <BuildControl 
    key={ctrl.lable} 
    type={ctrl.lable} 
    ingredientLength = {props.ingredients[ctrl.type]}
    added = {() => props.addIngredient(ctrl.type)} 
    removed = {() => props.removeIngredient(ctrl.type)}
    />
    ))}
    <button onClick = {props.showsummary} className = {classes.OrderButton} disabled ={disable}>ORDER NOW</button>
    </div>
    )
    }

export default buildControls;