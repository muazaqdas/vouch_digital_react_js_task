import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import axios from 'axios';
import React from 'react';

import './index.css'
import './form.css'

const App=()=>{
    const onFinish = async(values)=>{
        try {const {data} = await axios.post("https://reqres.in/api/login",{...values})
        alert(data.token)}catch(err){alert(err.response.data.error)}
    }

    return (
        
        <Form 
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}

    >
      <Form.Item className='form-item'>
        <div className='formTitle'>Welcome Back</div>
        <div>Sub-title text goes here</div>
      </Form.Item>
      <Form.Item
        className='form-item'
        name="email"
      >
        <Input placeholder="Email Address *" />
      </Form.Item>
      <Form.Item
        className='form-item'
        name="password">
        <Input
          type="password"
          placeholder="Password *"
        />
      </Form.Item>
      <Form.Item style={{justifyContent:"center", alignItems:"center", textAlign:"center"}}>
        <Button style={{ backgroundColor:"#033047", borderStyle:"none"}} type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
      <Form.Item>
      <Row>
        <Col span={12} name="remember" valuePropName="checked" noStyle>
          <Checkbox className="checkbox" >Remember Password</Checkbox>
        </Col>
        <Col span={12} style={{textAlign:"start", paddingLeft:"45px"}}>
        <a className="login-form-forgot forgot"  href=".">
          Forgot password?
        </a>
        </Col>
        
      </Row>
      </Form.Item>

    </Form>
  );
};

export default App;

