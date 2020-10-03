import React, { Component } from 'react'
import { Form, Input, Collapse, Upload, Button, DatePicker, Divider } from 'antd'

const { Item } = Form
export default class Durations extends Component {
    render() {
        return (
            <div>
                <Item
                    name="farmingStartDate"
                    label="تاريخ الاستزراع"
                    dependencies={['farmingCollectingDate']}
                    rules= {[
                        ({ getFieldValue ,setFieldsValue}) => ({
                            validator(rule, value) {
                                
        
                                let temp =getFieldValue("farmingCollectingDate")._d-getFieldValue("farmingStartDate")._d
                                
                                if (temp>0) {
                                    setFieldsValue({farmingDaysCount:Math.floor(Math.abs(temp/1000/24/60/60))})
                                    return Promise.resolve();
                                }
                              return Promise.reject('تاريخ البدايه اكبر من تاريخ الحصاد');
                            },
                          })]}
                >
                    <DatePicker/>
                </Item>  
                <Item
                    name="farmingCollectingDate"
                    label="تاريخ الحصاد"
                    dependencies={['farmingStartDate']}
                    rules= {[
                        ({ getFieldValue ,setFieldsValue}) => ({
                            validator(rule, value) {
                                
                                let temp =getFieldValue("farmingCollectingDate")._d-getFieldValue("farmingStartDate")._d
                                
                                if (temp>0) {
                                    setFieldsValue({farmingDaysCount:Math.floor(Math.abs(temp/1000/24/60/60))})
                                    return Promise.resolve();
                                }
                              return Promise.reject('تاريخ الحصاد اكبر من تاريخ بداية الاستزراع');
                            },
                          })]}
                >
                    <DatePicker/>
                </Item>  
                <Item
                    name="farmingDaysCount"
                    label="مدة الاستزراع (يوم)"
                >
                    <Input type="number" disabled/>
                </Item>  

            </div>
        )
    }
}
