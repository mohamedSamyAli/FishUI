import React, { Component } from 'react'
import { Form, Input, InputNumber } from 'antd'
const { Item } = Form
export default class FixedCost extends Component {
    render() {
        return (
            <div>
                 <Item
                    name={["H_FixedCost","land"]}
                    label="الارض"
                    initialValue="0"
                >
                    <Input type="number" min={0} />
                </Item> 
                <Item
                    name={["H_FixedCost","bowl"]}
                    label="تكلفة الاحواض"
                    initialValue="0"
                >
                    <Input type="number" min={0} />
                </Item> 
                <Item
                    name={["H_FixedCost","equiopment"]}
                    label="المعدات"
                    initialValue="0"
                >
                    <Input type="number" min={0} />
                </Item> 
                <Item
                    name={["H_FixedCost","building"]}
                    label="المبانى"
                    initialValue="0"
                >
                    <Input type="number" min={0} />
                </Item> 
                <Item
                    name="totalFixedCost"
                    label="الاجمالى"
                    dependencies={[["H_FixedCost","building"],["H_FixedCost","equiopment"],["H_FixedCost","land"],["H_FixedCost","building"]]}
                    rules= {[
                        ({ getFieldValue ,setFieldsValue}) => ({
                            validator(rule, value) {
                                debugger
                                let FC =getFieldValue("H_FixedCost")
                                let sum =parseFloat(FC.land)+parseFloat(FC.bowl)+parseFloat(FC.equiopment)+parseFloat(FC.building)
                                
                                    setFieldsValue({totalFixedCost:sum})
                                    return Promise.resolve();
    
                            },
                          })]}
                >
                    <Input type="number" />
                </Item> 
            </div>
        )
    }
}
