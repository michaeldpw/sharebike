/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Card, Form, Input, Button, message, Icon, Checkbox} from 'antd';
import './login.css';

class FormLogin extends React.Component{


    handleSubmit = () => {
        let userInfo =  this.props.form.getFieldsValue();
        this.props.form.validateFields((err, value)=>{
            if(!err){
                message.success(`Welcome ${userInfo.userName}!`)
            }
        })
    }
    render(){

        const { getFieldDecorator } = this.props.form;
        return (
                <div className="wrapper">
                    <Card title="Inline Login Form" className="card">
                        <Form layout="inline">
                            <Form.Item>
                                <Input placeholder="Username"/>
                            </Form.Item>
                            <Form.Item>
                                <Input placeholder="Password"/>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary">Log In</Button>
                            </Form.Item>
                        </Form>
                    </Card>
                    <Card title="Horizontal Login Form" className="card">
                        <Form layout="horizontal" className="hori-form">
                            <Form.Item>
                                {
                                    getFieldDecorator('userName',{
                                        initialValue:'',
                                        rules:[
                                            {
                                                required:true,
                                                message:'Username cannot be empty.'
                                            },
                                            {
                                                min:5,
                                                max:10,
                                                message:'The length of username should be 5~10 characters.'
                                            },
                                            {
                                                pattern: new RegExp('^\\w+$','g'),
                                                message:'Username should only include letters or numbers.'
                                            }
                                        ]
                                    })(
                                        <Input prefix={<Icon type="user"/>} placeholder="Username"/>
                                    )
                                }                               
                            </Form.Item>
                            <Form.Item>
                                {
                                    getFieldDecorator('password',{
                                        initialValue:'',
                                        rules:[
                                            {
                                                required:true,
                                                message:'Password cannot be empty.'
                                            }
                                        ]
                                    })(
                                        <Input prefix={<Icon type="lock"/>} type="password" placeholder="Password"/>
                                    )
                                }                               
                            </Form.Item>
                            <Form.Item className="remember">
                                {
                                    getFieldDecorator('remember',{
                                        valuePropName:'checked',
                                        initialValue:'true'
                                        
                                    })(
                                        <Checkbox>Remember me</Checkbox>
                                    )
                                } 
                                <a href="#">Forgot password?</a>                              
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" onClick={this.handleSubmit}>Log In</Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
        )
    }
}

export default Form.create()(FormLogin);