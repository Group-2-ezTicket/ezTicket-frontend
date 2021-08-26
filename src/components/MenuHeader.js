import React from 'react';
import { Layout, Menu } from 'antd';
import '../styles/MenuHeader.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieView from './MovieView'
import MovieList from './MovieList';
import CheckoutSummary from './CheckoutSummary';
import styles from '../styles/MenuHeader.css';

const { Header } = Layout;

function MenuHeader() {
    return (
        <Router>
            <div>
                <Layout className="layout">
                    <Header className="main-header" style={
                        {
                            background: '#067f83'
                        }
                    }>
                        <span className="logo" onclick="window.open(this.src)">
                            <img src="https://i.imgur.com/qdaGaoM.png" className="header-icon" alt="icon" id="header-icon" />
                        </span>
                        <div className="menuHeader">
                            <Menu mode="horizontal" className={styles.customTag}
                                defaultSelectedKeys={
                                    ['1']
                                }
                                style={{
                                    background: '#067f83',
                                    color: 'white',
                                    backgroundColor: '067f83'

                                }}
                            />
                        </div>
                    </Header>
                </Layout>
            </div>
            <Switch>
                <Route exact path="/" component={MovieList} />
                <Route exact path="/movies/:id" component={MovieView}></Route>
                <Route exact path="/checkout" component={CheckoutSummary}></Route>
            </Switch>
        </Router>
    );
}

export default MenuHeader;
