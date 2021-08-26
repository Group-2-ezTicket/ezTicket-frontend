import React, { useState } from 'react';
import {Row, Col, Card} from 'antd';
import '../styles/SeatList.css';

function SeatList() {
    const [chose, setChose ] = useState("");
    const [count, setCount ] = useState(0)
    function handleToggle () {
        setChose("done");
        setCount(count + 1);
    }
    return (
        <div className="seatList">
            <Row>
                <Col span={24} className="screen"><h3 className="movie-text">MOVIE SCREEN</h3></Col>
            </Row>
            <br/>
            <Row gutter={[8, 8]}>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }} className={` ${chose}`} onClick={handleToggle}>A1</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>A2</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>A3</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>A4</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>A5</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>A6</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>A7</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>A8</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>A9</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>A10</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>A11</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>A12</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>B1</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>B2</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>B3</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>B4</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>B5</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>B6</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>B7</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>B8</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>B9</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>B10</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>B11</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>B12</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>C1</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>C2</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>C3</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>C4</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>C5</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>C6</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>C7</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>C8</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>C9</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>C10</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>C11</Card></Col>
                <Col span={2}><Card hoverable={true} style={{ width: 100 }}>C12</Card></Col>
            </Row>
        </div>
    );
}

export default SeatList;
