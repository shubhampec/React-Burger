import React, {Component} from 'react';

import Aux from '../../hoc/Aux'
import Button from '../UI/Button/Button'

class OrderSummary extends Component {

    componentDidUpdate(){
        console.log('[OrderSummary] WillUpdate')
    }

    render (){

        const summary = Object.keys(this.props.ingredients).map(igkey =>{
            return <li key = {igkey}><strong>{igkey}</strong> : {this.props.ingredients[igkey]}</li>        
            }
        )
        return (
            <Aux>
            <h3>Your Order</h3>
            <p>Burger with following ingredients:</p>
            <ol>
                {summary}
            </ol>
            <p><strong>Order Price </strong> : {this.props.price}</p>
            <p>Continue to Checkout?</p>
            <Button clicked = {this.props.cancelorder} btnType = 'Danger'>CANCEL</Button>
            <Button clicked = {this.props.continueorder} btnType = 'Success'>CONTINUE</Button>
        </Aux>
        )
    }

}

export default OrderSummary