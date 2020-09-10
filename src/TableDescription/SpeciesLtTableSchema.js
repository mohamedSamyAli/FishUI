import { Table, Tag, Space } from 'antd';
import React, { Component } from 'react';

import formSchema from "../FormDescription/species"

const schema = {
    id:"speciesId",

    formSchema,
    endPoint: "specieslt",
    data: (data) => {
        return data.map((e) => {
            return {
                ...e,
            }
        })
    }
    ,
    columns: [
        {
            title: 'م',
            dataIndex: 'speciesId',
            key: 'speciesId'
        },
        {
            title: 'الاسم بالكامل',
            dataIndex: 'speciesName',
            key: 'speciesName',
        }
    ]
}
export default schema