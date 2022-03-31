import React from 'react'
import { Layout } from 'antd';
import {
FireOutlined
} from '@ant-design/icons'

const { Header,} = Layout;

export default function header() {
  return (
    <div className='container-fluid'>
        <div className='logo'>
        <Header className='header' style={{ textAlign: 'center'  }}>
          <h1 className='title'>PR Pal <FireOutlined 
          style={{fontSize:'25px', color:'white'}}/> </h1> 

        </Header>
        </div>
      </div>
  )
}
