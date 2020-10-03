import React, { Component } from 'react'
import { Form, Input} from 'antd'
import SelectorFetchComponent from '../../../../FormComponent/SelectorFetchComponent'

const { Item } = Form

export default class SoilCh extends Component {
    render() {
        return (
            <div>
                 <Item
                            label="نوع التربه"
                            name="sDd"
                        >
<SelectorFetchComponent entity="soiltypelt"/>
                        </Item>
                  <Item
                            label="درجة الملوحه لكل جرام /لتر"
                            name="dsD"
                        >
                            <Input />
                        </Item>
                        <Item
                            label="درجة الحموضه PH"
                            name="PH"
                        >
                            <Input />
                        </Item>
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
            </div>
        )
    }
}
