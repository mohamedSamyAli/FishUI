import React, { Component } from 'react'
import { Form, Input } from 'antd'

const { Item } = Form
export default class NonOrganicFilter extends Component {
    render() {
        return (
            <div>
                <Item
                    name="mok322"
                    label="يوريا كجم/الفدان"
                >
                    <Input/>
                </Item>
                <Item
                    name="mok322"
                    label="نترات امونيا م3/الفدان"
                >
                    <Input/>
                </Item>
                <Item
                    name="mok322"
                    label="سوبر فوسفات كجم/الفدان"
                >
                    <Input/>
                </Item>
                <Item
                    name="mok322"
                    label="أخرى كجم/الفدان"
                >
                    <Input/>
                </Item>
            </div>
        )
    }
}
