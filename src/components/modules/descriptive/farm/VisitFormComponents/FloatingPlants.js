import React, { Component } from 'react'
import { Form, Input} from 'antd'
const { Item } = Form
export default class FloatingPlants extends Component {
    render() {
        return (
            <div>
                  <Item
                            label="عدد وحدات الهائمات النباتية"
                            name={["bioChar", "bc"]}
                        >
                            <Input type="number" />
                        </Item>
                        <lable>عدد وحدات عائلات الهائمات النباتية </lable>
                        <Item
                            label="الدياتومات"
                            name={["bioChar", "bc"]}
                        >
                            <Input type="number" />
                        </Item>
                        <Item
                            label="الطحالب الخضراء"
                            name={["bioChar", "bc"]}
                        >
                            <Input type="number" />
                        </Item>
                        <Item
                            label="الطحالب الخضراء المزرقة"
                            name={["bioChar", "bc"]}
                        >
                            <Input type="number" />
                        </Item>
                        <Item
                            label="اخرى"
                            name={["bioChar", "bc"]}
                        >
                            <Input type="number" />
                        </Item>
                        <Item
                            label="تركيزات الكلوروفيل أ لكل مللي جرام / لتر ماء"
                            name={["bioChar", "bc"]}
                        >
                            <Input type="number" />
                        </Item>
                        <Item
                            label="عدد الطحالب الملتصقة فوق النباتات لكل جرام وزن صافى من النبات"
                            name={["bioChar", "bc"]}
                        >
                            <Input type="number" />
                        </Item>


            </div>
        )
    }
}
