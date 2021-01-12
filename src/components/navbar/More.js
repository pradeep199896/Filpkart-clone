import React from 'react'
import { Menu } from 'antd';
import {BellOutlined,FileUnknownOutlined ,SmileOutlined,DownloadOutlined,AppstoreOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css'
import './More.css'

const { SubMenu } = Menu;

class More extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        className='More'
      >

        <SubMenu key="sub2" className="main" icon={<AppstoreOutlined />} title="More" style={{fontSize:'20px'}}>
          <Menu.Item key="5" className="sub" ><BellOutlined /><strong>Notifications</strong></Menu.Item>
          <Menu.Item key="6" className="sub"><FileUnknownOutlined /><strong>Customer Care</strong></Menu.Item>
          <Menu.Item key="7" className="sub"><DownloadOutlined/><strong>Download App</strong></Menu.Item>
          <Menu.Item key="7" className="sub"><SmileOutlined /><strong>About</strong></Menu.Item>
          
        </SubMenu>
      </Menu>
    );
  }
}
export default More