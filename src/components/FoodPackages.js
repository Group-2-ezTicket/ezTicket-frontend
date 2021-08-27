import { useState } from "react"
import React from 'react';
import '../styles/MovieDetails.css'
import { Checkbox } from 'antd';
function FoodPackages(props) {

    const [totalPrice, setTotalPrice] = useState(props.moviePrice);
    const actualFoodPrice = 200;
    const [foodName, setFoodName] = useState('');

    const onChangeFoodPackage = e => {
        if (e.target.checked === true) {
            setFoodName('Cola & Popcorn');
            setTotalPrice(props.moviePrice + actualFoodPrice);
        } else {

            setTotalPrice(props.moviePrice);
        }
    };
    props.grandTotalPrice(totalPrice);
    props.foodDetails(actualFoodPrice, foodName)
    return (
        <div>
            <hr id='hr-food' />
            <h1 id='food-package-name'><b>Food Bundle Options</b></h1>
            <table id='food-packages'>
                <tbody>
                    <tr>
                        <th colSpan='2'></th>
                    </tr>
                    <tr id='food-package-table'>
                        <td id='td-food-info' >
                            <img alt='poster' id='food-package-product' src="../images/food-1.png" />
                        </td>
                        <td>
                            <div className="counter">
                                <h1><b>Popcorn and Soda</b></h1>
                                <div id="div-price"><span id="span-price">₱ {actualFoodPrice}</span><br /></div>
                                <h2>Do you want to include this?</h2>
                                <b><Checkbox onChange={onChangeFoodPackage} id="cbx-food"><h3><b>Yes</b></h3></Checkbox></b>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table id='food-packages'>
                <tbody>
                    <tr id='food-package-table'>
                        <td id='td-food-info' >
                        </td>
                        <td id='span-price'>
                            TOTAL PRICE: ₱{totalPrice}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FoodPackages;