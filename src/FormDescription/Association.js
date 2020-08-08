import React from 'react';
import { gettextField, getManytextFields } from "./helpers"
import GovSelectorComponent from '../components/FormComponent/SelectorFetchComponent';

const schema = [
    gettextField("assName", "الاسم", true)
    ,
    {
        config: {
            name: ['gov','govId'],
            label: "المحافظه",
        },
        render: (props) => <GovSelectorComponent entity='gov' {...props} />

    },
    ...getManytextFields(["assLong", 'assLat'], ['Longitude ', 'Latitude'], [false, false], [null, null])

]


export default schema