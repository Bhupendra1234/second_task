import React from 'react'
import { Input, Row, Col, Card, Form,InputNumber } from 'antd';


const rules = {
    name: [
        {
            required: true,
            message: 'Please enter  name!',
        }
    ],
    email: [
        {
            required: true,
            message: 'Please enter your email!',
        }
    ],
    phone: [
        {

            required: true,
            message: 'Please enter your number!',
        }
    ],
    zipCode: [
        {
            required: true,
            message: 'Please enter your Zip Code!',
        }
    ],
    state: [
        {
            required: true,
            message: 'Please enter your state!',
        },
    ],
    city: [
        {
            required: true,
            message: 'Please enter your city!',
        }
    ]
}


const GeneralField = () => {


    return <>
        <Row gutter={16}>
            <Col xs={24} sm={24} md={24} >
                <Card title="Basic Info" >
                    <Form.Item name="name" label="Name" rules={rules.name}  >
                        <Input />
                    </Form.Item>

                    <Form.Item name="email" label="Email" rules={rules.email} >
                        <Input  />
                    </Form.Item>
                    <Row gutter={16}>
                        <Col xs={24} sm={24} md={12} >
                            <Form.Item label="City" name="city" rules={rules.city}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} >
                            <Form.Item label="State" name="state" rules={rules.state}>
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col xs={24} sm={24} md={12} >
                            <Form.Item label="Zip Code" name="zipCode" rules={rules.zipCode}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} >
                            <Form.Item name="phone"  label="Phone Number" rules={rules.phone}>
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    </>
}

export default GeneralField