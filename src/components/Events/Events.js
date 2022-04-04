import React from 'react';
import { EventStylediv } from './EventStyling'
import { Container } from 'react-bootstrap'

import cat2 from '../Images/c2.jpg'
import cat4 from '../Images/c4.jpg'
import dog1 from '../Images/d1.jpeg'
import dog4 from '../Images/d4.jpg'

const Events = () => {
  return (
  <EventStylediv>
  <h1> Meet our Pets at a virtual adoption event</h1>
  
    
  <p>  The best way to meet our Pets is to attend our monthly adoption events. Our
        upcoming schedule is located below. All pet adoption events are listed below.
       <br /><br />
      If you are planning to adopt at an event, you can start the process in advance 
      or on site. To start in advance, fill out an application form and follow the instructions
       on the form to submit. Someone from our team will then get you started on our adoption 
       process! You can fill one out onsite, but (1) if you have current or past pets, please
       bring their vet records and (2) if you are renting, please bring proof you can have pets
       as well as documentation that the specific pet you're interested in will be permitted. 
       We post the dogs and cats attending our events on Facebook at 6pm the day before, but 
       because these lists are subject to change, it is always best to confirm an animal's 
       attendance and event adoption status with their adoption coordinator (email listed in their bio). 
         </p>
       <Container>
          <h2>May 07,2022  11:00 AM --- 3:00 PM</h2>
           <img src={dog4} className='img' alt="d4"  height="290" widht="470"/>
           <h2>June 07,2022  11:00 AM --- 3:00 PM</h2>
           <img src={cat2} className='img' alt="c2" height="290" widht="460"/>
           <h2>July 10,2022  11:00 AM --- 3:00 PM</h2>
           <img src={dog1} className='img' alt="d1" height="290" widht="460"/>
           
       </Container>
        

</EventStylediv>
)
};



export default Events;


