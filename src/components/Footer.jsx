import React from 'react'
import { Layout } from 'antd';
import {
  LinkedinOutlined,
  GithubOutlined
} from '@ant-design/icons'

const {Footer} = Layout;

export default function Footerr() {
  return (
    <div className='container-fluid'>
        <div className='logo'>
        <Footer className='footer' style={{ textAlign: 'center'}}>Created By Kris Garcia <br />
        <a href='https://www.linkedin.com/in
        /kris-garcia-3b7292146/'><LinkedinOutlined spin  style={{fontSize:'25px', color:'black'}}/></a>
        
        <a href='https://github.com/Weeechi'><GithubOutlined className='git'  spin style={{fontSize:'25px', color:'black'}}/></a>
        </Footer>
        </div>
      </div>
  )
}
