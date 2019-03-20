import React from 'react';
import MenuConfig from './../../config/menuConfig'; 
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';

export default class NavLeft extends React.Component{

    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode: menuTreeNode
        })
    }

    renderMenu = (data) => {
        return data.map((item) => {
            if(item.children){
                return (
                    <Menu.SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children) }
                    </Menu.SubMenu>
                )  
            }
            return (
                <Menu.Item title={item.title} key={item.key}>
                    <NavLink to={item.key}>{item.title}</NavLink>
                </Menu.Item>
            )
        })
   }

   render(){
       return(
        <div className="nav-left">
            <div className='logo'>
                <img src='/assets/logo-ant.svg' alt=''/>
                <h1>SHAREBIKES</h1>
            </div>
            <Menu theme="dark">
               { this.state.menuTreeNode }
            </Menu>
        </div>
        ) 
    }

    
   
   
}