import React from "react";
import { Card, Form, Select, Button, Table, DatePicker } from 'antd';
import axios from '../../axios';
import Utils from '../../utils/utils';


export default class Order extends React.Component{
    state={}
    params = {
        page:1
    }

    componentDidMount(){
        this.requestList();
    }

    requestList = () => {
        let _this = this;
        axios.ajax({
            url:'/order/list',
            data:{
                params:{
                    page:this.params.page
                }    
            }
        }).then((res)=>{
            let list = res.result.item_list.map((item, index)=>{
                item.key = index;
                return item;
            });
            this.setState({
                list:list,
                pagination:Utils.pagination(res,(current)=>{
                        _this.params.page = current;
                        _this.requestList();
                })
             })
        })
    }

    render(){
        const columns = [
            {
                title:'Order #',
                dataIndex:"order_sn"
            },
            {
                title:'Bike #',
                dataIndex:"bike_sn"
            },
            {
                title:'User',
                dataIndex:"user_name"
            },
            {
                title:'Phone',
                dataIndex:"mobile"
            },
            {
                title:'Distance',
                dataIndex:"distance"
            },
            {
                title:'Time',
                dataIndex:"total_time"
            },
            {
                title:'Status',
                dataIndex:"status"
            },
            {
                title:'Start Time',
                dataIndex:"start_time"
            },
            {
                title:'End Time',
                dataIndex:"end_time"
            },
            {
                title:'Total Fee',
                dataIndex:"total_fee"
            },
            {
                title:'Fee Paid',
                dataIndex:"user_pay"
            },
        ]
        return (
            <div className="wrapper">
                <Card className="card">
                    <FilterForm />
                </Card>
                <Card className="card">
                    <Button onClick={this.openOrderDetail}>Order Details</Button>
                    <Button>End Order</Button>
                </Card>
                <div>
                    <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                    />
                    
                </div>
            </div>
        )
    }
}

class FilterForm extends React.Component{

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline">
                <Form.Item label="City">
                    {
                        getFieldDecorator('city_id')(
                            <Select
                                style={{width:100}}
                                placeholder="All"
                            >
                                <Select.Option value="">All</Select.Option>
                                <Select.Option value="1">Beijing</Select.Option>
                                <Select.Option value="2">Tianjin</Select.Option>
                                <Select.Option value="3">Shenzhen</Select.Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label="Order Time">
                    {
                        getFieldDecorator('start_time')(
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                        )
                    }
                   
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator('end_time')(
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                        )
                    }
                </Form.Item>
                <Form.Item label="Order Status">
                    {
                        getFieldDecorator('op_mode')(
                            <Select
                                style={{ width: 80 }}
                                placeholder="All"
                            >
                                <Select.Option value="">All</Select.Option>
                                <Select.Option value="1">Ongoing</Select.Option>
                                <Select.Option value="2">Ended</Select.Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item>
                    <Button type="primary" style={{margin:'0 20px'}}>Search</Button>
                    <Button>Reset</Button>
                </Form.Item>
            </Form>
        );
    }
}
FilterForm = Form.create({})(FilterForm);