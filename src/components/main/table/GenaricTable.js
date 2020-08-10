import React, { Component } from 'react';
import { Table, Space, Form, Button } from 'antd';
import { baseURl } from '../../../URLS';
import { Plus } from 'react-feather';
import ButtonComponent from '../button'
import TableAction from './tableActions';
import ModelComponent from '../model';
import './table.css';
import './Form.css';
import './inputField.css'
import GenaricForm from '../../Tables/GenaricForm';
import LakeQV from '../../../FormDescription/Com_Form/LakeQV';

var $ = require("jquery");

const axios = require('axios');
let myForm = {}
class GenaricTable extends Component {
    constructor(props) {
        console.log("jjjj", $)
        super(props);

        this.update = false;
        this.state = {
            data: [],
            ModalText: 'Content of the modal',
            visible: false,
            confirmLoading: false,
            initialValues: {}
        }

        console.log(this)
    }
    componentWillMount() {
        this.schema = {
            ...this.props.schema,
            columns: [...this.props.schema.columns]
        }
        this.schema.columns = this.schema.columns.map(e => {
            return {
                ...e,
                render: e.render ? e.render : text => <div>{text ? text : <p style={{ color: 'red' }}>لايوجد</p>}</div>
            }
        })
        if (this.props.update || this.schema.del) {
        } else {
            this.schema.columns.push({
                title: 'الافعال',
                fixed: 'right',
                key: "actionss",
                render: (text, record) => (
                    <Space size="middle">
                        {this.schema.update ? null : <TableAction type="edit" onClick={() => { this.onClickUpdate(record[this.schema.id]) }}></TableAction>}
                        {this.schema.del ? null : <TableAction type="delete" onClick={() => { this.onClickDelete(record[this.schema.id]) }}></TableAction>}
                    </Space>
                ),
            }
            )
        }
    }
    onClickDelete(id) {
        axios.delete(baseURl + this.props.schema.endPoint + "/" + id).then(e => {
            alert("تم المسح")
        }).catch(e => {
            alert("لم يتم المسح")
        })
    }
    onClickUpdate(id) {
        this.updateId = id;
        axios.get(baseURl + this.props.schema.endPoint + "/" + id)
            .then((response) => {
                console.log(response.data)
                console.log(this.props.schema.sendParser ? this.props.schema.sendParser(response.data) : response.data)
                this.setState({ initialValues: this.props.schema.sendParser ? this.props.schema.sendParser(response.data) : response.data })
                this.showModal();
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    onClickAdd = () => {
        this.setState({ initialValues: {} })
        this.showModal()
    }
    showModal = () => {
        debugger
        this.setState({
            visible: true,
        });
    };
    handleOk = () => {
    };
    solve = (...data) => {
        let temp = []
        data.forEach(e => {
            if (e) {
                temp.push(...e)
            }
        })
        return temp.map(e => {
            return { roleId: e }
        })
    }
    onFinish = (e) => {
        console.log(myForm)
        console.log(e)
    }
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };
    fetchData = () => {
        axios.get(baseURl + this.props.schema.endPoint)
            .then((response) => {
                console.log(response.data)
                this.setState({ data: this.props.schema.data(response.data) })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    componentDidMount() {
        if (this.props.schema.endPoint) {
            this.fetchData()
        } else {
            this.setState({ data: this.props.schema.data(this.props.data) })
        }
    }
    onFormChange = () => {
        if (this.props.schema.formTriger) {
            this.props.schema.formTriger.forEach(e => {
                e(myForm)
            })
        }
    }
    render() {
        const { visible, confirmLoading } = this.state;
        const { filters, button, columns, data } = this.props
        return (
            <>


                <div className="table__Actions">
                    <ButtonComponent action={this.onClickAdd} bgcolor="primary" txcolor="white" type="primary">
                        <div className="center__item" >
                            <Plus />
                                    أضافة
                                </div>
                    </ButtonComponent>
                </div>
                <Table
                    columns={this.schema.columns}
                    dataSource={this.state.data}
                    scroll={{ x: 'max-content', y: 250 }} />
                {visible && (
                    <ModelComponent hideModal={this.handleCancel} title=" إضافة وظيفة جديد" visible={visible}>
                       <div className="doubleCellForm__wrapper">

                        <Form className="form_container"
                            ref={el => { myForm = el }}
                            onFieldsChange={this.onFormChange}
                            name="validate_other"
                            onFinish={this.onFinish}
                            initialValues={this.state.initialValues}
                            >
                            <LakeQV/>
                            {/* <GenaricForm schema={this.props.schema.formSchema} /> */}
                            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                                <Button type="primary" htmlType="submit" onClick={() => { console.log("smsm") }}>
                                    Submit
             </Button>
                            </Form.Item>
                        </Form>
                            </div>
                    </ModelComponent>
                )}
            </>

        );
    }
}

export default GenaricTable;
// <Modal
//     width="95%"
//     title="Title"
//     visible={visible}
//     onOk={this.handleOk}
//     confirmLoading={confirmLoading}
//     onCancel={this.handleCancel}
// >
//     <Form
//         ref={el => { myForm = el }}
//         onFieldsChange={this.onFormChange}
//         name="validate_other"
//         onFinish={this.onFinish}
//         initialValues={this.state.initialValues}
//     >
//         <GenaricForm schema={this.props.schema.formSchema} />
//         <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
//             <Button type="primary" htmlType="submit" onClick={() => { console.log("smsm") }}>
//                 Submit
//              </Button>
//         </Form.Item>
//     </Form>
// </Modal>