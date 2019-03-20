import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './style/common.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';

export default class Admin extends React.Component{
   
    render(){
        return (
            <Row className='container'>
                <Col span={4}>
                    <NavLeft></NavLeft>
                </Col>
                <Col span={20} className="main">
                    <Header className='header'>
                    </Header>
                    <Row className="main-content" >
                        {this.props.children}
                    </Row>
                    <Footer className="footer">
                        
                    </Footer>
                </Col>
            </Row>
            );
    }
}