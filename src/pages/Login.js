import { Form, Input, Button, message,Spin } from "antd";
import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { Admin } from "../services/api";
import numl from '../numl.jpg'
import "../Login.css";


function Login() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    let loggedIn = true;
    const token = localStorage.getItem("token");
    if (token !== null && loggedIn === true) {
      setIsLoggedIn(true);
    }

    return () => (loggedIn = false);
  }, []);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      // const response = await Admin.signIn(values);
      // if (response) {
      //   localStorage.setItem("token", response.data.token);
      //   localStorage.setItem("user", JSON.stringify(response.data.user));
      //   message.success("Logged in!");
      //   setIsLoggedIn(true);
      //   setLoading(false);
      // }
         localStorage.setItem("token", "response.data.token");
         localStorage.setItem("user", "JSON.stringify(response.data.user)");
        message.success("Logged in!");
        setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
      message.error("Incorrect email or password");
      setLoading(false);
    }
  };

 

  return (
    <>
      {isLoggedIn ? (
        <Redirect to="/app" />
      ) : loading ? (
        <Spin
          size="large"
          style={{
            position: "absolute",
            top: "47%",
            right: "50%",
            transform: "translate(0, -50%)",
          }}
        />
      ) : (
        <div class='loginbody' >
           <div class="logincontainer" id="logincontainer">
               
                <div class="loginform-container loginsign-in-container">
                    <div class="loginform">
                        <h1 class="loginh1">Sign In</h1>
                     
                       <br/>
                        <input type="email" placeholder="Email" class='logininput'/>
                        <input type="password" placeholder="Password" class='logininput' />
                       <br/>
                        
                        <button class="loginbuttonn" onClick={() => onFinish()}>Sign In</button>
                    </div>
                </div>
                <div class="loginoverlay-container">
                    <div class="loginoverlay">
                        <div class="loginoverlay-panel overlay-left">
                            <h1 class="loginh1">Welcome Back!</h1>
                            <p class="loginp">To keep connected with us please login with your personal info</p>
                            <button class="loginbuttonn" >Sign In</button>
                        </div>
                        <div class="loginoverlay-panel loginoverlay-right">
                            <h1>Inventry Mangment System</h1>
                            <p>Enter your personal details and start journey with us</p>
                         
                        </div>
                    </div>
                </div>
            </div>
       {/* Login Container Started Here  */}
        </div>
      )}
    </>
  );
}

export default Login;
