import React from 'react';
import { Card, Row, Col, Modal } from 'antd';
import './ui.css';

export default class Galleries extends React.Component{
    state = {
        visible: false
    }

    openImg = (imgSrc) => {
        this.setState({
            visible: true,
            current: "/gallery/"+imgSrc
        })
    }
    render(){
       

        const imgs = [
            ['1.png','18.png','3.png','10.png'],
            ['4.png','5.png','17.png','11.png'],
            ['7.png','8.png','9.png','12.png'],
            ['13.png','14.png','15.png','16.png'],
        ]

        const imgList = imgs.map((list) => list.map((item)=>
            <Card className="card"
                // eslint-disable-next-line jsx-a11y/alt-text
                cover={<img src={'/gallery/'+item}/>}
                onClick={()=>this.openImg(item)}
            >
                <Card.Meta
                    title="AAA"
                    description="aaaaa"
                />
            </Card>
        ))
        return (


            <div className="wrapper">   
                <Row gutter={16}>
                    <Col md={6}>
                        {imgList[0]}
                    </Col>
                    <Col md={6}>
                        {imgList[1]}
                    </Col>
                    <Col md={6}>
                        {imgList[2]}
                    </Col>
                    <Col md={6}>
                        {imgList[3]}
                    </Col>
                </Row>
                <Modal 
                    width={300}
                    height={450}
                    visible={this.state.visible}
                    onCancel={()=>{
                        this.setState({
                            visible: false
                        })
                    }}
                    title="Image"
                    footer={null}
                >
                    <img src={this.state.current} alt="" style={{width:'100%'}}/>
                </Modal>
                
               
            </div>
        )
    }
}