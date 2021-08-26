import React, { useState } from 'react';
import { Row, Col, Divider, Radio, Card } from 'antd';
import '../styles/Checkout.css';

function CheckoutSummary(props) {
    const { state } = props.location;
    const [radio, setRadio] = useState("Invoice"); 

    function onChange(e){
        setRadio(e.target.value);
        console.log('radio checked', e.target.value);
    }

    const orderSummary = {
        foodList: "",
        totalPrice: state.totalPrice,
        email: "",
        orderStatus: false,
        transactionId: state.transactionId,
    }

    console.log(orderSummary);
    
    return (
        <div>
            <div className="summary">
            <h1 className="title"><b>Reservation Summary</b></h1>
            <Row className="movie-details" gutter={16}>
                <Col span={19} >
                    <h1><u>Movie Details</u></h1>
                    <h2><b>Movie:</b> {state.movie}</h2>
                    <h2><b>Cinema:</b> {state.cinema}</h2>
                    <h2><b>Schedule:</b> {state.time} - {state.date}</h2>
                    <h2><b>Seats:</b> {state.seats}</h2>
                    <h2><b>Price:</b> {state.price}</h2>
                </Col>
                <Col span={5} >
                    <h1><u>Total</u></h1>
                    <br/><br/><br/><br/><br/><br/><br/>
                    <h1 className="money">₱ {state.totalPrice}</h1>
                </Col>
            </Row>
            <Divider />
            <h1><b>Transaction ID: {state.transactionId}</b></h1>
            <Divider />
            <Row className="movie-details" gutter={16}>
                <Col span={16} >
                    <h1 className="title"><b>Payment Method</b></h1>
                    <Radio.Group onChange={onChange} value={radio}>
                        <Radio className="radio" value={"Invoice"}><h2>Invoice</h2></Radio><br/>
                        <Radio className="radio" value={"Direct Debit"}><h2>Direct Debit</h2></Radio><br/>
                        <Radio className="radio" value={"Credit/ Debit Card"}><h2>Credit/ Debit Card</h2></Radio><br/>
                        <Radio className="radio" value={"Paypal"}><h2>Paypal</h2></Radio><br/>
                        <Radio className="radio" value={"Bank Transfer"}><h2>Bank Transfer</h2></Radio><br/>
                    </Radio.Group>
                </Col>
                <Col span={4} >
                    <br/><br/><br/><br/><br/><br/><br/>
                    <Card className="card" style={{ backgroundColor: '#0a9ca1' }}>
                        <h1 className="ghost" >Total Price: ₱ {state.totalPrice}</h1>
                        <button className="button">PAY NOW</button> 
                    </Card>
                </Col>
            </Row>
            </div>
        </div>
    )
}


export default CheckoutSummary;