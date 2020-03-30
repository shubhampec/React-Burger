import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';

class layout extends Component{
    state = {
        showSideDrawer : false
    }

    sideDrawerHandler = () => {
        this.setState({showSideDrawer : false})
    }

    toggleSideDrawerHandler = () => {
        this.setState((prevstate) => {
            return{showSideDrawer: !prevstate.showSideDrawer};
        })
    }
render(){
   
    return(
<Aux>
    <Toolbar toggleSideDrawer = {this.toggleSideDrawerHandler}/>
    <SideDrawer open = {this.state.showSideDrawer} show = {this.state.showSideDrawer} handle = {this.sideDrawerHandler}/>
    <main className={classes.Content}>{this.props.children}</main>
</Aux>
);
}
}

export default layout;