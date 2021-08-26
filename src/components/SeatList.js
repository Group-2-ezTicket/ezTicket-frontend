import React from 'react';
import {Row, Col, Card} from 'antd';
import '../styles/SeatList.css';

function SeatList() {
    return (
        <div className="seatList">
            <Row gutter={[8, 8]}>
                <Col span={2}><Card style={{ width: 100 }}>A1</Card></Col>
                <Col span={2}><Card style={{ width: 100 }}>A2</Card></Col>
                <Col span={2}><Card style={{ width: 100 }}>A3</Card></Col>
                <Col span={2}><Card style={{ width: 100 }}>A4</Card></Col>
                <Col span={2}><Card style={{ width: 100 }}>A5</Card></Col>
                <Col span={2}><Card style={{ width: 100 }}>A6</Card></Col>
                <Col span={2}><Card style={{ width: 100 }}>A7</Card></Col>
                <Col span={2}><Card style={{ width: 100 }}>A8</Card></Col>
                <Col span={2}><Card style={{ width: 100 }}>A9</Card></Col>
                <Col span={2}><Card style={{ width: 100 }}>A10</Card></Col>
                <Col span={2}><Card style={{ width: 100 }}>A11</Card></Col>
                <Col span={2}><Card style={{ width: 100 }}>A12</Card></Col>
                <Col span={2}><Card style={{ width: 100 }}>B1</Card></Col>
                <Col span={2}><Card style={{ width: 100 }}>B2</Card></Col>
                <Col span={2}><Card style={{ width: 100 }}>B3</Card></Col>
                <Col span={2}><Card style={{ width: 100 }}>B4</Card></Col>
                <Col span={2}><Card style={{ width: 100 }}>B5</Card></Col>
                <Col span={2}><Card style={{ width: 100 }}>B6</Card></Col>
                <Col span={2}><Card style={{ width: 100 }}>B7</Card></Col>
                <Col span={2}><Card style={{ width: 100 }}>B8</Card></Col>
                <Col span={2}><Card style={{ width: 100 }}>B9</Card></Col>
                <Col span={2}><Card style={{ width: 100 }}>B10</Card></Col>
                <Col span={2}><Card style={{ width: 100 }}>B11</Card></Col>
                <Col span={2}><Card style={{ width: 100 }}>B12</Card></Col>
            </Row>
        </div>
    );
}

export default SeatList;
