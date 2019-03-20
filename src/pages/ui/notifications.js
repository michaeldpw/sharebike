import React from 'react';
import { Card, Button, notification } from 'antd';
import './ui.css';

export default class Loadings extends React.Component{


    handleNotify = (type, placement) => {
        notification[type]({
            message:'Notification',
            description:'This is a notification.',
            placement: placement
        })

    }
    render(){
        return (
            <div className="wrapper">
                <Card title="Notifications" className="card">
                    <Button type="primary" onClick={()=>this.handleNotify('success','topRight')}>Success</Button>
                    <Button type="primary" onClick={()=>this.handleNotify('info','topLeft')}>Info</Button>
                    <Button type="primary" onClick={()=>this.handleNotify('warning','bottomLeft')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.handleNotify('error','bottomRight')}>Error</Button>
                </Card>
            </div>
        )
    }

}