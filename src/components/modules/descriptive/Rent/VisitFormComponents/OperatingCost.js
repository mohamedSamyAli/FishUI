import React, { Component } from 'react'
import { Form, Input, InputNumber } from 'antd'
const { Item } = Form
export default class OperatingCost extends Component {
    render() {
        return (
            <div>
                 <Item
                    name={["H_OperatingCost","Food"]}
                    label="الاعلاف"
                    initialValue="0"
                >
                    <Input type="number" min={0} />
                </Item> 
                <Item
                    name={["H_OperatingCost","Fertilizers"]}
                    label="الاسمده العضويه والكميائيه"
                    initialValue="0"
                >
                    <Input type="number" min={0} />
                </Item> 
                <Item
                    name={["H_OperatingCost","Power"]}
                    label="الطاقه"
                    initialValue="0"
                >
                    <Input type="number" min={0} />
                </Item> 
                <Item
                    name={["H_OperatingCost","Maintenance"]}
                    label="الصيانه"
                    initialValue="0"
                >
                    <Input type="number" min={0} />
                </Item> 
                <Item
                    name={["H_OperatingCost","Tax"]}
                    label="ضرائب ورسوم"
                    initialValue="0"
                >
                    <Input type="number" min={0} />
                </Item> 
                <Item
                    name={["H_OperatingCost","Rent"]}
                    label="اجور"
                    initialValue="0"
                >
                    <Input type="number" min={0} />
                </Item> 
                <Item
                    name={["H_OperatingCost","Other"]}
                    label="اخرى"
                    initialValue="0"
                >
                    <Input type="number" min={0} />
                </Item> 
                <Item
                    name="totalVariableCost"
                    label="الاجمالى"
                    dependencies={[["H_OperatingCost","Food"]
                                 ,["H_OperatingCost","Fertilizers"]
                                 ,["H_OperatingCost","Power"]
                                 ,["H_OperatingCost","Maintenance"]
                                 ,["H_OperatingCost","Tax"]
                                 ,["H_OperatingCost","Rent"]
                                 ,["H_OperatingCost","Other"]
                                ]}
                    rules= {[
                        ({ getFieldValue ,setFieldsValue}) => ({
                            validator(rule, value) {
                                debugger
                                let FC =getFieldValue("H_OperatingCost")
                                let sum =parseFloat(FC.Food)+parseFloat(FC.Fertilizers)+parseFloat(FC.Power)+parseFloat(FC.Maintenance)+parseFloat(FC.Tax)+parseFloat(FC.Rent)+parseFloat(FC.Other)
                                
                                    setFieldsValue({totalVariableCost:sum})
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
