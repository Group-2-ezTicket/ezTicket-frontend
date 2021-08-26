import React, {useState} from 'react';
import {Button, Divider, Input} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import "../styles/ReservationDetails.css";
import {getOrderDetailsByTransacId} from '../apis/cinema';


function ReservationDetails() {

    const [transacID, setTransacID] = useState("");
    const [transacDetails, setTransacDetails] = useState();

    function handleInputIDChange(event) {
        setTransacID(event.target.value);
    }

    function handleSearchTransacID() {
        getOrderDetailsByTransacId(transacID).then((response) => {
            setTransacDetails(response.data)
        })
        setTransacID("");
        console.log("transacDetails", transacDetails);
    }

    const cardStatus = transacDetails === undefined ? "" : "show";
    return (
        <div>
            <div className="reservationForm">
                <div>
                    <h2>Please input your Reservation ID</h2>
                    <Input onChange={handleInputIDChange}
                        placeholder="Reservation ID"
                        size="large"
                        value={transacID}/>
                    <Button type="primary"
                        icon={<SearchOutlined/>}
                        size="large"
                        onClick={handleSearchTransacID}>
                        Search
                    </Button>
                </div>
                <div className={
                    `reservationCard${cardStatus}`
                }>
                    <h1>RESERVATION DETAILS</h1>
                    <Divider></Divider>
                </div>
            </div>
        </div>
    );
}

export default ReservationDetails;
