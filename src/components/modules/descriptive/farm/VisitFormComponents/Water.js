import React, { Component } from 'react'
import { Form, Input } from 'antd'
import SelectorFetchComponent from '../../../../FormComponent/SelectorFetchComponent'

const { Item } = Form
export default class Water extends Component {
    render() {
        return (
            <div>
                <Item
                    label="مصدر المياه"
                    name="sDd"
                >
                    <SelectorFetchComponent entity="WaterSource" />
                </Item>
                <Item
                    label="نوعية المياه"
                    name="sDd"
                >
                    <SelectorFetchComponent entity='WaterType' />
                </Item>
                <Item
                    label="معدل تغير المياه بالمتر المكعب"
                    name="sDd"
                >
                    <Input />
                </Item>
            </div>
        )
    }
}
