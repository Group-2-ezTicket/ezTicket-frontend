
import { useState } from "react"
import React from 'react';
import '../styles/MovieDetails.css'
function FoodPackages() {
    const [number, setNumber] = useState(0);
    function increase() {
        setNumber(number + 1);
    }

    function decrease() {
        setNumber(number - 1);
    }

    return (
        <div>
            <hr id='hr-food' />
            <h1>Food Bundle Options</h1>
            <table id='food-packages'>
                <tr>
                    <th colSpan='2'><h2 id='food-package-name'>Popcorn and Soda</h2></th>
                </tr>
                <tr id='food-package-table'>
                    <td id='td-food-info' >
                        <img alt='poster' id='food-package-product' src="../images/food-1.png" />
                    </td>
                    <td>
                        <div className="counter">
                            <div id="div-price"><span id="span-price">PRICE: ₱200</span><br /></div>
                            <button id="button-quantity" onClick={increase}>+</button>
                            <span id="number-quantity">{number}</span>
                            <button id="button-quantity" onClick={decrease}>-</button>
                        </div>
                    </td>
                </tr>
            </table>
            <table id='food-packages'>
                <tr id='food-package-table'>
                    <td id='td-food-info' >
                    </td>
                    <td id='span-price'>
                        TOTAL PRICE: ₱200
                    </td>
                </tr>
            </table>
            <button className="button-checkout">Checkout</button>
        </div>
    )
}

export default FoodPackages;