import React from 'react'
import Button from 'react-bootstrap/Button';
import {  Dropdown } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from 'axios';

// here we are returning a bootstrap dropdown and just a button
const Filters = ({ setMainData }) => {
    //function to call the getDataFromDB function and passing the 'year' to it entered by the user
    const handleSelect = (eventKey, event) => {
        getDataFromDB(event.target.innerText)
        getDataFromDB1(event.target.innerText)
        getDataFromDB2(event.target.innerText)
        getDataFromDB3(event.target.innerText)
        getDataFromDB4(event.target.innerText)
    };
      // func to fetch the filtered data by year and update the state
    const getDataFromDB = async(year) => {
        try{
            const response = await axios.get(`http://localhost:8000/api/data/year/${year}`);
            setMainData(response.data.data)
        }
        catch(e){
            console.log(e)
        }
    }
    const getDataFromDB1 = async(topic) => {
        try{
            const response = await axios.get(`http://localhost:8000/api/data/topic/${topic}`);
            setMainData(response.data.data)
        }
        catch(e){
            console.log(e)
        }
    }
    const getDataFromDB2 = async(sector) => {
        try{
            const response = await axios.get(`http://localhost:8000/api/data/sector/${sector}`);
            setMainData(response.data.data)
        }
        catch(e){
            console.log(e)
        }
    }
    const getDataFromDB3 = async(region) => {
        try{
            const response = await axios.get(`http://localhost:8000/api/data/region/${region}`);
            setMainData(response.data.data)
        }
        catch(e){
            console.log(e)
        }
    }
    const getDataFromDB4 = async(country) => {
        try{
            const response = await axios.get(`http://localhost:8000/api/data/country/${country}`);
            setMainData(response.data.data)
        }
        catch(e){
            console.log(e)
        }
    }
  
    // func to handle the "reset filters button" by making another api call and update state 
    const handleReset = async() => {
        try{
            const response = await axios.get("http://localhost:8000/api/data/all");
            setMainData(response.data.data)
        }
        catch(e){
            console.log(e)
        }
       
    }

    return (
        <>
        <div className='tabsClass' style={{ display: 'flex', justifyContent: 'center', marginTop:'10px', }}>

            <Dropdown onSelect={handleSelect}>

                <DropdownButton  as='ButtonGroup'
            key='Success'
            id='dropdown-variants-success'
            variant='success'
            title='Filter By Year'
            >
                

             
                    <Dropdown.Item eventKey="1" >2014</Dropdown.Item>
                    <Dropdown.Item eventKey="2" >2015</Dropdown.Item>
                    <Dropdown.Item eventKey="3" >2016</Dropdown.Item>
                    <Dropdown.Item eventKey="4" >2017</Dropdown.Item>
                    <Dropdown.Item eventKey="5" >2018</Dropdown.Item>
                    <Dropdown.Item eventKey="6" >2019</Dropdown.Item>
                    <Dropdown.Item eventKey="7" >2020</Dropdown.Item>
             
                </DropdownButton>
              
             
                <DropdownButton  as='ButtonGroup'
            key="1"
            id='dropdown-variants'
            variant='success'
            title='Filter By Topic'
            >
              

           
                    <Dropdown.Item eventKey="1" >Gas</Dropdown.Item>
                    <Dropdown.Item eventKey="2" >Oil</Dropdown.Item>
                    <Dropdown.Item eventKey="3" >Consumption</Dropdown.Item>
                    <Dropdown.Item eventKey="4" >Market</Dropdown.Item>
                    <Dropdown.Item eventKey="5" >GDP</Dropdown.Item>
                    <Dropdown.Item eventKey="6" >War</Dropdown.Item>
                    <Dropdown.Item eventKey="7" >Production</Dropdown.Item>
                    <Dropdown.Item eventKey="1" >Export</Dropdown.Item>
                    <Dropdown.Item eventKey="2" >Battery</Dropdown.Item>
                    <Dropdown.Item eventKey="3" >Biofuel</Dropdown.Item>
                    <Dropdown.Item eventKey="4" >Policy</Dropdown.Item>
                    <Dropdown.Item eventKey="5" >Economy</Dropdown.Item>
                    <Dropdown.Item eventKey="6" >Strategy</Dropdown.Item>
                    <Dropdown.Item eventKey="7" >Robot</Dropdown.Item>
            
                    </DropdownButton>

        
               
            <DropdownButton  as='ButtonGroup'
            key="1"
            id='dropdown-variants'
            variant='success'
            title='Filter By Sector'
            >


                    <Dropdown.Item eventKey="1" >Energy</Dropdown.Item>
                    <Dropdown.Item eventKey="2" >Environment</Dropdown.Item>
                    <Dropdown.Item eventKey="3" >Government</Dropdown.Item>
                    <Dropdown.Item eventKey="4" >Aerospace & defence</Dropdown.Item>
                    <Dropdown.Item eventKey="5" >Manufacturing</Dropdown.Item>
                    <Dropdown.Item eventKey="6" >Retail</Dropdown.Item>
                    <Dropdown.Item eventKey="7" >Financial services</Dropdown.Item>
                    <Dropdown.Item eventKey="1" >Support services</Dropdown.Item>
                    <Dropdown.Item eventKey="2" > Information Technolog</Dropdown.Item>
                 
             
                </DropdownButton>


          
          
               
            <DropdownButton  as='ButtonGroup'
            key="1"
            id='dropdown-variants'
            variant='success'
            title='Filter By Region'
            >

        
                    <Dropdown.Item eventKey="1" >Northern America</Dropdown.Item>
                    <Dropdown.Item eventKey="2" >Central America</Dropdown.Item>
                    <Dropdown.Item eventKey="3" >World</Dropdown.Item>
                    <Dropdown.Item eventKey="4" > Western Africa</Dropdown.Item>
                    <Dropdown.Item eventKey="5" >Western Asia</Dropdown.Item>
                    <Dropdown.Item eventKey="6" >Eastern Europe</Dropdown.Item>
                    
           
             
                </DropdownButton>

     
                <DropdownButton  as='ButtonGroup'
            key="1"
            id='dropdown-variants'
            variant='success'
            title='Filter By Country'
            >

        
                    <Dropdown.Item eventKey="1" >United States of America</Dropdown.Item>
                    <Dropdown.Item eventKey="2" >Mexico</Dropdown.Item>
                    <Dropdown.Item eventKey="3" >Nigeria</Dropdown.Item>
                    <Dropdown.Item eventKey="4" > Lebanon</Dropdown.Item>
                    <Dropdown.Item eventKey="5" >Russia</Dropdown.Item>
                    <Dropdown.Item eventKey="6" >Saudi Arabia</Dropdown.Item>
                    <Dropdown.Item eventKey="4" > Angola</Dropdown.Item>
                    <Dropdown.Item eventKey="5" >Egypt</Dropdown.Item>
                    <Dropdown.Item eventKey="6" >India</Dropdown.Item>
                    
           
             
                </DropdownButton>

            </Dropdown>
           
        
        
       

<Button variant="danger" onClick={handleReset} style={{ marginLeft: '1vw', width: '10rem' }}>Reset Filters</Button>

 
</div>   
</>
    )

}

export default Filters