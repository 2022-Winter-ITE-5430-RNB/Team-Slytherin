import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import { Page_Left, Page_Right, Head, Image, Form, Input, Button, Error } from './DonationStyling'
import donationDog from './DonationImages/donationDog.jpg'

const Donation = () => {
    const navigate = useNavigate();

    const [error_message, set_error_message] = useState('');
  
    const [formData, setFromDate] = useState({
        name: '',
        email: '',
        CreditCard: '',
        Donation: '',
      });
      const { name, email, CreditCard, Donation } = formData;
    
      const onChange = (e) => {
        setFromDate({ ...formData, [e.target.name]: e.target.value });
      };
    
      const onSubmit = async (e) => {
        e.preventDefault();
    
        let config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        let data = {
          name: name,
          email: email,
          CreditCard: CreditCard,
          Donation: Donation,
        };
        try {
          const response = await axios.post(
            'http://localhost:5000/api/users',
            data,
            config
          );
    
          console.log(response);
          localStorage.setItem('token', response.data.token);
          console.log(decode(response.data.token));
          navigate('/');
        } catch (err) {     
    
          console.log(err.response);
          if (typeof err.response.data.errors[0].msg !== 'undefined') {
            console.log("error 1");        
            set_error_message(err.response.data.errors[0].msg);
            console.log(err.response.data.errors[0].msg);
          }
          else {
            console.log("error 2");
            set_error_message(err.response.data.errors);
            console.log(err.response.data.errors);
          }
        }
      };
return (
    <>
    <Page_Left>
      <br></br><br></br><br></br>
      <Head>Welcome to Donation box</Head>
      <Image src={donationDog} />
    </Page_Left>

    <Page_Right>
      <Form onSubmit={(e) => onSubmit(e)}>
        <h3>Make Your donation</h3><br></br>
        <div>
          <Input
            type='text'
            placeholder='Name'
            name='name'
            require
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <br></br>
        <div>
                    <Input
                        type='email'
                        placeholder='Email Address'
                        name='email'
                        value={email}
                        onChange={(e) => onChange(e)}
                    />
                    </div>
                    <br></br>
                    <div>
                    <Input
                        type='text'
                        placeholder='Credit Card'
                        name='CreditCard'
                        minLength='16'
                        value={CreditCard}
                        onChange={(e) => onChange(e)}
                    />
                    </div>
                    <br></br>
        
                    <div>
                    <Input
                        type='text'
                        placeholder='Donation'
                        name='Donation'
                        minLength='1'
                        value={Donation}
                        onChange={(e) => onChange(e)}
                    />
                    </div><br></br>
        
                    <Button type='submit' value='Donate' /><br></br>

                <Error>
                    {error_message}
                </Error>
            </Form>
        </Page_Right>
    </>
);
};

export default Donation;