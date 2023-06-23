import React from 'react'

//import from files

import LineChart from '../components/charts/LineChart';

import { Col, Container } from 'react-bootstrap';
import Filters from './Filters';



const LineForCharts = ({ data,setMainData }) => {
    // defaultActiveKey="0"
  
    return (
        <>
        <Filters setMainData={setMainData} />
        <div style={{ marginTop:'60px' }} >
         
        <Container>
     
        <Col> <LineChart serverData={data} /></Col>
      
      
    </Container>
        
      
        </div>
        </>
    )
}

export default LineForCharts