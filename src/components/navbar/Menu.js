import React from 'react'
import { Menu, Button } from 'antd';
import {
  HomeOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,ShareAltOutlined,GiftOutlined ,
  ShoppingOutlined 
} from '@ant-design/icons';
import 'antd/dist/antd.css'
import './Menu.css'

const { SubMenu } = Menu;

class Menus extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div style={{ width: 256 }}>
        <Button className="MenuB"type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          inlineCollapsed={this.state.collapsed}
          className="MenuC"
        >
          <Menu.Item key="1" className='meno' icon={<HomeOutlined />} >
           Home
          </Menu.Item>
      
          <SubMenu key="sub1"  id='meno1'icon={<ShoppingOutlined />} title="Categories">
        <Menu.Item  className='meno' key="5">Electronics</Menu.Item>
            <Menu.Item  className='meno' key="6">Jewellery</Menu.Item>
            <Menu.Item  className='meno' key="7">Men Clothing</Menu.Item>
            <Menu.Item  className='meno' key="8">Women Clothing</Menu.Item>
          </SubMenu>
          <Menu.Item  className='meno' icon={<GiftOutlined />} key="2" >
           All offers
          </Menu.Item>
          <Menu.Item  className='meno' icon={<ShareAltOutlined />}key="3" >
           ShareApp
          </Menu.Item>

          
        </Menu>
      </div>
    );
  }
}
export default Menus