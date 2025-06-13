
import Heading from '../components/Heading';
import Subheading from '../components/Subheading';
import InputBox from '../components/InputBox';
import Button from '../components/button';
import BottomWarning from '../components/BottomWarming';
import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';



export const Signup = () => {
  const[firstname, setFirstName] = useState("");
  const[lastname , setLastName] = useState("");
  const[username , setUserName] = useState("");
  const[password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center px-8 py-6">
          <Heading label="Sign up" />
          <Subheading label="Enter your information to create an account" />
          <InputBox onChange={e =>{
            setFirstName(e.target.value);
          }}placeholder="John" label="First Name" />
          <InputBox onChange ={e =>{
            setLastName(e.target.value);
          }} placeholder="Wick" label="Last Name" />
          <InputBox onChange ={e=>{
            setUserName(e.target.value);
          }}placeholder="John22" label="Username" />
          <InputBox onChange={e =>{
            setPassword(e.target.value);
          }}placeholder="Use strong password" label="Password" />
          <div className="pt-4">
            <Button onClick={()=> {
              axios.post("http://localhost:3000/api/v1/user/signup",{
                firstname,
                lastname,
                username,
                password
                
              });
              navigate('/signin')
            }}
              label="Sign up" />
          </div>
          <BottomWarning label="Already have an account?" buttonText="Sign in" to="/signin" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
