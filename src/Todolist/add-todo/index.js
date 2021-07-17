import React, { useState } from 'react'

import { Form, message, Button } from 'antd';
import Basic from './Basic';
import { Todoadd } from '../../redux/actions'
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

const AddTodo = () => {

   

    const [form] = Form.useForm();
    const [submitLoading, setSubmitLoading] = useState(false)
    
    const dispatch = useDispatch()
    const history = useHistory()
    const CasinoAdd = (values) => {
        dispatch(Todoadd(values))
    }


    const onFinish = () => {
        setSubmitLoading(true)
        form.validateFields().then(values => {
            setTimeout(() => {
                setSubmitLoading(false)
                    CasinoAdd(values)
                    message.success(`Created ${values.name} to Todo list`);
                    form.resetFields()
            }, 1500);
        }).catch(info => {
            setSubmitLoading(false)
            message.error('Please enter all required field ');
        });
    };

    const onDiscard = () => {
        history.push('/')
    }
    return (

        <Form
            form={form}
            layout="vertical"
            style={{marginTop:30,marginLeft:100,marginRight:100}}
        >
            <div className="border-bottom" >
                <div className="container">
                   
                        <div className="mb-3">
                            <Button className="mr-2" style={{marginRight:10}} onClick={onDiscard}>Discard</Button>
                            <Button type="primary" onClick={() => onFinish()} htmlType="submit" loading={submitLoading} >
                               Add
                            </Button>
                        </div>
                   
                </div>
            </div>
            <div className="container" style={{ marginTop: '20px' }}>
                <Basic />
            </div>
        </Form>

    )
}

export default AddTodo