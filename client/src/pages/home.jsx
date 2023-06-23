import React, { useEffect, useState } from 'react';

import {DashboardLayout} from '../components/Layout';


import TabsRow from './TabsRow';
import axios from 'axios';
const HomePage = (data) => {
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
    <TabsRow data={mainData} setMainData={setMainData}/>
    </DashboardLayout>
  )
}

export default HomePage;