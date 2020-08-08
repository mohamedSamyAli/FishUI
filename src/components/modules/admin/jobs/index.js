import React ,{ useState } from 'react';
import TableComponent from '../../../main/table';
import ModelComponent from '../../../main/model';
import { useHistory, useLocation } from 'react-router-dom';
import TableAction from '../../../main/table/tableActions.js';
import { Space , Tag } from 'antd';
import JobsEdit from './addEdit.js';
import schema from "../../../../TableDescription" 
import GenaricTable from '../../../main/table/GenaricTable';
const JobsPage = () => {
    const history = useHistory();

    const [ edit , setEdit] = useState(false);
    const [ visible , setVisible ] = useState( false );


    return(
        <>
         <div className="main__wrapper">
             <h3 className="main__heading">
             إدارة الوظائف:  
             </h3>
             <div className="content__wrapper">
             <GenaricTable   
                 
                 schema = {schema.Job}
             />
             </div>
         </div>

        {/* <ModelComponent title={ edit? "تعديل وظيفة : " : "إضافة وظيفة جديدة:" } visible={ visible } hideModal={()=>hideModal()}>
                 <JobsEdit hideModal={()=>hideModal()} />
        </ModelComponent> */}
        </>
    );
}

export default JobsPage;