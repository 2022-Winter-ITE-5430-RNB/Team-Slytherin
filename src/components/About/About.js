
import React from 'react'
import { FormStyle, Head, InputText, InputTextArea, PetCategory, SubmitPost, Image } from './AboutStyling'
import ex from '../Images/ex.jpg'

const About = () => {

  return (
    <div>
      <FormStyle>
        <Head> Share Experience How to Raise a Pet </Head><br></br>
        <Image src={ex} />
        <PetCategory aria-label="Default select example">
          <option>Pet Type</option>
          <option value="dog">Dogs</option>
          <option value="cat">Cats</option>
          <option value="bird">Bird</option>
          <option value="other">Other(Domestic Animal)</option>
        </PetCategory><br></br><br></br>
        <InputText type='text' placeholder='Pet Breed' /> <br></br><br></br>
        <InputText type='text' placeholder='Basic needs' /> <br></br> <br></br> 
        <InputText type='text' placeholder='Habbits' /> <br></br> <br></br>        
        <InputTextArea name="comment" placeholder='Share your experience'></InputTextArea> <br></br><br></br>

                <SubmitPost type='button'>Post</SubmitPost>
      </FormStyle>
    </div>
  )
}

export default About



