import React, {useState} from 'react';
import Navbar from '../../components/layout/navbar';
 import './descriptive.css';
import Sidemenu from '../../components/layout/sidemenu';
import {useHistory,Switch,Route} from "react-router-dom";
import LakesAddForm from '../../components/modules/descriptive/lakes/addEdit.js';
import LakesForm from '../../components/modules/descriptive/lakes';
import DescriptiveBasic from '../../components/modules/descriptive/basic';
import './descriptive.css';
import G_Admin from '../../components/modules/admin/G_Admin';

const DiscriptivePage = () => {
    const history = useHistory()
    const active ='descriptive';
    const [ sidemenu, setSidemenu] = useState('');
    const setActive = (id) => {
        setSidemenu(id);
        history.push(`/descriptive/${id}`);
    }
    const subNav = [
        {
            name : 'إستمارة بيانات البحيرات',
            to : 'lakeQuarter'
        },
        {
            name : 'إستمارة عينات البحيرات',
            to : 'lakeWater'
        },
        {
            name : 'إستمارة بيانات المزارع السمكية',
            to : 'FarmQ'
        },
        {
            name : 'إستمارة بيانات المفرخات السمكية',
            to : ''
        },
        {
            name : 'إستمارة الماه البحرية',
            to : 'SW'
        },
        {
            name : 'إستمارة  العقود',
            to : "Contract"
        },
        {
            name : 'إستمارة بيانات الموانئ | نقط سروح',
            to : 'port'
        }
    ]
    return ( 
        <div className="admin__container">
            < Sidemenu activeSub={ sidemenu } 
            content={ subNav } 
            setActive={(id)=>setActive(id)}/>
            <div>
                < Navbar active= {active} />
                <div className="content__container">
                <Switch>
                    <Route path="/descriptive/lakeQuarter">
                    <G_Admin key="1" name="lakeQV" />
                    </Route>
                    <Route exact path="/descriptive/lakeWater">
                    <G_Admin key="2" name="lakeQS" />
                    </Route>
                    <Route exact path="/descriptive/FarmQ">
                    <G_Admin key="3" name="FarmQ" />
                    </Route>
                    <Route exact path="/descriptive/sw">
                    <G_Admin key="4" name="Port" />
                    </Route>
                    <Route exact path="/descriptive/port">
                    <G_Admin key="5" name="PortQ" />
                    </Route>
                    <Route exact path="/descriptive/Contract">
                    <G_Admin key="6" name="Contract" />
                    </Route>
                    <Route path="/descriptive">
                        <DescriptiveBasic/>
                    </Route>
                </Switch>
                </div>
            </div>
        </div>
    );
}
 
export default DiscriptivePage;