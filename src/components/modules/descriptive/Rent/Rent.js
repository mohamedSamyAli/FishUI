import React, { Component, useState } from 'react'
import { Form, Input, Collapse, Upload, Button, DatePicker, Select, Checkbox } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
import RenterType from './RenterType'
import RenterLand from './RenterLand'
import PaidMony from './PaidMony';
import DeservedMony from './DeservedMony';
import Decision from './Decision';
import InsuranceData from './InsuranceData';
const { Panel } = Collapse;
const { Option } = Select;
const { Item } = Form

const RenterSelector = (props) => {
    return (
        <Select
            {...props}
            defaultValue={1}
            showSearch
            style={{ width: 200 }}
            optionFilterProp="children"
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            <Option key={1} value={1}>شخص</Option>
            <Option key={2} value={2}>شركه</Option>
            <Option key={3} value={3}>شخص وشركاء</Option>
            <Option key={4} value={4}>جمعيه</Option>
        </Select>
    )
}
const RenterLandSelector = (props) => {
    return (
        <Select
            {...props}
            defaultValue={1}
            showSearch
            style={{ width: 250 }}
            optionFilterProp="children"
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            <Option key={1} value={1}>مزرعه</Option>
            <Option key={3} value={2}>خور</Option>
            <Option key={5} value={3}>ترع</Option>
            <Option key={6} value={4}>مصارف</Option>
            <Option key={8} value={5}>بركه</Option>
            <Option key={7} value={6}>مناطق التزام</Option>
            <Option key={4} value={7}>اشغالات الميناء</Option>
            <Option key={10} value={8}>حرم بحيرات</Option>
        </Select>
    )
}
const Rent = (props) => {
    const [type, settype] = useState(1)
    const [ltype, setLtype] = useState(1)
    let { TFC } = props
    // TFC.Triger = ({ getFieldValue, setFieldsValue, getFieldsValue }) => {

    //     let values = getFieldsValue("*")

    //     //#region totalPaid
    //     let sum = values.paidMonies.reduce(function (a, b) {
    //         return parseInt(a) + parseInt(b.value);
    //     }, 0);
    //     setFieldsValue({ totalPaid: sum ? sum : 0 })
    //     //#endregion


    //     //#region totalPrice

    //     if (values.hasOwnProperty("sahm")) {
    //         let totalArea = parseInt(values.fdan)
    //         if(values.sahm || values.kerat){
    //              totalArea += 1 
    //         }else{

    //         }
    //         setFieldsValue({ totalPrice: parseFloat(values.unitePrice) * Math.floor(totalArea) })

    //     } else {
    //         setFieldsValue({ totalPrice: parseFloat(values.unitePrice) * parseInt(values.totalArea) })

    //     }


    //     //#endregion


    // }
    const onRenterChange = (e) => {
        if (e)
            debugger
        settype(e)
        console.log(e)
    }
    const onRenterLChange = (e) => {
        if (e)
            setLtype(e)
        console.log(e)
    }
    return (
        <div className="main__wrapper">
            <h3 className="main__heading">
                إستمارة المزارع
             </h3>
            <div className="content__wrapper">
                <div className="collapsable__Sections">
                    <Collapse className="checkbox__collapsable-groups" activeKey={['1','2','3','4','5','6','7']} >
                        <Panel accordion={true} header="بيانات المستاجر" key='1'>
                            <Item
                                name={["rentContract", "renterTypeId"]}
                                label="نوع المستأجر"
                                getValueProps={onRenterChange}
                                initialValue={1}
                                rules={[{ required: true }]}
                            >
                                <RenterSelector />
                            </Item>
                            <RenterType type={type} />
                        </Panel>
                        <Panel accordion={true} header="بيانات القطعه المؤجره" key='2'>
                            <Item
                                name={["rentContract", "PartTypeId"]}
                                label="نوع القطعه"
                                getValueProps={onRenterLChange}
                                initialValue={1}
                                rules={[{ required: true }]} 
                            >
                                <RenterLandSelector />
                            </Item>
                            <RenterLand type={ltype} />
                        </Panel>
                        <Panel accordion={true} header="بيانات عامه عن العقد" key='3'>
                            <Item
                                name={["rentContract", "initialValue"]}
                                label={"القيمه الابتدائيه لتأجير" + `${type > 5 ? "المتر" : "الفدان"}`}
                                normalize={(v) => parseFloat(v)}
                                >
                                    <Input type="number" />
                            </Item>
                            <Item
                                name={["rentContract", "totalValue"]}
                                label="السعر الكلى"
                                normalize={(v) => parseFloat(v)}
                                >
                                    <Input type="number" />
                            </Item>
                            <Item
                                name={["rentContract", "annualIncrease"]}
                                label="الزياده السنويه"
                                normalize={(v) => parseFloat(v)}
                                >
                                    <Input type="number" />
                            </Item>
                            <Item
                                name={["rentContract", "valueIncreaseTypeId"]}
                                label="نوع الزياده الثانويه فى الايجار"
                                initialValue={1}
                            >
                                <Select
                                    {...props}
                                    showSearch
                                    style={{ width: 200 }}
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option key='1' value={1}>بسيطه</Option>
                                    <Option key='3' value={2}>مركبه</Option>
                                </Select>
                            </Item>
                            <Item
                                name={["rentContract", "startDate"]}
                                label="تاريخ بداية الايجار"
                                dependencies={[["rentContract",'endDate']]}
                                rules= {[{ required: true },
                                    ({ getFieldValue ,setFieldsValue}) => ({
                                        validator(rule, value) {
                                            debugger
                                            let start = getFieldValue(["rentContract","startDate"])
                                            let end   = getFieldValue(["rentContract","endDate"])
                                            if (!start || !end ){
                                                return Promise.resolve();
                                            }
            
                                            let temp =end._d-start._d
                                            
                                            if (temp>0) {
                                                setFieldsValue({farmVisit:{farmingDaysCount:Math.floor(Math.abs(temp/1000/24/60/60))}})
                                                return Promise.resolve();
                                            }
                                          return Promise.reject('تاريخ البدايه اكبر من تاريخ الحصاد');
                                        },
                                      })]}
                                >
                                <DatePicker />
                            </Item>
                            <Item
                                name={["rentContract", "endDate"]}
                                label="تاريخ نهاية الايجار"
                                rules={[{ required: true }]}
                                >
                                <DatePicker />
                            </Item>
                            <Item
                                name={["rentContract", "archivedContractNumber"]}
                                label="الرقم الارشيفي للعقد">
                                <Input />
                            </Item>
                            <Item
                                name={["rentContract", "refId"]}
                                label="نسخه مصوره من العقد">
                                <Upload >
                                    <Button>
                                        <UploadOutlined /> Click to upload
                                </Button>
                                </Upload>
                            </Item>                </Panel>
                        <Panel accordion={true} header="التأمين" key='4'>
                            <InsuranceData />
                        </Panel>
                        <Panel accordion={true} header="المبلغ الذى تم تسديده" key='5'>
                            <PaidMony />
                        </Panel>
                        <Panel accordion={true} header="الأموال المستحقه وغرامة التأخير" key='6'>
                            <DeservedMony />
                        </Panel>
                        <Panel accordion={true} header="قرارات إداريه" key='7'>
                            <Decision />
                        </Panel>
                    </Collapse>
                </div>
            </div>
        </div>
    )
}
export default Rent