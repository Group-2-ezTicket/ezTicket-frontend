import React from 'react';
import '../styles/MovieDetails.css'
import { Menu, Dropdown, Button, message, Space,Rate, DatePicker } from 'antd';
import { DownOutlined} from '@ant-design/icons';

function MovieView() {

    function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">
                SM North - Cinema 1
            </Menu.Item>
            <Menu.Item key="2">
                SM North - Cinema 2
            </Menu.Item>
            <Menu.Item key="3">
                SM North - Cinema 3
            </Menu.Item>
        </Menu>
    );

    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    return (
        <div>
            <table id="movie-details">
                <tr>
                    <td id="movie-poster-table"><img id="movie-poster" alt="poster" src="https://pbs.twimg.com/media/E4LSNucVEAY-lI2.jpg" /></td>
                    <td id="movie-description">
                        <b id="movie-pg">PG-13</b>
                        <h1 id="movie-title">Venom: Let There Be Carnage</h1>
                        <b id="movie-duration">2 HR 30 MINS</b><br />
                        <Rate defaultValue={4}></Rate>
                        <p id="movie-synopsis">Tom Hardy returns to the big screen as the lethal protector Venom, one of MARVEL's greatest and most complex characters. Directed by Andy Serkis, the film also stars Michelle Williams, Naomie Harris and Woody Harrelson, in the role of the villain Cletus Kasady/Carnage.</p>
                    </td>
                </tr>
                <tr>
                    <td id="movie-theatre-dropdown" colSpan="2">
                        <hr />
                        <Dropdown overlay={menu} className="movie-theatre-dropdown-button">
                            <Button>
                                Select Theatre <DownOutlined />
                            </Button>
                        </Dropdown>
                    </td>
                </tr>
            </table>
            <div id="seat-and-schedule">
                <h1>Seat and Schedule</h1>
                <Space direction="vertical">
                    <DatePicker onChange={onChange} />
                </Space>
                <div className="time-schedules">
                    <Button>9:00 AM - 11:00 AM</Button>
                    <Button>1:00 PM - 3:00 PM</Button>
                    <Button>9:00 AM - 11:00 AM</Button>
                    <Button>1:00 PM - 3:00 PM</Button>
                </div>
            </div>
        </div >
    );
}

export default MovieView;
