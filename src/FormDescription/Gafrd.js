import React from 'react';
import { gettextField, getManytextFields } from "./helpers"
import GovSelectorComponent from '../components/FormComponent/SelectorFetchComponent';

const schema = [
    gettextField("gafrdName","الاسم",true,null)
    ,
    ,
    {
        config: {
            name: ['gov'],
            label: "المحافظه",
            rules: [{ required: true, message: `ادخل المحافظه` }]
        },
        render: (props) => <GovSelectorComponent mode="multiple" entity='gov' {...props} />
    },
    ,
]


export default schema

