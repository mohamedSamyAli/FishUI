import React, { Component } from 'react'
import { Form, Input, Collapse, Upload, Button, DatePicker, Divider } from 'antd'
import SelectorFetchComponent from '../../../../FormComponent/SelectorFetchComponent'

const { Item } = Form
export default class Food extends Component {
    render() {
        return (
            <div>
              <Item
                    name="mok322"
                    label="نوع العلف"
                >
                    <SelectorFetchComponent entity="gov"/>
                </Item>  
                <Item
                    name="mok3s2"
                    label="البروتين الخام %"
                >
                    <Input></Input>
                </Item>
                <Item
                    name="mok32v"
                    label="لطاقة (DE) (Kcal/g)"
                >
                    <Input></Input>
                </Item>
                <Item
                    name="moklk32"
                    label="DP للبروتين المهضوم %"
                >
                    <Input></Input>
                </Item>
                <Item
                    name="mok32"
                    label="قيمة DE\DP"
                >
                    <SelectorFetchComponent entity="gov"/>
                </Item>
            </div>
        )
    }
}
