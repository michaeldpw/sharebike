import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import Util from '../../utils/utils';

export default class Header extends React.Component{

    state = {}

    componentWillMount(){
        this.setState({
            userName: 'Michael Du'
        });

        setInterval(() => {
           let sysTime = Util.formatDate(new Date().getTime());
           this.setState({
               sysTime: sysTime
           })
        },1000);
        
        this.getWeatherAPIData();
    }
    
    getWeatherAPIData = async () => {
        
        const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Sydney,au&appid=1ab17cb730241e522efc4656bc82c041&units=metric');
        const data = await api_call.json();
        const temperature = data.main.temp;
        const icon = data.weather[0].icon;  
        this.setState({
            currTemp:temperature,
            iconUrl: 'http://openweathermap.org/img/w/' + icon + '.png'
        })
    }

    render(){
        
        return (
           
        <div className="header">
          <Row className='header-top'>
            <Col span={24}>
                <span>Welcome, {this.state.userName}</span>
                <a href="#">Log Out</a>
            </Col>
          </Row>
          <Row className='breadcrumb'>
            <Col className='breadcrumb-title'span={4}>
                Home
            </Col>
            <Col className='breadcrumb-detail'span={20}>
                <span className='date'>{this.state.sysTime}</span>
                <span className='weather'>
                    <img src={this.state.iconUrl} alt=''/>
                    {this.state.currTemp} ℃
                </span>
            </Col>
          </Row>
        </div>
        )
    }
}