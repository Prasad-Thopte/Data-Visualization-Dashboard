import React from 'react'


//import from files
import BarChart from '../components/charts/BarChart';

import Filters from './Filters';




const AccordionForCharts = ({ data,setMainData }) => {
    // defaultActiveKey="0"
   
  
    return (
        <div>
                    <Filters setMainData={setMainData} />
                  <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop:'10px', fontSize:'30px' }}>Total Number Of Projects In Each Sector Using Bar Chart</div>
        <BarChart style={{ display: 'flex', justifyContent: 'space-evenly',  }} serverData={data} />
      
                          
      
        </div>
    )
}

export default AccordionForCharts