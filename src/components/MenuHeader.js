import React from 'react';
import { Layout, Menu } from 'antd';
import '../styles/MenuHeader.css'
import CinemaFilterForm from './CinemaFilterForm';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieView from './MovieView'
import MovieList from './MovieList';

const { Header } = Layout;

function MenuHeader(props) {
    return (
        <Router>
            <div>
                <Layout className="layout">
                    <Header>
                        <span className="logo">EZTicket</span>
                        <CinemaFilterForm updateCinemaName={props.updateCinemaName}></CinemaFilterForm>
                        <div className="menuHeader">
                            <Menu theme="dark" mode="horizontal"
                                defaultSelectedKeys={
                                    ['1']
                                }>
                                <Menu.Item key={1}>MOVIES</Menu.Item>
                                <Menu.Item key={2}>FOOD OPTIONS</Menu.Item>
                            </Menu>
                        </div>
                    </Header>
                </Layout>
            </div>
            <Switch>
                <Route exact path="/" component={MovieList}></Route>
                <Route exact path="/movies/*" component={MovieView}></Route>
            </Switch>
        </Router>
    );
}

export default MenuHeader;
