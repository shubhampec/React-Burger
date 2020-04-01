import React,{ Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGREDIENT_PRICES={
    salad:0.5,
    meat:0.2,
    bacon:3,
    cheese:4

}
class BurgerBuilder extends Component{

    state={
        ingredient:{
            salad:0,
            cheese:0,
            bacon:0,
            meat:0
        },
        totalPrice:2,
        order : false,
        loading : false
    }

    removeIngredientHandler=(type)=>{
        const oldCount = this.state.ingredient[type];
        const updatedCount=oldCount-1;
        const updatedIngredient={
            ...this.state.ingredient
        };
        updatedIngredient[type]=updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENT_PRICES[type];
        this.setState({totalPrice : newPrice , ingredient : updatedIngredient})
    };

    addIngredientHandler=(type)=>{
        const oldCount = this.state.ingredient[type];
        const updatedCount=oldCount+1;
        const updatedIngredient={
            ...this.state.ingredient
        };
        updatedIngredient[type]=updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICES[type];
        this.setState({totalPrice : newPrice , ingredient : updatedIngredient})
    };

    showmodal = () => {        
      this.setState({order : true})
    }

    removemodalhandler = () => {
        this.setState({order : false})
    }

    cancelorderhandler = () =>{
        this.setState({order : false})
    }
    
    continueorderhandler = () =>{
        //alert ('please continue');
        this.setState({loading:true});
        const order = {
            ingredients : this.state.ingredient,
            price : this.state.totalPrice,
            customer : {
                name : 'Max',
                address : {
                    street : 'TestStreet',
                    zipcode:'431',
                    country : 'India'
                },
                email : 'test@email.com'
            },
            deleiverymethod : 'fastest'
        }
        axios.post('/orders.json',order)
        .then(response => {
            console.log(response)
            this.setState({loading:false})
        })
        .catch(error => {
            console.log(error)
            this.setState({loading:false})
        });
    }
render(){
    let orderSummary = <OrderSummary price = {this.state.totalPrice} continueorder = {this.continueorderhandler} cancelorder = {this.cancelorderhandler} ingredients={this.state.ingredient}></OrderSummary>
            
    if(this.state.loading){
        orderSummary = <Spinner />
    }
          
    return(
        <Aux>
           <Modal removemodal = {this.removemodalhandler} show = {this.state.order}>
           {orderSummary}
                </Modal>
            <Burger ingredients={this.state.ingredient}/>
        <BuildControls showsummary = {this.showmodal} ingredients={this.state.ingredient} addIngredient = {this.addIngredientHandler} removeIngredient = {this.removeIngredientHandler} price = {this.state.totalPrice}/>
        </Aux>
    );
}

}
export default BurgerBuilder;