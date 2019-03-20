import React from 'react';
import { Card, Button, Table, Form, Select, Modal, message } from 'antd';
import axios from './../../axios/index';
import Utils from './../../utils/utils';
const FormItem = Form.Item;
const Option = Select.Option;
export default class City extends React.Component{

    state = {
        list:[],
        isShowOpenCity:false
    }
    params = {
        page:1
    }
    componentDidMount(){
        this.requestList();
    }

    requestList = ()=>{
        let _this = this;
        axios.ajax({
            url: '/open_city',
            data:{
                params:{
                    page:this.params.page
                }
            }
        }).then((res)=>{
            let list = res.result.item_list.map((item, index) => {
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
        console.log(this.state.list);
    }

    // 开通城市
    handleOpenCity = ()=>{
        this.setState({
            isShowOpenCity:true
        })
    }
    // 城市开通提交
    handleSubmit = ()=>{
        let cityInfo = this.cityForm.props.form.getFieldsValue();
        console.log(cityInfo);
        axios.ajax({
            url:'/city/open',
            data:{
                params:cityInfo
            }
        }).then((res)=>{
            if(res.code == '0'){
                message.success('开通成功');
                this.setState({
                    isShowOpenCity:false
                })
                this.requestList();
            }
        })
    }
    render(){
        const columns = [
            {
                title:'CityID',
                dataIndex:'id'
            }, {
                title: 'City Name',
                dataIndex: 'name'
            }, {
                title: 'Usage Mode',
                dataIndex: 'mode',
                render(mode){
                    return mode ==1 ?'Park':'Non-stop';
                }
            }, {
                title: 'Operation Mode',
                dataIndex: 'op_mode',
                render(op_mode) {
                    return op_mode == 1 ? 'Self-manage' : 'Franchise';
                }
            }, {
                title: 'Franchisee',
                dataIndex: 'franchisee_name'
            }, {
                title: 'City Admin',
                dataIndex: 'city_admins',
                render(arr){
                    return arr.map((item)=>{
                        return item.user_name;
                    }).join(',');
                }
            }, {
                title: 'Starting Time',
                dataIndex: 'open_time'
            }, {
                title: 'Update Time',
                dataIndex: 'update_time',
                render: Utils.formateDate
            }, {
                title: 'Operator',
                dataIndex: 'sys_user_name'
            }
        ]
        return (
            <div className="wrapper">
                <Card className="card">
                    <FilterForm />
                </Card>
                <Card style={{marginTop:10}} className="card">
                    <Button type="primary" onClick={this.handleOpenCity}>Create City</Button>
                </Card>
                <div>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                    />
                </div>
                <Modal 
                    title="开通城市"
                    visible={this.state.isShowOpenCity}
                    onCancel={()=>{
                        this.setState({
                            isShowOpenCity:false
                        })
                    }}
                    onOk={this.handleSubmit}
                >
                    <OpenCityForm wrappedComponentRef={(inst)=>{this.cityForm = inst;}}/>
                </Modal>
            </div>
        );
    }
}

class FilterForm extends React.Component{

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline">
                <FormItem label="City">
                    {
                        getFieldDecorator('city_id')(
                            <Select
                                style={{width:100}}
                                placeholder="All"
                            >
                                <Option value="">All</Option>
                                <Option value="1">Beijing</Option>
                                <Option value="2">Tianjin</Option>
                                <Option value="3">Shenzhen</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="Usage Mode">
                    {
                        getFieldDecorator('mode')(
                            <Select
                                style={{ width: 120 }}
                                placeholder="All"
                            >
                                <Option value="">All</Option>
                                <Option value="1">Appointed</Option>
                                <Option value="2">Prohibbited</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="Operation Mode">
                    {
                        getFieldDecorator('op_mode')(
                            <Select
                                style={{ width: 80 }}
                                placeholder="All"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">自营</Option>
                                <Option value="2">加盟</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="Franchise Status">
                    {
                        getFieldDecorator('auth_status')(
                            <Select
                                style={{ width: 100 }}
                                placeholder="All"
                            >
                                <Option value="">All</Option>
                                <Option value="1">Authorised</Option>
                                <Option value="2">Unauthorised</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{margin:'0 20px'}}>Search</Button>
                    <Button>Reset</Button>
                </FormItem>
            </Form>
        );
    }
}
FilterForm = Form.create({})(FilterForm);

class OpenCityForm extends React.Component{
    render(){
        const formItemLayout = {
            labelCol:{
                span:5
            },
            wrapperCol:{
                span:19
            }
        }
        const { getFieldDecorator }  =this.props.form;
        return (
            <Form layout="horizontal">
                <FormItem label="选择城市" {...formItemLayout}>
                    {
                        getFieldDecorator('city_id',{
                            initialValue:'1'
                        })(
                            <Select style={{ width: 100 }}>
                                <Option value="">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="营运模式" {...formItemLayout}>
                    {
                        getFieldDecorator('op_mode', {
                            initialValue: '1'
                        })(
                            <Select style={{ width: 100 }}>
                                <Option value="1">自营</Option>
                                <Option value="2">加盟</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="用车模式" {...formItemLayout}>
                    {
                        getFieldDecorator('use_mode', {
                            initialValue: '1'
                        })(
                            <Select style={{ width: 100 }}>
                                <Option value="1">指定停车点</Option>
                                <Option value="2">禁停区</Option>
                            </Select>
                        )
                    }
                </FormItem>
            </Form>
        );
    }
}
OpenCityForm = Form.create({})(OpenCityForm);