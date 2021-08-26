import React, { useEffect, useState } from 'react'
import { Row, Col, Card } from 'antd';
import '../styles/SeatList.css';
import { getSeatsByScheduleId } from '../apis/cinema'
import { useDispatch } from "react-redux"

function SeatList(props) {
    const [seats, setSeats] = useState();
    const dispatch = useDispatch()
    useEffect(() => {
        getSeatsByScheduleId(props.currentScheduleId).then((response) => {
            setSeats(response.data);
        });
    }, [dispatch, props.currentScheduleId]);
    
    if (seats) {
        return (
            <div className="seatList">
                <Row gutter={[8, 8]}>{
                    seats.map((seat) => (
                        <Col span={2} key={seat.seatId}><Card  style={{ width: 100 }}>{seat.seatCode}</Card></Col>
                    ))
                }

                </Row>
            </div>
        );
    }
    return (
        <div>Loading...</div>
    )
}

export default SeatList;
