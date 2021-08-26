import React from 'react';
import MenuHeader from "./components/MenuHeader";
import './App.css';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function App() {

  
  return (
    <div className="App">
      <div className="allButFooter">
      <MenuHeader style={{
        width: '2000px'
      }}/>
      </div>
      <Footer style={{
        width: '100%',
      }}>EZTicket - ITA6 ©2021 Created by Group 2</Footer>
    </div>
  );
}

export default App;
