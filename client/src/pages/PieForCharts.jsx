import React from 'react'

//import from files

import { Col, Container, Row } from 'react-bootstrap';
import Filters from './Filters';
import PieChart from '../components/charts/PieChart';
import RadarChart from '../components/charts/RadarChart';



const PieForCharts = ({ data,setMainData }) => {
    // defaultActiveKey="0"
   
    return (
        <>
        <Filters setMainData={setMainData} />
        <div style={{ marginTop:'60px' }} >
         
        <Container>
      <Row>
        <Col> <PieChart serverData={data} />
        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop:'10px', fontSize:'20px' }}>Pie Chart </div> </Col>
        <Col><RadarChart serverData={data} /><div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop:'10px', fontSize:'20px' }}>Radar Chart </div></Col>
      </Row>
      
    </Container>
        
      
        </div>
        </>
    )
}

export default PieForCharts