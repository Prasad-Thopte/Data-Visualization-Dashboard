import React, { useEffect, useState } from 'react';


import {DashboardLayout} from '../components/Layout';

import AccordionForCharts from './AccordionForCharts';

import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Bar = (data) => {
 //state to save data received from the server
 const [mainData, setMainData] = useState([]);    
 //asynchronous function to fetch data from server and updating the state
 const getDataFromDB = async() => {
     try{
         const response = await axios.get("http://localhost:8000/api/data/all");
         setMainData(response.data.data)
     }
     catch(e){
         console.log(e)
     }
 }
 //calling the above function on first render
 useEffect(()=>{
     getDataFromDB();
 },[])
 //where a state is updated, we will print the length of data received just for the test purposes
 useEffect(()=>{
   console.log(mainData.length)
 },[mainData])

  return (
    <DashboardLayout>
      <Container>
      <Row>
        <Col>
      <AccordionForCharts  data={mainData} setMainData={setMainData} />
      <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop:'10px', fontSize:'30px' }}>Bar Chart </div>
</Col>
</Row>
    </Container>
    </DashboardLayout>
  )
}

export default Bar;