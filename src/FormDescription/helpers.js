import React from 'react';
import { Checkbox, Input, Form, Button } from 'antd';

export const gettextField=(name,label,required,type)=>{

    let CField = type? Input[type] : Input;

    return  {
        config:{
            name,
            label,
            rules:required?[{ required: true, message:`ادخل${label}`}]:[]
        },
        render:(props)=><CField {...props}/>

    }

}

export const getManytextFields = (names,labels,required,type)=>{
    return names.map((e,i)=>{
        return gettextField(names[i],labels[i],required[i],type[i])
    })
}