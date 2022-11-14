import React from 'react'
import {Row,Col, Input, Typography,DatePicker} from 'antd'
import './signup.css'


function SignUp() {
  const {Text,Title} = Typography

  return (
    <Row gutter={[0,20]} align='middle' justify='center' id='spage'>
      <Col span={24}>
        <Title level={2} ID>SignUp</Title>
        <Text> Full Name</Text>
        <Input className='myinput'/>
      </Col>

      <Col span={24}>
        <Text> Date Of Birth</Text>
        <DatePicker style={{display:'block'}}/>
      </Col>
     
      <Col span={24}>
      <Text>Email</Text>
      <Input className='myinput'/>
      </Col>

    </Row>
  )
}

export default SignUp