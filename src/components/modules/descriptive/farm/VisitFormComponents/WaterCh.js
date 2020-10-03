import React, { Component } from 'react'
import { Form, Input, Collapse} from 'antd'

import HMTable from './HMTable'

const { Panel } = Collapse;
const { Item } = Form
export default class WaterCh extends Component {
    render() {
        return (
            <div>
                <Item
                            label="C درجة الحرارة"
                            name={["chemicalChar", "cc"]}
                        >
                            <Input type="number" />
                        </Item>
                        <Item
                            label="الأس الهيدروجينى للعينه"
                            name={["chemicalChar", "cc"]}
                        >
                            <Input type="number" />
                        </Item>
                        <Item
                            label="الأملاح الذائبة لكل جرام/لتر"
                            name={["chemicalChar", "cc"]}
                        >
                            <Input type="number" />
                        </Item>
                        <Item
                            label="القلوية لكل مللى جرام/لتر"
                            name={["chemicalChar", "cc"]}
                        >
                            <Input type="number" />
                        </Item>
                        <Item
                            label="الأكسجين الذائب لكل مللى جرام /لتر"
                            name={["chemicalChar", "cc"]}
                        >
                            <Input type="number" />
                        </Item>
                        <Item
                            label="الأكسجين المستهلك حيويا لكل مللى جرام أكسجين/لتر"
                            name={["chemicalChar", "cc"]}
                        >
                            <Input type="number" />
                        </Item>
                        <Item
                            label="الأكسجين المستهلك كيميائيا لكل مللى جرام أكسجين/لتر"
                            name={["chemicalChar", "cc"]}
                        >
                            <Input type="number" />
                        </Item>
                        <Item
                            label="تركيزات ايون الكلوريد لكل جرام / لتر"
                            name={["chemicalChar", "cc"]}
                        >
                            <Input type="number" />
                        </Item>
                        <Item
                            label="عسر المياه لكل مللى جرام /لتر"
                            name={["chemicalChar", "cc"]}
                        >
                            <Input type="number" />
                        </Item>
                        <Item
                            label="الأمونيوم-نيتروجين لكل مللى جرام/لتر"
                            name={["chemicalChar", "cc"]}
                        >
                            <Input type="number" />
                        </Item>
                        <Item
                            label="النيتريت- نيتروجين لكل مللى جرام/لتر"
                            name={["chemicalChar", "cc"]}
                        >
                            <Input type="number" />
                        </Item>
                        <Item
                            label="النترات- نيتروجين لكل مللى جرام/لتر"
                            name={["chemicalChar", "cc"]}
                        >
                            <Input type="number" />
                        </Item>
                        <Item
                            label="الأورثوفوسفات-فوسفات لكل مللى جرام/لتر"
                            name={["chemicalChar", "cc"]}
                        >
                            <Input type="number" />
                        </Item>
                        <Item
                            label="السيليكات-سيليكا لكل مللى جرام/لتر"
                            name={["chemicalChar", "cc"]}
                        >
                            <Input type="number" />
                        </Item>
                        <HMTable/>
            </div>
        )
    }
}
