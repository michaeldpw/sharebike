import React from 'react';
import { Card, Button, Radio } from 'antd';
import 'antd/dist/antd.css';
import './ui.css'

export default class Buttons extends React.Component{
    state = {
        loading: true,
        btnValue: "Stop loading",
        size: 'default'

    }

    handleCloseLoading = () => {
        if (this.state.loading){
            this.setState({
                loading: false,
                btnValue: "Start Loading"
            })
        } else {
            this.setState({
                loading: true,
                btnValue:"Stop Loading"
            })
        }
       
    }

    handleSizeChange = (e) => {
        this.setState({
            size: e.target.value
        })
    }
    render(){
        return (
            <div className="wrapper">
                <Card className="card" title="Basic Buttons">
                    <Button type="primary">Click me!</Button>
                    <Button>Click me!</Button>
                    <Button type="dashed">Click me!</Button>
                    <Button type="danger">Click me!</Button>
                    <Button disabled>Click me!</Button>
                </Card>
                <Card className="card" title="Icon Buttons">
                    <Button icon="plus">Create</Button>
                    <Button icon="edit">Edit</Button>
                    <Button icon="delete">Delete</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button type="primary" icon="search">Search</Button>
                    <Button type="primary" icon="download">Download</Button>
                </Card>
                <Card className="card" title="Loading Buttons">
                    <Button type="primary" loading={this.state.loading}>Confirm</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                    <Button loading={this.state.loading}>Click</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>{this.state.btnValue}</Button>
                </Card>
                <Card className="card" title="Button Group">
                    <Button.Group>
                        <Button type="primary" icon="left" style={{marginRight:0}}>Back</Button>
                        <Button type="primary" icon="right">Next</Button>
                    </Button.Group>
                </Card>
                <Card className="card-last" title="Buttons Size">
                    <Radio.Group value={this.state.size} onChange={this.handleSizeChange}>
                        <Radio value="small">Small</Radio>
                        <Radio value="default">Default</Radio>
                        <Radio value="large">Large</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>Click me!</Button>
                    <Button size={this.state.size}>Click me!</Button>
                    <Button type="dashed" size={this.state.size}>Click me!</Button>
                    <Button type="danger" size={this.state.size}>Click me!</Button>
                    <Button disabled size={this.state.size}>Click me!</Button>
                </Card>
            </div>
        )
    }
}