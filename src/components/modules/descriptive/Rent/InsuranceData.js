import React, { Component } from 'react'
import { Form, Input, Upload, Button, DatePicker, Select } from 'antd'

const {Option} = Select
const {Item} = Form
export default class InsuranceData extends Component {
    render() {
        return (
            <div>
                <Item
                        name={["rentContract", "insurancePaymentDate"]}
                        label="تاريخ السداد">
                        <DatePicker />
                    </Item>
                    <Item
                        name={["rentContract", "insuranceValue"]}
                        label="المبلغ"
                        normalize={parseFloat}
                        >
                        <Input type="number"/>
                    </Item>
                    <Item
                        name={["rentContract", "insuranceReceipt"]}
                        label="رقم ايصال سداد المطالبه">
                        <Input />
                    </Item>
                    <Item
                        name={["rentContract", "InsurancePaymentTypeId"]}
                        label="حالة مبلغ التامين">
                        <Select
                            // {...props}
                            defaultValue={1}
                            showSearch
                            style={{ width: 200 }}
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option key='1' value={1}>مصادره</Option>
                            <Option key='3' value={2}>استرداد</Option>
                            <Option key='3' value={2}>تحويل</Option>
                        </Select>
                    </Item>
            </div>
        )
    }
}
