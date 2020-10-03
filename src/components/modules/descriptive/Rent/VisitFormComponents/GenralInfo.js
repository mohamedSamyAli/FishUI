import React, { Component } from 'react'
import { Form, Input, Collapse,DatePicker } from 'antd'
import SelectorFetchComponent from '../../../../../components/FormComponent/SelectorFetchComponent'
const { Item } = Form
export default class GenralInfo extends Component {
    render() {
        return (
            <div>
                    <Item
                            name="mok32"
                            label="كود المزرعه"
                        >
                            <Input></Input>
                        </Item>

                        <Item
                            name="date"
                            label="التاريخ"
                        >
                            <DatePicker />
                        </Item>
                        <Item
                            name="mok13"
                            label="اسم صاحب المزرعه"
                        >
                            <Input></Input>
                        </Item>
                        <Item
                            name="mok13"
                            label="اسم المزرعه"
                        >
                            <Input></Input>
                        </Item>
                        <Item
                            name='userGovId'
                            label="المحافظه"
                            rules={[{ required: true, message: `ادخل المحافظه` }]}
                        >
                            <SelectorFetchComponent parentE="GovEvents" entity='gov' />
                        </Item>
                        <Item
                            label='اسم البحيرة'
                            name="lakegov"
                        >
                            <SelectorFetchComponent ChildE="lakegov" parentE="GovEvents" entity='lakegov' />
                        </Item>
                        <Item
                            name="mok3"
                            label="الموقع"
                        >
                            <Input></Input>
                        </Item>
                        <Item
                            name='markz'
                            label="المركز"
                            rules={[{ required: true, message: `ادخل المركز` }]}
                        >
                            <SelectorFetchComponent ChildE="markaz" parentE="GovEvents" entity='markaz' />
                        </Item>
                        <Item
                            name='ageId'
                            label="منطقة الثروه السمكيه"
                            rules={[{ required: true, message: `ادخل المنطقه` }]}
                        >
                            <SelectorFetchComponent ChildE="fisherDesk" parentE="GovEvents" entity='gafard' />
                        </Item>
                        <Item
                            name="ٍSampleN"
                            label="الوظيفه"
                        >
                            <Input />
                        </Item>
                        <Item
                            name="mok32"
                            label="رقم البطاقه"
                            rules={[{ max: 14 }, { type: "number" }]}
                        >
                            <Input />
                        </Item>

                        <Item
                            name='gafard'
                            label="عمر المزرعة السمكية"
                            rules={[{ required: true, message: `ادخل المنطقه` }]}
                        >
                            <SelectorFetchComponent entity='age' />
                        </Item>
            </div>
        )
    }
}
