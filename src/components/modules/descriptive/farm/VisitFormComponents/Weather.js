import React, { Component } from 'react'
import { Form, Input } from 'antd'
import SelectorFetchComponent from '../../../../../components/FormComponent/SelectorFetchComponent'
const { Item } = Form
export default class Weather extends Component {
    render() {
        return (
            <div>
                <Item
                            name="mok32"
                            label="درجة الحراره C"
                        >
                            <Input></Input>
                        </Item>
                        <Item
                            name="mok32"
                            label="الرطوبه%"
                        >
                            <Input></Input>
                        </Item>
                        <Item
                            name="mok32"
                            label="سرعة الرياح(عقده)"
                        >
                            <Input></Input>
                        </Item>
                        <Item
                            name="mok32"
                            label="الامطار(m m)"
                        >
                            <Input></Input>
                        </Item>
                        <Item
                            name="mok32l"
                            label="البخر(m m)"
                        >
                            <Input></Input>
                        </Item>
                        <Item
                            name="mok32l"
                            label="اتجاه الرياح"
                        >
                            
                            <SelectorFetchComponent entity='WindDirection' />
                        </Item>
              
            </div>
        )
    }
}
