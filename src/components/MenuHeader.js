import React from 'react';
import { Layout, Menu } from 'antd';
import '../styles/MenuHeader.css'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MovieView from './MovieView'
import MovieList from './MovieList';
import CheckoutSummary from './CheckoutSummary';
import ReservationDetails from './ReservationDetails';

const { Header } = Layout;

function MenuHeader(props) {

    return (
        <Router>
            <div>
                <Layout className="layout">
                    <Header>
                        <span className="logo">EZTicket</span>
                        <div className="menuHeader">
                            <Menu theme="dark" mode="horizontal"
                                defaultSelectedKeys={
                                    ['1']
                                }>
                                <Menu.Item key={1}><Link to="/">MOVIES</Link></Menu.Item>
                                <Menu.Item key={2}><Link to="/reservation">VIEW MY RESERVATION</Link></Menu.Item>
                            </Menu>
                        </div>
                    </Header>
                </Layout>
            </div>
            <Switch>
                <Route exact path="/"  component={MovieList}/>
                <Route exact path="/movies/:id" component={MovieView}></Route>
                {/* <Route exact path="/movies/*" render={props => <MovieView getCinemaId = {getCinemaId} />}></Route> */}
                <Route exact path="/checkout" component={CheckoutSummary}></Route>
                <Route exact path="/reservation" component={ReservationDetails}></Route>
            </Switch>
        </Router>
    );
}

export default MenuHeader;
