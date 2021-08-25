import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import '../styles/MenuHeader.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieView from './MovieView'
import MovieList from './MovieList';
import CheckoutSummary from './CheckoutSummary';

const { Header } = Layout;

function MenuHeader(props) {
    const [cinemaId, setCinemaId] = useState(0);

    function saveCinemaId(id){
        console.log("save cinemaId: ", id)
        setCinemaId(id);
    }

    function getCinemaId(){
        return cinemaId;
    }

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
                                <Menu.Item key={1}>MOVIES</Menu.Item>
                                <Menu.Item key={2}>FOOD OPTIONS</Menu.Item>
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
            </Switch>
        </Router>
    );
}

export default MenuHeader;
