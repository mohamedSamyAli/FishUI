import React, { Component } from 'react';

const farmTS = [
    {
        title: 'الزيارات',
        dataIndex: 'visitCount',
        key: 'visitCount',
        fixed: 'left',
    render: (text, record) => <p>{record.farmVisits?  record.farmVisits.length:0}</p> 
    },
    {
        title: 'كود المزرعه',
        dataIndex: ["farm","code"],
        key: 'Code',

    },
    {
        title: 'البحيره',
        dataIndex: ["farm","lake","name"],
        key: 'lakeName',
    },
    {
        title: 'المحافظه',
        key: 'govName',
        dataIndex: ["farm","markaz","governorate","name"]
    },
    {
        title: 'منطقة الثروه السمكيه',
        key: 'regionName',
        dataIndex: ["farm","markaz","governorate","region","name"]
    },
    {
        title: 'المالك',
        dataIndex: ["farm"],
        key: 'fOwner',
    },
    {
        title: 'المركز',
        dataIndex: ["farm","markaz","name"],
        key: 'markazName',
    },
    {
        title: "القريه",
        dataIndex: ["farm","village"],
        key: 'Vname',
    },
    // {
    //     title: 'المساحه',
    //     key: 'area',
    //     dataIndex: 'lbvUsedarea'
    // },

]
export default  farmTS