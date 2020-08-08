import React, { Component } from 'react';
import { Table, Tag, Space, Form, Input, Button } from 'antd';
import ColumnGroup from 'antd/lib/table/ColumnGroup';
import Column from 'antd/lib/table/Column';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

class SpProdutionComponent extends Component {

    render() {
        return (
            <div>
                <Form.List name="users">
                    {(fields, dn) => {
                        if(fields.length===0){
                            fields.push({name: 0, key: 0, isListField: true, fieldKey: 0})
                        }
                        debugger
                        return (
                            <div>
                                {fields.map((field,i) => (
                                    <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="start">
                                        <Form.Item
                                            {...field}
                                            name={[field.name, 'first']}
                                            fieldKey={[field.fieldKey, 'first']}
                                            rules={[{ required: true, message: 'Missing first name' }]}
                                        >
                                            <Input placeholder="First Name" />
                                        </Form.Item>
                                        <Form.Item
                                            {...field}
                                            name={[field.name, 'last']}
                                            fieldKey={[field.fieldKey, 'last']}
                                            rules={[{ required: true, message: 'Missing last name' }]}
                                        >
                                            <Input placeholder="Last Name" />
                                        </Form.Item>
                                        {
                                            i>0?<MinusCircleOutlined
                                                onClick={() => {
                                                dn.remove(field.name);
                                                }}
                                            />:null
                                        }
                                    </Space>
                                ))}

                                <Form.Item>
                                    <Button
                                        type="dashed"
                                        onClick={() => {
                                            dn.add();
                                        }}
                                        block
                                    >
                                        <PlusOutlined /> Add field
                </Button>
                                </Form.Item>
                            </div>
                        );
                    }}
                </Form.List>
            </div>
        );
    }
}

export default SpProdutionComponent;