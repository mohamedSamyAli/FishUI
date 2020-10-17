import React, { Component, useState } from 'react'
import { Form, Input, Select } from 'antd'

const { Option } = Select;
const { Item } = Form

const RenterType = (props) => {
    let { type } = props

    return (<>
        {
            (type == 1 || type == 3) && (<div>
                <Item
                    name={["rentContract", "name"]}
                    label="اسم الشخص"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["rentContract", "title"]}
                    label="اللقب"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["rentContract", "address"]}
                    label="العنوان"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["rentContract", "telephone"]}
                    label="رقم الهاتف"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["rentContract", "nID"]}
                    label="الرقم القومى"
                    rules={[{
                        required: true,
                        // type: "number",
                        len: 14,
                        message: "يجب ادخال الرقم القومى المكون من 14 رقم"
                    }]}
                >
                    <Input type="number"></Input>
                </Item>
                <Item
                    name={["rentContract", "job"]}
                    label="الوظيفه"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
            </div>)
        }
        {
            type == 2 && (<div>
                <Item
                    name={["rentContract", "companyTypeId"]}
                    label="نوع الشركه"
                    initialValue="1"
                    rules={[{ required: true }]}
                >
                    <Select
                        style={{ width: 250 }}
                        showSearch
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option key='1' value='1'>استثماريه</Option>
                        <Option key='2' value='2'>غير استثماريه</Option>

                    </Select>
                </Item><Item
                    name={["rentContract", "companyName"]}
                    label="اسم الشركه"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["rentContract", "name"]}
                    label="اسم مفوض الشركه"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["rentContract", "address"]}
                    label="عنوان الشركه"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["rentContract", "telephone"]}
                    label="رقم الهاتف"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["rentContract", "nID"]}
                    label="الرقم القومى"
                    rules={[{
                        required: true,
                        // type: "number",
                        len: 14,
                        message: "يجب ادخال الرقم القومى المكون من 14 رقم"
                    }]}
                >
                    <Input type="number"></Input>
                </Item>
                <Item
                    name={["rentContract", "commercialID"]}
                    label="رقم السجل التجارى"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
            </div>)
        }
        {
            type == 4 && (<div>
                <Item
                    name={["rentContract", "name"]}
                    label="اسم مفوض الجمعيه"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["rentContract", "nID"]}
                    label="الرقم القومى"
                    rules={[{
                        required: true,
                        // type: "number",
                        len: 14,
                        message: "يجب ادخال الرقم القومى المكون من 14 رقم"
                    }]}
                >
                    <Input type="number"></Input>
                </Item>
                <Item
                    name={["rentContract", "companyName"]}
                    label="اسم الجمعيه"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["rentContract", "address"]}
                    label="عنوان الجمعيه"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["rentContract", "telephone"]}
                    label="رقم الهاتف"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["rentContract", "commercialID"]}
                    label="رقم السجل التجارى"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
            </div>)
        }
    </>
    )
}

export default RenterType