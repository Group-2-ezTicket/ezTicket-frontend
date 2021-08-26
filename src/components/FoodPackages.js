import { useState } from "react"
import React from 'react';
import '../styles/MovieDetails.css'
import { Checkbox } from 'antd';
function FoodPackages(props) {
   
    const [totalPrice, setTotalPrice] = useState(props.moviePrice);
    const actualFoodPrice= 200;
    
    const onChangeFoodPackage = e => {
        if (e.target.checked === true){
            setTotalPrice(props.moviePrice + actualFoodPrice);
        }else {
            setTotalPrice(props.moviePrice);
        }       
      };
      props.grandTotalPrice(totalPrice); 
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
                            <div id="div-price"><span id="span-price">PRICE: ₱{actualFoodPrice}</span><br /></div>
                            <h2>Do you want to include food?</h2>
                            <b><Checkbox onChange={onChangeFoodPackage} id="cbx-food">Yes</Checkbox></b>
                        </div>
                    </td>
                </tr>
            </table>
            <table id='food-packages'>
                <tr id='food-package-table'>
                    <td id='td-food-info' >
                    </td>
                    <td id='span-price'>
                        TOTAL PRICE: ₱{totalPrice}
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default FoodPackages;