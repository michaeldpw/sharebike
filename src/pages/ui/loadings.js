import React from 'react';
import { Card, Button, Spin, Icon, Alert } from 'antd';
import './ui.css';

export default class Loadings extends React.Component{
    state = {
        spin: true,
        value: "Stop"
    }
    handleSpin = () => {
        if(this.state.spin){
            this.setState({
                spin: false,
                value:"Start"
            })
        } else {
            this.setState({
                spin: true,
                value:"Stop"
            })
        }
       
    }
    render(){
        const icon = <Icon type="loading" style={{fontSize: 24}}/>
        return (
            <div className="wrapper">
                <Card title="Spin" className="card">
                    <Spin size="small" spinning={this.state.spin}/>
                    <Spin size="default" spinning={this.state.spin}/>
                    <Spin size="large" spinning={this.state.spin}/>
                    <Spin indicator={icon}/>
                    <Button type="primary" onClick={this.handleSpin}>{this.state.value}</Button>
                </Card>
                <Card title="More" className="card">
                    <Alert 
                        message="Info"
                        description="This is an alert. "
                        type="info"
                    />
                    <Spin>
                        <Alert 
                            message="Info"
                            description="This is a loading alert."
                            type="info"
                        />
                    </Spin>
                    <Spin tip="Loading">
                        <Alert 
                            message="Info"
                            description="This is a loading alert."
                            type="info"
                        />
                    </Spin>
                    <Spin tip="Loading" indicator={icon}>
                        <Alert 
                            message="Info"
                            description="This is a loading alert."
                            type="info"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}