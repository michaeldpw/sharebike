import React from 'react';
import './ui.css';
import { Card, Button, Modal } from 'antd';

export default class Modals extends React.Component{
    state = {
        showmodal1: false,
        showmodal2: false,
        showmodal3: false,
        showmodal4: false

    }
    handleOpen = (type) => {
        this.setState({
            [type]: true
        })
    }

    handleAlert = (type) => {
        Modal[type]({
            title: "Confirm",
            content:"Are you sure?",
            onOk(){

            },
            onCancel(){

            }
        })
    }
    render(){
        return (
            <div className="wrapper">
                <Card title="Basic Modals" className="card">
                    <Button type="primary" onClick={()=>this.handleOpen('showmodal1')}>Open</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showmodal2')}>Custom</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showmodal3')}>To Top 20px</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showmodal4')}>Center</Button>
                </Card>
                <Card title="Alert Modals" className="card">
                    <Button type="primary" onClick={()=>this.handleAlert('confirm')}>Confirm</Button>
                    <Button type="primary" onClick={()=>this.handleAlert('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.handleAlert('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.handleAlert('warning')}>Warning</Button>
                </Card>
                <Modal
                    title="Open"
                    visible={this.state.showmodal1}
                    onCancel={()=>{
                        this.setState({
                            showmodal1: false
                        })
                    }}
                >
                    <p>This is a basic modal.</p>
                </Modal>
                <Modal
                    title="Custom"
                    visible={this.state.showmodal2}
                    okText="Good"
                    cancelText="Forget it"
                    onCancel={()=>{
                        this.setState({
                            showmodal2: false
                        })
                    }}
                >
                    <p>This is a custom modal.</p>
                </Modal>
                <Modal
                    title="To Top 20px"
                    visible={this.state.showmodal3}
                    onCancel={()=>{
                        this.setState({
                            showmodal3: false
                        })
                    }}
                >
                    <p>This modal is modified to change its position.</p>
                </Modal>
                <Modal
                    title="Center"
                    visible={this.state.showmodal4}
                    onCancel={()=>{
                        this.setState({
                            showmodal4: false
                        })
                    }}
                >
                    <p>This modal is center vertically and horizontally.</p>
                </Modal>
            </div>
        )
    }
}