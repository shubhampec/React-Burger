import React , {Component} from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/BackDrop';
import Aux from '../../../hoc/Aux';


class Modal extends Component{

    shouldComponentUpdate (nextProps,nextState){

        return (nextProps.show !==this.props.show || nextProps.children !== this.props.children)

    }

    componentDidUpdate(){
        console.log('[Modal] WillUpdate')
    }

    render(){

        return(
            <Aux>
            <Backdrop remove = {this.props.removemodal} show = {this.props.show}/>
        <div 
        className = {classes.Modal}
        style = { {
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity : this.props.show ? '1' : '0'}}>
            {this.props.children}
        </div>
    </Aux>
        )
    }

} 


export default Modal;
