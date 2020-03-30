import React from 'react';

import Burgerlogo from '../../assets/Images/burger.png';

import classes from './Logo.module.css'

const logo = (props) => (

    <div className = {classes.Logo}>
        <img src = {Burgerlogo} alt = "MyBurger" />
    </div>

)

export default logo;