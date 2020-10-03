import { Button, Divider, Input, Form } from 'antd';
import React, { Component } from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import SelectorFetchComponent from '../../../../FormComponent/SelectorFetchComponent';


export default class Bowl extends Component {
    render() {
        return (

            <Form.List name="latLongs">
                {(fields, dn) => {
                    if (fields.length === 0) {
                        dn.add()
                        fields.push({ name: 0, key: 0, isListField: true, fieldKey: 0 })
                    }
                    return (
                        <div>
                            <table id="dataTable" name="dataTable" width="600" border="1">
                                <tr>
                                    <th>رقم الحوض وحجمه</th>
                                    <th>نوع الحوض</th>
                                    <th>نمط الاستزراع</th>
                                    <th>الانواع المستزرعه</th>
                                    <th>نوع السمك</th>
                                    <th>متوسط السمك بالكجم</th>
                                    <th>الانتاج الكلى بالكجم</th>
                                    <th>الكميه بالاف وحده</th>
                                    <th>متوسط سعر الكيلو بالجنيه</th>
                                </tr>
                                {fields.map((field, i) => (
                                    <tr>
                                        <td>
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'lat']}
                                                fieldKey={[field.fieldKey, 'lat']}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </td>
                                        <td>
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'lat']}
                                                fieldKey={[field.fieldKey, 'lat']}
                                            >
                                                <SelectorFetchComponent entity='gov' />
                                            </Form.Item>
                                        </td>
                                        <td>
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'lat']}
                                                fieldKey={[field.fieldKey, 'lat']}
                                            >
                                                <SelectorFetchComponent entity='gov' />
                                            </Form.Item>
                                        </td>
                                        <td>
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'lat']}
                                                fieldKey={[field.fieldKey, 'lat']}
                                            >
                                                <SelectorFetchComponent entity='gov' />
                                            </Form.Item>
                                        </td>
                                        <td>
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'lat']}
                                                fieldKey={[field.fieldKey, 'lat']}
                                            >
                                                <SelectorFetchComponent entity='gov' />
                                            </Form.Item>
                                        </td>
                                        <td>
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'lat']}
                                                fieldKey={[field.fieldKey, 'lat']}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </td>
                                        <td>
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'lat']}
                                                fieldKey={[field.fieldKey, 'lat']}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </td>
                                        <td>
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'lat']}
                                                fieldKey={[field.fieldKey, 'lat']}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </td>
                                        <td>
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'lat']}
                                                fieldKey={[field.fieldKey, 'lat']}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </td>
                                        <td className="Htable">
                                            {
                                                i > 0 ? <MinusCircleOutlined style={{ marginRight: "10px" }}
                                                    onClick={() => {
                                                        dn.remove(field.name);
                                                    }}
                                                /> : null
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </table>
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => {
                                        dn.add();
                                    }}
                                    block
                                >
                                    <PlusOutlined /> إضافة صف
                                    </Button>
                            </Form.Item>
                        </div>
                    );
                }}
            </Form.List>




        )
    }
}
