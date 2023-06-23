import React, { useState } from 'react'


import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';



//import from files
import CardsForData from './CardsForData';

import Filters from './Filters';
import axios from 'axios';
import Pagination from 'react-bootstrap/Pagination';


const TabsRow = ({ data, setMainData }) => {
    // state to store the number of data cards we want to display at a time, we'll update it on click of a button
    const [limit, setLimit] = useState(8);
    const limitedData = data.slice(0, limit);
    // state to store the search bar text
    const [search, setSearch] = useState("");
    // function to make an api call to get the filtered data
    const handleSearchResult = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8000/api/data/any/${search}`);
            setMainData(response.data.data);
            setSearch("");
        }
        catch (e) {
            console.log(e)
        }
    }
  
    return (
     
        <div className='tabsClass'>
  
          <form className="form-inline" onSubmit={handleSearchResult} style={{ display: 'flex', justifyContent: 'space-evenly', marginTop:'10px' }}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search by Sector Name, Topic, Title, Pestle, Source, Insight, URL..." aria-label="Search" onChange={(e) => setSearch(e.target.value)} style={{ marginRight: '1rem' }} />
                        <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <Filters setMainData={setMainData} />
      

      

                    {limitedData && limitedData.length === 0 ? (
                        <div style={{margin:'1rem'}}>No data found, or please wait for a while.</div>
                    ) : limitedData && limitedData.length > 0 ? (
                        <CardGroup>
                            {limitedData.map((e, i) => {
                                return<Pagination> <CardsForData item={e} key={i} /></Pagination>
                            })}
                        </CardGroup>
                    ) : (
                        <div>Loading...</div>
                    )}
                    <Button variant="primary" onClick={() => setLimit(prev => prev + 2)}>Show More</Button>
              
                    
                 
        </div>
        
    );
 
}

export default TabsRow