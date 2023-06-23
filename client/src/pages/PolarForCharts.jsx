import React from 'react'

import PolarChart from '../components/charts/PolarChart';
import DoughnutChart from '../components/charts/DoughnutChart';
import { Col, Container, Row } from 'react-bootstrap';
import Filters from './Filters';



const PolarForCharts = ({ data,setMainData }) => {
    // defaultActiveKey="0"
   
    return (
        <>
        <Filters setMainData={setMainData} />
        <div style={{ marginTop:'60px' }} >
         
        <Container>
      <Row>
        <Col> <PolarChart serverData={data} /><div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop:'10px', fontSize:'20px' }}>Polar Chart </div></Col>
        <Col><DoughnutChart serverData={data} /><div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop:'10px', fontSize:'20px' }}>Doughnut Chart </div></Col>
      </Row>
      
    </Container>
        
      
        </div>
        </>
    )
}

export default PolarForCharts