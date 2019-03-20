import React from 'react';
import { Card, Table } from 'antd';
import axios from './../../axios/index';

export default class BasicTable extends React.Component{
    state={
        dynamicDataSource:[]
    }

    params = {
        page:1
    }
    componentDidMount(){
        const dataSource = [
            {
                id:'0',
                username:'Michael',
                gender:'1',
                occupation:'1',
                hobby:'1',
                birthday:'2001-01-01',
                address:'888 Collins Street, Docklands VIC',
                time:'22:00'
            },
            {
                id:'1',
                username:'Tom',
                gender:'1',
                occupation:'1',
                hobby:'1',
                birthday:'2001-01-01',
                address:'888 Collins Street, Docklands VIC',
                time:'22:00'
            },
            {
                id:'2',
                username:'Charles',
                gender:'1',
                occupation:'1',
                hobby:'1',
                birthday:'2001-01-01',
                address:'888 Collins Street, Docklands VIC',
                time:'22:00'
            }
        ]

        dataSource.map((item,index) => {
            item.key = index;
        });

        this.setState({
            dataSource
        });

        this.request();
    }

    request = () => {
        axios.ajax({
            url:'/table/list',
            data:{
                params:{
                    page:this.params.page
                }
            }
        }).then((res)=>{
            if(res.code === 0){
                // eslint-disable-next-line array-callback-return
                res.result.map((item, index)=>{
                    item.key=index;
                })
                this.setState({
                    dynamicDataSource:res.result
                })
            }
        })
    }

    onRowClick = (record, index) => {
        let selectKey = [index];
        this.setState({
            selectRowKeys: selectKey,
            selectedItem: record
        })
    }

    render(){
        const col = [
            {
                title:'id',
                dataIndex: 'id'
            },
            {
                title:'Username',
                dataIndex: 'username'
            },
            {
                title:'Gender',
                dataIndex: 'gender',
                render(gender){
                    return gender === 1 ? 'Male' : 'Female'
                }
            },
            {
                title:'Occupation',
                dataIndex: 'occupation',
                render(occupation){
                    let config = {
                        '1': 'Student',
                        '2': 'Teacher',
                        '3': 'Manager',
                        '4': 'Doctor',
                        '5': 'Programmer'
                    }
                    return config[occupation];
                }
            },
            {
                title:'Hobbies',
                dataIndex: 'hobby',
                render(hobby){
                    let config = {
                        '1': 'Reading',
                        '2': 'Movie',
                        '3': 'Gym',
                        '4': 'Hike',
                        '5': 'Swimming'
                    }
                    return config[hobby];
                }
            },
            {
                title:'Birthday',
                dataIndex: 'birthday'
            },
            {
                title:'Address',
                dataIndex: 'address'
            },
            {
                title:'Bedding Time',
                dataIndex: 'time'
            }
        ]
        const selectRowKeys = this.state.selectRowKeys;
        const rowSelection = {
            type:'radio',
            selectRowKeys
        }
        const rowCheckSelection = {
            type:'checkbox',
            selectRowKeys,
            onChange:(selectRowKeys, selectedRows)=>{
                let ids = [];
                selectedRows.map((item)=>{
                    ids.push(item.id);
                })
                this.setState({
                    selectRowKeys,
                    selectedRows
                    //selectIds: ids
                })
            }
        }
        return (
            <div className="wrapper">
                <Card title="Basic Table" className="card">
                    <Table
                        bordered
                        columns={col}
                        dataSource={this.state.dataSource} 
                        pagination={false}  
                    />
                  
                </Card>
                <Card title="Dynamic Table" className="card">
                    <Table
                        bordered
                        columns={col}
                        dataSource={this.state.dynamicDataSource} 
                        pagination={false}  
                    />
                  
                </Card>
                <Card title="Dynamic Table with Single Selection" className="card">
                    <Table
                        bordered
                        rowSelection={rowSelection}
                        onRow={(record, index)=>{
                            return {
                                onClick: () => { 
                                    this.onRowClick(record, index);
                                }
                            };
                        }

                        }
                        columns={col}
                        dataSource={this.state.dynamicDataSource} 
                        pagination={false}  
                    />
                  
                </Card>
                <Card title="Dynamic Table with Multiple Selection" className="card">
                    <Table
                        bordered
                        rowSelection={rowCheckSelection}
                        columns={col}
                        dataSource={this.state.dynamicDataSource} 
                        pagination={false}  
                    />
                  
                </Card>
            </div>
        )
    }
}