import React, {useEffect, useState } from 'react'
import uuid from 'react-uuid'
import { Form, message, Button } from 'antd';
import Basic from './Basic';
import { connect } from 'react-redux'
import { Todoadd,TodoEdit } from '../../redux/actions'
import { useHistory } from "react-router-dom";
const ADD ='ADD'
const EDIT   = 'EDIT'
const Todo = (props) => {


    const {mode =ADD,param,TodoEdit,Todoadd,todo} =props
   
    const [form] = Form.useForm();
    const [submitLoading, setSubmitLoading] = useState(false)
    

    const history = useHistory()
    const CasinoAdd = (values) => {
       values = {...values,id:uuid()}
       console.log(values)
        Todoadd(values)
   
    }
    
   const EditTodo =(values)=>{
        TodoEdit(values)
    }
     useEffect(()=>{
        if(mode===EDIT)
        {
            const {id} = param;
            const list = todo.Lists.filter(data=>data.id===id)
            if(list[0])
            {
                    form.setFieldsValue({
                        name:list[0]?.name,
                        email:list[0]?.email,
                        phone:list[0]?.phone,
                        state:list[0]?.state,
                        city:list[0]?.city,
                        zipCode:list[0]?.zipCode
                    })
            }
        }
     },[props,mode,form,param,todo.Lists])

    const onFinish = () => {
        setSubmitLoading(true)
        form.validateFields().then(values => {
            setTimeout(() => {
                 setSubmitLoading(false)
                   if(mode===ADD)
                   {
                    CasinoAdd(values)
                    message.success(`Created ${values.name} to Todo list`);
                    form.resetFields()
                    }
                    if(mode===EDIT)
                    {
                      EditTodo(values)
                     message.success(`Updated ${values.name} to Todo list`);
                    // form.resetFields()
                    }
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
const mapStateToProps=(state)=>{
    return {todo :state.todo}
}
const mapDispatchToProps=(dispatch)=>{
    return {
          Todoadd :(data) =>dispatch(Todoadd(data)),
          TodoEdit :(data)=>dispatch(TodoEdit(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todo)