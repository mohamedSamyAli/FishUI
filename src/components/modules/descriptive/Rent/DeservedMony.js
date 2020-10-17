import React, { Component } from 'react'
import { Form, Input} from 'antd'

const { Item } = Form
export default class DeservedMony extends Component {
    render() {
        return (
            <div>
                   <Item
                    name={["rentContract","totalIssued"]}
                        label="الاموال المستحقه"
                        normalize={(v) => parseFloat(v)}
                    >
                        <Input type="number" />
                    </Item>
                    <Item
                    name={["rentContract","delayPenalty"]}
                        label="غرامة التاخير"
                        normalize={(v) => parseFloat(v)}

                    >
                        <Input type="number" />
                    </Item>
            </div>
        )
    }
}
