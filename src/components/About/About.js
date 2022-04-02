
import React from 'react'
import { FormStyle, Head, InputText, InputTextArea, PetCategory, SubmitPost, Image, UploadImage, ChooseImage, Label, InputDate } from './AboutStyling'
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



// import React, { useState } from "react";
// import dog4 from '../Images/d4.jpg'

// const FORM_ENDPOINT = "";


// const About = () => {

//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = () => {

//     setTimeout(() => {

//       setSubmitted(true);

//     }, 100);

//   };


//   if (submitted) {

//     return (

//       <>

//         <div className="text-2xl">Thank you!</div>

//         <div className="text-md">For Share your experience</div>

//       </>

//     );

//   }


//   return (

//     <section class="mb-4">


//     <h2 class="h1-responsive font-weight-bold text-center my-4">Share Experience How to Raise a Pet</h2>
   
//     <p class="text-center w-responsive mx-auto mb-5">It will help others who are intrested and want to adopt a pet</p>

//     <div class="row">

     
//         <div class="col-md-9 mb-md-0 mb-5">
//             <form id="contact-form" name="contact-form" action="mail.php" method="POST">
  
//                 <div class="row">

//                 <img src={dog4} className='img' alt="d4"  height="290" widht="470"/>

//                     <div class="col-md-6">
//                         <div class="md-form mb-0">
//                             <label for="name" class="">Pet Type</label>
//                             <input type="text" id="name" name="name" class="form-control"/>
                           
//                         </div>
//                     </div>
              
//                     <div class="col-md-6">
//                         <div class="md-form mb-0">
//                             <label for="email" class="">Basic needs </label>
//                             <input type="text" id="email" name="email" class="form-control"/>
                           
//                         </div>
//                     </div>
                

//                 </div>
          
//                 <div class="row">
//                     <div class="col-md-12">
                      
//                         <div class="md-form mb-0">
//                             <label for="subject" class="">Habbits</label>
//                             <input type="text" id="subject" name="subject" class="form-control"/>
                           
//                         </div>
//                     </div>
//                 </div>
//             <br />
//                 <div class="row">
             
//                     <div class="col-md-12">
//                         <div class="md-form">
//                             <label for="message">Share experience</label>
//                             <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            
//                         </div>

//                     </div>
//                 </div>
//             </form>

//             <div class="text-center text-md-left">
//                 <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Post</a>
//             </div>
//             <div class="status"></div>
//         </div>
  
         

//     </div>

// </section>

//   );

// };


// export default About;





