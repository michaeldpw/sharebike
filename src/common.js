import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './style/common.css';
import Header from './components/Header';



export default class Common extends React.Component{
   
    render(){
        return (
            <div>
                <Row className='container'>
                        <Header menuType="second"/>
                </Row>
                <Row>
                    {this.props.children}
                </Row>
            </div>
            );
    }
}