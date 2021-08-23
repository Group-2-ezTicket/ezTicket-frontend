import React from 'react';
import {Layout, Menu} from 'antd';
import '../styles/MenuHeader.css'
import CinemaFilterForm from './CinemaFilterForm';
const {Header} = Layout;

function MenuHeader(props) {
    return (
        <div>
            <Layout className="layout">
                <Header>
                    <span className="logo">EZTicket</span>
                    <CinemaFilterForm updateCinemaName={props.updateCinemaName}></CinemaFilterForm>
                    <div className="menuHeader">
                        <Menu theme="dark" mode="horizontal"
                            defaultSelectedKeys={
                                ['2']
                        }>
                            <Menu.Item key={1}>MOVIES</Menu.Item>
                            <Menu.Item key={2}>FOOD OPTIONS</Menu.Item>
                        </Menu>
                    </div>
                </Header>
            </Layout>
        </div>
    );
}

export default MenuHeader;
