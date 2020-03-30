import React from 'react';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import Logo from '../Logo/Logo';
import classes from './SideDrawer.module.css';
import BackDrop from '../UI/Backdrop/BackDrop';
import Aux from '../../hoc/Aux'

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer,classes.Close]
    if(props.open){
        attachedClasses = [classes.SideDrawer,classes.Open]
    }
return (

<Aux>
    <BackDrop show  = {props.show} remove= {props.handle}/>
    <div className = {attachedClasses.join(' ')}>
        <div className = {classes.Logo}>
            <Logo />
        </div>
        <nav>
            <NavigationItems />
        </nav>
    </div>
</Aux>

);
}

export default sideDrawer;