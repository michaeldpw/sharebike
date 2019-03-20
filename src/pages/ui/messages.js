import React from 'react';
import { Card, Button, message } from 'antd';
import './ui.css';

export default class Messagess extends React.Component{

    handleMessage = (type) => {
        message[type]('This is a message. ')
    }
    render(){
        return (
            <div className="wrapper">
                <Card className="card" title="Global Messages">
                    <Button type="primary" onClick={()=>this.handleMessage('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.handleMessage('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.handleMessage('warning')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.handleMessage('error')}>Error</Button>

                </Card>
            </div>
        )
    }

}