import React from 'react';
import 'antd/dist/antd.min.css';
import './index.css';
import './App.css';
import { Button, Col, Layout, Row } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';

import Form from './form'
import img from './images/1.jpeg'



const App = () => (
  <div>
    <Layout theme="light">
      <Header style={{backgroundColor:"white", boxShadow: "10px 10px 8px #888888"}}>
      <Row >
      <Col lg={18} className="title"><spna style={{color:"#033047"}}>ATools</spna><span style={{color:"#fb8502"}}>.</span></Col>
        <Col className='col' lg={3} sm={0} xs={0}>
          <Button style={{backgroundColor:"#033047"}}  className='startButton'>Start Free Trial</Button>
        </Col>
        <Col className='col' lg={3} sm={0} xs={0} >
          <Button style={{backgroundColor:"#fb8502"}} className='loginButton' >Login</Button>
        </Col>
      </Row>
      
      </Header>
      <Row style={{width:"100%", margin:"0", padding:"0", backgroundColor:"#fff"}}>
        <Col lg={9} sm={24} xs={24}>
        <div style={{marginTop:"45%", width:"100%"}}>
            <Form />
        </div>
          
        </Col>
        <Col lg={15} sm={0} xs={0}>
          <Content className='sider' style={{ backgroundImage: `url(${img})`,backgroundSize:"cover", backgroundRepeat:"no-repeat" }}></Content>
        </Col>  
      </Row>
    </Layout>
  </div>
);

export default App;