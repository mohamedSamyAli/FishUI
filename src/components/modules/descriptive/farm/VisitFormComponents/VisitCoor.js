import { Button, Divider, Input,Form } from 'antd';
import React, { Component } from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { getManytextFields_FormItem } from '../../../../../FormDescription/helpers';

export default class VisitCoor extends Component {
    render() {
        return (
            <div>
            <Divider />
            <h4 className="form__sectionDivider-text">
                نقطة داخل المزرعة
                </h4>
            <Divider />
            {getManytextFields_FormItem(
                ["elev", "long", "lat"],
                ['ارتفاع منسوب الارض(متر) Elevation', 'Longitude', 'Latitude'],
                [],
                [])}
            <div className="form__sectionDivider">

                    <Divider />
                    <h4 className="form__sectionDivider-text">
                    احداثيات المكان
                        </h4>
                        <Divider />

                    <Form.List label="احداثيات المكان"  name="latLongs">
                {(fields, dn) => {
                    if (fields.length === 0) {
                        dn.add()
                        fields.push({ name: 0, key: 0, isListField: true, fieldKey: 0 })
                    }
                    return (
                        <div>
                            <table id="dataTable" name="dataTable" width="600" border="1">
                                <tr>
                                    <td align="center" bgcolor="#c6c4c4" ><label style={{fontSize:"14px", fontWeight: "bold"}}>Latitude</label></td>
                                    <td align="center" bgcolor="#c6c4c4"><label style={{fontSize:"14px", fontWeight: "bold"}}>Longitude</label></td>
                                    <td align="center" bgcolor="#c6c4c4"><label style={{fontSize:"14px", fontWeight: "bold"}}>أرتفاع منسوب الارض ( متر ) Elevation</label></td>
                                </tr>
                                {fields.map((field, i) => (
                                    <tr>
                                        <td align="center">
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'lat']}
                                                fieldKey={[field.fieldKey, 'lat']}
                                            >
                                                <Input  />
                                            </Form.Item>
                                        </td>
                                        <td align="center">
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'lon']}
                                                fieldKey={[field.fieldKey, 'lon']}
                                            >
                                                <Input/>
                                            </Form.Item>
                                        </td>
                                        <td align="center">
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'ele']}
                                                fieldKey={[field.fieldKey, 'ele']}
                                            >
                                                <Input/>
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
                  </div>
                  </div>
        )
    }
}
