import React from 'react';
import { Card, 
        Form, 
        Input, 
        InputNumber,
        Button, 
        message, 
        Icon, 
        Checkbox, 
        Radio, 
        Switch, 
        DatePicker, 
        TimePicker, 
        Upload,
        Select
    } from 'antd';
import moment from 'moment';

class FormRegister extends React.Component{

    state={}
    
    getBase64 = (img, callback)=> {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
    
    handleChange = (info) => {
            if (info.file.status === 'uploading') {
              this.setState({ loading: true });
              return;
            }
            if (info.file.status === 'done') {
              // Get this url from response in real world.
              this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                img:imageUrl,
                loading: false,
              }));
            }
    }

    handleSubmit = () => {
        let userInfo =  this.props.form.getFieldsValue();
        console.log(JSON.stringify(userInfo));
        message.success(`Welcome ${userInfo.userName}!`)
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:8
            }
        }

        const offsetLayout = {
            
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }


       
        return (
            <div className="wrapper">
                <Card title="Register" className="card">
                    <Form layout="horizontal">
                        <Form.Item label="Username" {...formItemLayout}>
                            {
                                getFieldDecorator('userName',{
                                        initialValue:'',
                                        rules:[
                                            {
                                                required:true,
                                                message:'Username cannot be empty.'
                                            }
                                        ]
                                    })(
                                        <Input placeholder="Please enter username"/>
                                    )
                            }
                        </Form.Item>
                        <Form.Item label="Password"  {...formItemLayout}>
                            {
                                getFieldDecorator('password', {
                                        initialValue:'',
                                        rules:[
                                            {
                                                required:true,
                                                message:'Username cannot be empty.'
                                            }
                                        ]
                                    })(
                                        <Input type="password" placeholder="Please enter password"/>
                                    )
                            }
                        </Form.Item>
                        <Form.Item label="Gender"  {...formItemLayout}>
                            {
                                getFieldDecorator('gender', {
                                        initialValue:'1'
                                    })(
                                        <Radio.Group>
                                            <Radio value="1">Male</Radio>
                                            <Radio value="2">Female</Radio>
                                        </Radio.Group>
                                    )
                            }
                        </Form.Item>
                        <Form.Item label="Age"  {...formItemLayout}>
                            {
                                getFieldDecorator('age', {
                                        initialValue:'18'
                                    })(
                                        <InputNumber />
                                    )
                            }
                        </Form.Item>
                        <Form.Item label="Occupation"  {...formItemLayout}>
                            {
                                getFieldDecorator('occupation', {
                                        initialValue:'1'
                                    })(
                                        <Select>
                                            <Select.Option value='1'>Student</Select.Option>
                                            <Select.Option value='2'>Teacher</Select.Option>
                                            <Select.Option value='3'>Manager</Select.Option>
                                            <Select.Option value='4'>Doctor</Select.Option>
                                            <Select.Option value='5'>Programmer</Select.Option>
                                        </Select>
                                    )
                            }
                        </Form.Item>
                        <Form.Item label="Hobbies"  {...formItemLayout}>
                            {
                                getFieldDecorator('hobbies', {
                                        initialValue:['1','2']
                                    })(
                                        <Select mode="multiple">
                                            <Select.Option value='1'>Reading</Select.Option>
                                            <Select.Option value='2'>Movie</Select.Option>
                                            <Select.Option value='3'>Gym</Select.Option>
                                            <Select.Option value='4'>Hike</Select.Option>
                                            <Select.Option value='5'>Swimming</Select.Option>
                                        </Select>
                                    )
                            }
                        </Form.Item>
                        <Form.Item label="Married"  {...formItemLayout}>
                            {
                                getFieldDecorator('marry', {
                                        valuePropName:'checked',
                                        initialValue:true
                                    })(
                                        <Switch />
                                    )
                            }
                        </Form.Item>
                        <Form.Item label="Birthday"  {...formItemLayout}>
                            {
                                getFieldDecorator('birthday', {
                                        initialValue:moment('2018-08-08')
                                    })(
                                        <DatePicker 
                                            format='YYYY-MM-DD'
                                        />
                                    )
                            }
                        </Form.Item>
                        <Form.Item label="Address"  {...formItemLayout}>
                            {
                                getFieldDecorator('address', {
                                        initialValue:''
                                    })(
                                        <Input.TextArea 
                                            autosize={
                                                {
                                                    minRows:1,
                                                    maxRows:2
                                                }
                                            }
                                        />
                                    )
                            }
                        </Form.Item>
                        <Form.Item label="Bedding Time"  {...formItemLayout}>
                            {
                                getFieldDecorator('time')(
                                       <TimePicker />
                                    )
                            }
                        </Form.Item>
                        <Form.Item label="Image"  {...formItemLayout}>
                            {
                                getFieldDecorator('image')(
                                      <Upload
                                        listType="picture-card"
                                        showUploadList={false}
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        onChange={this.handleChange}
                                      >
                                        {this.state.img?<img src={this.state.img} alt=''/>:<Icon type="plus"/>}
                                      </Upload>
                                    )
                            }
                        </Form.Item>
                        <Form.Item  {...offsetLayout}>
                            {
                                getFieldDecorator('image')(
                                     // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                     <Checkbox>I have read the <a href="#">terms and condition</a></Checkbox>
                                    )
                            }
                        </Form.Item>
                        <Form.Item  {...offsetLayout}>
                            <Button type="primary" onClick={this.handleSubmit}>Register</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormRegister);
