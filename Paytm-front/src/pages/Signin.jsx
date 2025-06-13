import Heading from '../components/Heading';
import Subheading from '../components/Subheading';
import InputBox from '../components/InputBox';
import Button from '../components/button';
import BottomWarning from '../components/BottomWarming';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import it here

const Signin = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // ✅ Call inside component function

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center px-8 py-6">
          <Heading label="Sign in" />
          <Subheading label="Enter your credentials to access your account" />
          <InputBox
            onChange={(e) => setUserName(e.target.value)}
            placeholder="John22"
            label="Username"
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••"
            label="Password"
          />
          <div className="pt-4">
            <Button
              onClick={() => {
                axios.post("http://localhost:3000/api/v1/user/signin", {
                  username,
                  password
                }).then(response => {
                  const token = response.data.token;
                  if (token) {
                    localStorage.setItem("token", token);
                    
                    navigate("/dashboard"); // ✅ This works fine now
                  } else {
                    alert("No token received.");
                  }
                });
              }}
              label="Sign in"
            />
          </div>
          <BottomWarning label="Don't have an account?" buttonText="Sign up" to="/signup" />
        </div>
      </div>
    </div>
  );
};

export default Signin;
