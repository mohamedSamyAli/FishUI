import { Table, Tag, Space } from 'antd';
import React, { Component } from 'react';
import formSchema from "../FormDescription/Association"

const  schema = {
    
    id:"assCode",
    formSchema,
    endPoint:"associationlt",
    data: (data)=> {
       return  data.map((e)=>{
            return{
                ...e,
                //gov:e.gov.govName
            }
        }) 
    }
    ,
    columns: [
        {
            title: 'كود الجمعيه',
            dataIndex: 'assId',
            key: 'assId'
        },
        {
            title: 'اسم الجمعيه',
            dataIndex: 'assName',
            key: 'assName',
        },
        {
            title: 'الصلاحيات التابع لها',
            key: 'gov',
            dataIndex: ['gov','govName']
        },
        
    ]
} 
export default  schema