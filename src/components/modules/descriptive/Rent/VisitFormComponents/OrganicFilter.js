import React, { Component } from 'react'
import { Form, Input } from 'antd'

const { Item } = Form
export default class OrganicFilter extends Component {
    render() {
        return (
            <div>
                <Item
                    name="mok322"
                    label="سماد بلدى م3/الفدان"
                >
                    <Input/>
                </Item>
                <Item
                    name="mok322"
                    label="زرق دواجن م3/الفدان"
                >
                    <Input/>
                </Item>
                <Item
                    name="mok322"
                    label="أخرى م3/الفدان"
                >
                    <Input/>
                </Item>
            </div>
        )
    }
}
