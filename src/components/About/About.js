import React from 'react'
import { Button, InputGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { AboutStylediv } from './AboutStyling'
import { Form } from 'react-bootstrap'
import { Dropdown } from 'bootstrap'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'


const About = () => {
  return (
    <AboutStylediv>
    <h1>Share Experience How to Raise a Pet </h1>
    <Container>
    <Row className="justify-content-md-center ">
                
              <Form.Select aria-label="Default select example">
                  <option>Pet Type</option>
                  <option value="canine">Canine</option>
                  <option value="bird">Bird</option>
                  <option value="other">Other(Domestic Animal)</option>
                </Form.Select>
                <p></p>
                <InputGroup className="mb-3">
                <InputGroup.Text id="breed">Breed</InputGroup.Text>
                <FormControl
                  placeholder="Breed"
                  aria-label="Breed"
                  aria-describedby="Breed"
                />
              </InputGroup>
              
              
              <InputGroup>
                <InputGroup.Text>Basic needs of a Pet</InputGroup.Text>
                <FormControl as="textarea" aria-label="Basic needs" />
              </InputGroup>
              <p></p>
              <Button variant="dark">Send</Button>
              </Row>
              </Container>
</AboutStylediv>
  )
}

export default About




// import React from 'react';
// import { AboutStylediv } from './AboutStyling'

// const About = () => {
//  return (
//   <AboutStylediv>
//     <h1>  We make the world a better place for pets by investing in community
//  partners that advocate and care for the well-being of pets and all who love them. </h1>
//   </AboutStylediv>
// )
// }
// export default About;