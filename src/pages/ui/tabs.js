import React from 'react';
import { Card, Button, Icon, Tabs, message } from 'antd';
import './ui.css';

export default class Tab extends React.Component{
    newTabIndex = 0;
    state={}
    componentWillMount(){
        const panes = [
            {
                title:'Tab1',
                content:"Tab1",
                key:'1'
            },
            {
                title:'Tab2',
                content:"Tab2",
                key:'2'
            },
            {
                title:'Tab3',
                content:"Tab3",
                key:'3'
            }
        ]

        this.setState({
            panes,
            activeKey: panes[0].key
        })
    }

    onChange = (activeKey) => {
        this.setState({
            activeKey
        })

    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
       
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: activeKey, key: activeKey });
        this.setState({ panes, activeKey });
      }
    
      remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        this.setState({ panes, activeKey });
      }

    handleCallback = (key) => {
        message.info("Tab"+key+" has been chosen.")
    }
    render(){
        return (
            <div className="wrapper">
                <Card className="card" title="Tabs">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <Tabs.TabPane tab="Tab 1" key="1">Content of Tab Pane 1</Tabs.TabPane>
                        <Tabs.TabPane tab="Tab 2" key="2" disabled>Content of Tab Pane 2</Tabs.TabPane>
                        <Tabs.TabPane tab="Tab 3" key="3">Content of Tab Pane 3</Tabs.TabPane>
                    </Tabs>
                </Card>
                <Card className="card" title="Icon Tabs">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <Tabs.TabPane tab={<span><Icon type="plus"/>Create</span>}key="1">Content of Tab Pane 1</Tabs.TabPane>
                        <Tabs.TabPane tab={<span><Icon type="edit"/>Edit</span>} key="2">Content of Tab Pane 2</Tabs.TabPane>
                        <Tabs.TabPane tab={<span><Icon type="delete"/>Delete</span>} key="3">Content of Tab Pane 3</Tabs.TabPane>
                    </Tabs>
                </Card>
                <Card className="card" title="Dynamic Tabs">
                    <Tabs 
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onChange={this.onChange}
                        onEdit={this.onEdit}                       
                    >
                        {
                            this.state.panes.map((item)=> {
                                return <Tabs.TabPane 
                                            tab={item.title} 
                                            key={item.key}
                                        >
                                            {item.content}
                                        </Tabs.TabPane>
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}