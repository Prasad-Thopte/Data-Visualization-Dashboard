import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';





// we are returning a dynamic bootstrap card
const CardsForData = ({ item }) => {
  return (
    <>
      {[
        'Primary',

      ].map((variant) => (
        <CardGroup>
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '15rem', marginLeft: '20px', marginTop: '20px' }}
            className="mb-2"
          >





            <Card.Header>Project Details</Card.Header>
            <Card.Body>

              <Card.Title>{item.sector ? item.sector : "Sector"}</Card.Title>
              <Card.Text>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>    <b>Topic :</b> {item.topic ? item.topic : "No Info"}     </ListGroup.Item>
                  <ListGroup.Item>    <b>Title :</b>   {item.title ? item.title : "No Info"}     </ListGroup.Item>
                  <ListGroup.Item>    <b>Sector :</b>   {item.sector ? item.sector : "No Info"} </ListGroup.Item>
                  <ListGroup.Item>    <b>Insight :</b>   {item.insight ? item.insight : "No Info"} </ListGroup.Item>
                  <ListGroup.Item>    <b>URL :</b>   {item.url ? item.url : "No Info"}          </ListGroup.Item>
                  <ListGroup.Item>    <b>Region :</b>   {item.region ? item.region : "No Info"}    </ListGroup.Item>
                  <ListGroup.Item>    <b>Country :</b>   {item.country ? item.country : "No Info"}  </ListGroup.Item>
                  <ListGroup.Item>    <b>Source :</b>   {item.source ? item.source : "No Info"}         </ListGroup.Item>
                  <ListGroup.Item>    <b>Pestle :</b>   {item.pestle ? item.pestle : "No Info"}         </ListGroup.Item>
                  <ListGroup.Item>    <b>Start Year :</b>   {item.start_year ? item.start_year : "No Info"} </ListGroup.Item>
                  <ListGroup.Item>    <b>End Year :</b>   {item.end_year ? item.end_year : "No Info"}     </ListGroup.Item>
                  <ListGroup.Item>    <b>Added :</b>   {item.added ? item.added : "No Info"}            </ListGroup.Item>
                  <ListGroup.Item>    <b>Published :</b>   {item.published ? item.published : "No Info"}    </ListGroup.Item>
                  <ListGroup.Item>    <b>Intensity :</b>   {item.intensity ? item.intensity : "No Info"}    </ListGroup.Item>
                  <ListGroup.Item>    <b>Likelihood :</b>   {item.likelihood ? item.likelihood : "No Info"}  </ListGroup.Item>
                </ListGroup>
              </Card.Text>

            </Card.Body>
          </Card>
        </CardGroup>
      ))}
    </>
  );
}

export default CardsForData