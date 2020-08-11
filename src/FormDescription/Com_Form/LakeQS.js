import React, { Component } from 'react'
import { Form, Input, Collapse, Upload, Button } from 'antd'
import DateQuerterComponent from '../../components/FormComponent/DateQuerterComponent'
import SelectorFetchComponent from '../../components/FormComponent/SelectorFetchComponent'
import { getManytextFields_FormItem } from '../helpers'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
const { Panel } = Collapse;
const { Item } = Form
export default class LakeQS extends Component {
    render() {
        return (
            <div className="collapsable__Sections">

                <Collapse className="checkbox__collapsable-groups" defaultActiveKey={['232225']}>
                    
                    <Panel header="معلومات عامه" key='232'>

                        <Item
                            name="date"
                            label="التاريخ"
                        >
                            <DateQuerterComponent />
                        </Item>
                        <Item
                            name='userGovId'
                            label="المحافظه"
                            rules={[{ required: true, message: `ادخل المحافظه` }]}
                        >
                            <SelectorFetchComponent parentE="GovEvents" entity='gov' />
                        </Item>
                        <Item
                            label='اسم البحيره/نهر النيل/مفيض توشكي/قناة السويس'
                            name="lakegov"
                            rules={[{ required: true, message: `مطلوب` }]}
                        >
                            <SelectorFetchComponent ChildE="lakegov" parentE="GovEvents" entity='lakegov' />
                        </Item>
                        <Item
                            name="mok3"
                            label="الموقع"
                        >
                            <Input></Input>
                        </Item>
                        <Item
                            name='markz'
                            label="المركز"
                            rules={[{ required: true, message: `ادخل المركز` }]}
                        >
                            <SelectorFetchComponent ChildE="markaz" parentE="GovEvents" entity='markaz' />
                        </Item>
                        <Item
                            name='gafard'
                            label="المنطقه"
                            rules={[{ required: true, message: `ادخل المنطقه` }]}
                        >
                            <SelectorFetchComponent ChildE="fisherDesk" parentE="GovEvents" entity='fisherDesk' />
                        </Item>
                        <Item
                            name="ٍSampleN"
                            label="رقم العينه كود المحطه"
                        >
                            <Input type="number" />
                        </Item>
                        <Item
                            name="mok3"
                            label="العلامات الارضيه ان وجدت"
                        >
                            <Input />
                        </Item>
                    </Panel>
                    <Panel header="الاحداثيات" key="الاحداثيات" >
                        {getManytextFields_FormItem(
                            ["elev", "long", "lat"],
                            ['ارتفاع منسوب الارض(متر) Elevation', 'Longitude', 'Latitude'],
                            [],
                            [])}
                        <Item
                            name="pic"
                            label="الصوره ان وجدت"
                        >
                            <Upload name="logo" action="/upload.do" listType="picture">
                                <Button>
                                    <UploadOutlined /> Click to upload
                                </Button>
                            </Upload>
                        </Item>
                    </Panel>

                    <Panel header="المناخ" key="المناخ" >

                        {getManytextFields_FormItem(
                            ["boatN", 'ownerN', 'usedNet', 'usedboat', 'others'],
                            [
                                "درجة الحراره C"
                                , "الرطوبه%"
                                , "سرعة الرياح(عقده)"
                                , "الامطار(m m)"
                                , "البخر(m m)"
                            ]
                            , [false, false, false, false, false],
                            [])}
                        <Item
                            name='WD'
                            label="اتجاح الرياح"
                        >
                            <SelectorFetchComponent entity='winddirectionlt' />
                        </Item>
                    </Panel>

                    <Panel header="عينات التربه" key="عينات التربه" >
                        <Item
                            label="نسبة الرطوبه%"
                            name="rotoba"
                        >
                            <Input />
                        </Item>
                        <Item
                            name='WD'
                            label="التحليل الميكانيكي للتربه"
                        >
                            <SelectorFetchComponent entity='soiltypelt' />
                        </Item>
                    </Panel>
                    <Panel header=" الخواص الكميائيه للتربه" key="الخواص الك للتربه" >
                        <Item
                            label="درجة الملوحه لكل جرام /لتر"
                            name="sD"
                        >
                            <Input />
                        </Item>
                        <Item
                            label="درجة الحموضه PH"
                            name="PH"
                        >
                            <Input />
                        </Item>
                    </Panel>
                    <Panel header=" التحليل الكميائي" key="التحليل الكميائي" >
                        <Item
                            label="نسبة المواد العضويه"
                            name="sdfdd"
                        >
                            <Input />
                        </Item>
                        <Item
                            label="تركيز الكربونات ملجم/لتر"
                            name="fgkr"
                        >
                            <Input />
                        </Item>
                        <Item
                            label="تركيز الفوسفات ملجم/لتر"
                            name="fgkr"
                        >
                            <Input />
                        </Item>
                        <Item
                            label="تركيز الكبريتات ملجم/لتر"
                            name="fgkr"
                        >
                            <Input />
                        </Item>
                    </Panel>
                    <Panel header="النباتات" key="النباتات" >
                    <Item
                            name='plants'
                            label="النباتات"
                        >
                            <SelectorFetchComponent entity='plantlt' />
                        </Item> 
                    </Panel>
                    <Panel header="الجدول الغبي" key="الجدول الغبي" >
                    </Panel>
                    <Panel header="الجدول الغبي" key="الجدول الغبي" >
                    </Panel>
                </Collapse>
                </div>
        )
    }
}
