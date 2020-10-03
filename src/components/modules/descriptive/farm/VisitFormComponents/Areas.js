import React, { Component } from 'react'
import { Form, Input, Collapse, Upload, Button, DatePicker, Divider } from 'antd'

const { Item } = Form

export default class Areas extends Component {
    render() {
        return (
            <div>/
                <Item
                    name="mok32"
                    label="فدان"
                >
                    <Input></Input>
                </Item>
                <Item
                    name="mok32"
                    label="قيراط"
                >
                    <Input></Input>
                </Item>
                <Item
                    name="mok32"
                    label="سهم"

                >
                    <Input></Input>
                </Item>
                <table width="700" border="1"  >
                    <thead>

                    <tr>
                        <th rowspan="2" scope="col" width="175"><label style={{ fontSize: "18px", fontWeight: "bold" }}>نوع الملكية</label></th>
                        <th colspan="3" scope="col"><label style={{ fontSize: "18px", fontWeight: "bold" }}>المساحة </label></th>
                        <th width="226" rowspan="2" scope="col">&nbsp;</th>
                        <th width="31" rowspan="2" scope="col">&nbsp;</th>
                    </tr>
                    <tr>
                        <th width="30" scope="col"><label style={{ fontSize: "14px", fontWeight: "bold" }}>سهم</label></th>
                        <th width="49" scope="col"><label style={{ fontSize: "14px", fontWeight: "bold" }}>قيراط</label></th>
                        <th width="49" scope="col"><label style={{ fontSize: "14px", fontWeight: "bold" }}>فدان</label></th>
                    </tr>
                            </thead>
                            <tbody>
                    <tr>
                        <td align="right"><label style={{ fontSize: "14px", fontWeight: "bolder" }}>حكومية</label>   </td>
                        <td>
                            <Item
                                name="mok32"
                                
                                >
                                <Input></Input>
                            </Item></td>
                        <td>
                            <Item
                                name="mok32"
                                
                                >
                                <Input></Input>
                            </Item></td>
                        <td>
                            <Item
                                name="mok32"
                                
                                >
                                <Input></Input>
                            </Item></td>
                        <td align="right">&nbsp;</td>
                        <td align="right">&nbsp;</td>
                    </tr>
                    <tr>
                        <td align="right"><label style={{ fontSize: "14px", fontWeight: "bolder" }}>تمليك</label>   </td>
                        <td>
                            <Item
                                name="mok32"
                                
                            >
                                <Input></Input>
                            </Item></td>
                        <td>
                            <Item
                                name="mok32"
                                
                            >
                                <Input></Input>
                            </Item></td>
                        <td>
                            <Item
                                name="mok32"
                                
                            >
                                <Input></Input>
                            </Item></td>
                        <td align="right">&nbsp;</td>
                        <td align="right">&nbsp;</td>
                    </tr>
                    <tr>
                        <td align="right"><label style={{ fontSize: "14px", fontWeight: "bolder" }}> إيجار منفرد</label>   </td>
                        <td>
                            <Item
                                name="mok32"
                                
                            >
                                <Input></Input>
                            </Item></td>
                        <td>
                            <Item
                                name="mok32"
                                
                            >
                                <Input></Input>
                            </Item></td>
                        <td>
                            <Item
                                name="mok32"
                                
                            >
                                <Input></Input>
                            </Item></td>
                        <td>
                            <Item
                                name="mok32"
                                
                            >
                                <Input></Input>
                            </Item></td>
                        <td align="right" name="EEDate1" dir="rtl">
                            <label style={{ fontSize: "14px", fontWeight: "bolder" }}>إلى</label>
                            <Item
                                name="mok32"
                                
                            >
                                <Input></Input>
                            </Item>
                        </td>
                    </tr>
                    <tr>
                        <td align="right"><label style={{ fontSize: "14px", fontWeight: "bolder" }}> إيجار مشاركة</label>   </td>
                        <td>
                            <Item
                                name="mok32"
                                
                            >
                                <Input></Input>
                            </Item></td>
                        <td>
                            <Item
                                name="mok32"
                                
                            >
                                <Input></Input>
                            </Item></td>
                        <td>
                            <Item
                                name="mok32"
                                
                            >
                                <Input></Input>
                            </Item></td>
                        <td align="right" name="ESDate2" dir="rtl">
                            <label style={{ fontSize: "14px", fontWeight: "bolder" }}>فترة التأجير من</label>

                            <Item
                                name="mok32"
                                
                            >
                                <Input></Input>
                            </Item>
                        </td>

                        <td align="right" name="EEDate2" dir="rtl" >
                            <label style={{ fontSize: "14px", fontWeight: "bolder" }}>إلى</label>

                            <Item
                                name="mok32"
                            >
                                <Input></Input>
                            </Item>
                        </td>
                    </tr>
                    <tr>
                        <td align="right"><label style={{ fontSize: "14px", fontWeight: "bolder" }}> مخالف</label>   </td>
                        <td>
                            <Item
                                name="mok32"
                                
                            >
                                <Input></Input>
                            </Item></td>
                        <td>
                            <Item
                                name="mok32"
                                
                            >
                                <Input></Input>
                            </Item></td>
                        <td>
                            <Item
                                name="mok32"
                                
                            >
                                <Input></Input>
                            </Item></td>
                        <td align="right">&nbsp;</td>
                        <td align="right">&nbsp;</td>
                    </tr>
                    <tr>
                        <td align="right"><label style={{ fontSize: "14px", fontWeight: "bolder" }}> أخرى</label></td>
                        <td>
                            <Item
                                name="mok32"
                                
                            >
                                <Input></Input>
                            </Item></td>
                        <td>
                            <Item
                                name="mok32"
                                
                            >
                                <Input></Input>
                            </Item></td>
                        <td>
                            <Item
                                name="mok32"
                                
                            >
                                <Input></Input>
                            </Item></td>
                        <td align="right">
                            <Item
                                name="mok32"
                                
                            >
                                <Input></Input>
                            </Item>
                        </td>
                        <td align="right">&nbsp;</td>
                    </tr>
                    <tr style={{height:"20px"}}>
                        <td align="right" colspan="6" ><div style={{color:"blue"}} id="areaErr"></div></td>
                    </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}
