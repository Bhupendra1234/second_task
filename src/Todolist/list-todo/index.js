
import React, { useState, useEffect } from 'react'
import { Card, Table,  Button, } from 'antd';
import {  PlusCircleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import 'antd/dist/antd.css';
import {Todolist} from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux';
const TodoList = () => {
    let history = useHistory();
    const [list, setList] = useState([])
     const dispatch = useDispatch()
     const state = useSelector(state=>state.todo.Lists)
      useEffect(()=>
      {
          dispatch(Todolist(state))
      }, [state])
      
     
    useEffect(() => {
        setList(state)
    }, [state])
         



    const addCasino = () => {
        history.push(`/add-todo`)
    }

    


  

    const tableColumns = [
        {
            title: 'Name',
            dataIndex: 'name',
          
        },
        {
            title: 'Email',
            dataIndex: 'email',

        },
        {
            title: 'Phone Number',
            dataIndex: 'phone',
        },
        {
            title: 'City',
            dataIndex: 'city',
        },
        {
            title: 'State',
            dataIndex: 'state',
        },
    ];


  


    return (
        <Card style={{margin:30}}>
         
            
            <div className="table-responsive">
            <div  style={{ width:'10%',margin:10}}>
                    <Button onClick={addCasino} type="primary" icon={<PlusCircleOutlined />} block>Add Todo</Button>
                </div>
                <Table
                    columns={tableColumns}
                    dataSource={list}
                    pagination={{ pageSize: state.per_page ,total:state.total_pages }}
                />
            </div>
        </Card>
    )
}

export default TodoList
