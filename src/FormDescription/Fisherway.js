import React from 'react';

import {gettextField} from"./helpers"

import { Select } from 'antd';

const { Option } = Select;

const schema = [
    gettextField("fisherwayName"," الاسم ",true),
    
    
        {
            config:{
                label:'تابعه لى',
                name:"fisherwayType",
                rules:[{ required: true, message:`مطلوب`}]


            },
            render: (props) => (
                <Select
                showSearch
                style={{ width: 200 }}
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                {...props}
                >
                <Option key='12' value={1}>مياه بحرية</Option>
                <Option key='13' value={2}>بحيرات</Option>
                <Option key='14' value={3}>بحيرات ومياه بحريه</Option>
              </Select>
         )
         
        }
       
        

]


export default schema