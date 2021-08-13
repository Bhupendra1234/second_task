
import React, { useState, useEffect } from 'react'
import { Card, Table, Button, Menu } from 'antd';
import Utils from '../../utils';
import { EyeOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import 'antd/dist/antd.css';
import Flex from '../../component/Flex';
import {  TodoDelete } from '../../redux/actions'
import { connect } from 'react-redux';

import EllipsisDropdown from '../../component/EllipsisDropDown'
const TodoList = (props) => {

    const { TodoDelete, todo } = props
    let history = useHistory();
    const [list, setList] = useState([])
    const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])
    


    useEffect(() => {
        setList(todo.Lists)
    }, [todo.Lists])




    const addCasino = () => {
        history.push(`/add-todo`)
    }

    const dropdownMenu = row => (
        <Menu>
            <Menu.Item onClick={() => viewDetails(row)}>
                <div alignItems="center">
                    <EyeOutlined />
                    <span className="ml-3">View Details</span>
                </div>
            </Menu.Item>
            <Menu.Item onClick={() => deleteRow(row)}>
                <Flex alignItems="center">
                    <DeleteOutlined />
                    <span className="ml-3">{selectedRows.length > 0 ? `Delete (${selectedRows.length})` : 'Delete'}</span>
                </Flex>
            </Menu.Item>
        </Menu>
    );

    const viewDetails = row => {

        history.push(`edit-todo/${row.id}`)
    }


    const deleteRow = row => {
        const objKey = 'id'
        let data = list
        if (selectedRows.length > 1) {
            selectedRows.forEach(elm => {
                data = Utils.deleteArrayRow(data, objKey, elm.id)
                setList(data)
                setSelectedRows([])
                TodoDelete(elm.id)

            })
        } else {
            console.log("dfdfsfsf", row)
            data = Utils.deleteArrayRow(data, objKey, row.id)
            setList(data)
            TodoDelete(row.id)
        }
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
        {
            title: 'Action',
            dataIndex: 'actions',
            render: (_, elm) => (
                <div className="text-right">
                    <EllipsisDropdown menu={dropdownMenu(elm)} />
                </div>
            )
        }

    ];

    const rowSelection = {
		onChange: (key, rows) => {
			setSelectedRows(rows)
			setSelectedRowKeys(key)
		}
	};



    return (
        <Card style={{ margin: 30 }}>

            <Flex alignItems="center" justifyContent="between" mobileFlex={false}  >
                <Flex>
                    <Button onClick={addCasino} type="primary" icon={<PlusCircleOutlined />} block>Add Todo</Button>
                </Flex>
            </Flex>
            <div className="table-responsive">
                <Table
                    columns={tableColumns}
                    dataSource={list}
                    rowKey='id' 
					rowSelection={{
						selectedRowKeys: selectedRowKeys,
						type: 'checkbox',
						preserveSelectedRowKeys: false,
						...rowSelection,
					}}
                    
                />
            </div>
        </Card>
    )
}

const mapStateToProps = (state) => {
    return { todo: state.todo }
}
const mapDispatchToProps = (dispatch) => {
    return {
        TodoDelete: (id) => dispatch(TodoDelete(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

