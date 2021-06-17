import React, { useState, useEffect } from 'react'
import { Card, Table } from 'antd';
import 'antd/dist/antd.css';
import {Todolist} from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux';
import AvatarStatus from '../../Avatar/index'
const TodoList = () => {

    const [list, setList] = useState([])
     const dispatch = useDispatch()
     const state = useSelector(state=>state.todo.Lists)
           console.log(state)
      useEffect(()=>
      {
          dispatch(Todolist())
      }, [])
      
     
    useEffect(() => {
        setList(state.data)
    }, [state])
           

    const tableColumns = [
        {
            title: 'First Name',
            dataIndex: 'first_name',
          
        },
        {  
            title: 'Last Name',
            dataIndex: 'last_name',

        },
        {
            title: 'Profile',
            dataIndex: 'avatar',
            render: (_, record) => (
                <div className="d-flex">
                    <AvatarStatus size={60} type="square" src={record.avatar} />
                </div>
            ),
        },
        {
            title: 'Email',
            dataIndex: 'email',

        },
    ];


  


    return (
        <Card style={{margin:30}}>
         
            
            <div className="table-responsive">
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
