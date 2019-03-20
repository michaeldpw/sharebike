import React from 'react';
import { Card, Carousel } from 'antd';
import './ui.css'

export default class Carousels extends React.Component{
    render(){
        return (
            <div className="wrapper">
                <Card title="Carousel" className="card ">
                    <Carousel autoplay={true}>
                        <div><h3>Hello</h3></div>
                        <div><h3>Aloha</h3></div>
                        <div><h3>你好</h3></div>
                    </Carousel>
                </Card>
                <Card title="Photos Carousel" className="slider-wrap">
                    <Carousel autoplay={true} effect="fade">
                        <div><img src='/carousel-img/carousel-2.jpg' alt=''/></div>
                        <div><img src='/carousel-img/carousel-3.jpg' alt=''/></div>
                    </Carousel>
                </Card>

            </div>
        )
    }
}