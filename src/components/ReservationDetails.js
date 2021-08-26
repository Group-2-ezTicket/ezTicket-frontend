import React, {useState} from 'react';
import {Button, Divider, Input} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import "../styles/ReservationDetails.css";
import {getOrderDetailsByTransacId} from '../apis/cinema';
import {Row, Col} from 'antd';



function ReservationDetails() {

    const [transacID, setTransacID] = useState("");
    const [transacDetails, setTransacDetails] = useState();
    var transaction;
    if (transacDetails) {
        transaction = <div className="reservationCard"
            style={
                {
                    display: transacDetails !== undefined ? "block" : "none"
                }
        }>
            <h1>RESERVATION DETAILS</h1>
            <Divider/>
            <Row className="movie-details"
                gutter={16}>
                <Col span={19}>
                    <h1>
                        <u>Movie Details:</u>
                    </h1>
                    <h2>
                        <b>Movie: {transacDetails.movieName}</b>
                    </h2>
                    <h2>
                        <b>Cinema: {transacDetails.cinemaName}</b>
                    </h2>
                    <h2>
                        <b>Schedule: {transacDetails.schedule}</b>
                    </h2>
                    <h2>
                        <b>Food Order: {transacDetails.foodOrder}</b>
                    </h2>
                </Col>
                <Col span={5}>
                    <h1>
                        <u>Total</u>
                    </h1>
                    <br/><br/><br/><br/><br/><br/><br/>
                    <h1 className="money">₱ {transacDetails.totalPrice}
                    </h1>
                </Col>
            </Row>
        </div>
    }

    // useEffect (() => {
    //     getOrderDetailsByTransacId(transacID).then((response) => {
    //         dispatch(AddOrders(response.data))
    //     })
    //     }, [transacID, dispatch])

    function onInputChange(event) {
        setTransacID(event.target.value)
    }

    function onClickSearch() {
        if (transacID) {
            getOrderDetailsByTransacId(transacID).then((response) => {
                setTransacDetails(response.data)
            })
        }
    }
    console.log("transacDetailsSaLABAS", transacDetails);
    return (
        <div>
            <div className="reservationForm">
                <div>
                    <h2>Please input your Reservation ID</h2>
                    <Input onChange={onInputChange}
                        placeholder="Reservation ID"
                        size="large"
                        value={transacID}/>
                    <Button type="primary"
                        icon={<SearchOutlined/>}
                        size="large"
                        onClick={onClickSearch}>
                        Search
                    </Button>
                </div>
                {transaction}
            </div>
        </div>
    );
}

export default ReservationDetails;
