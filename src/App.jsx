 import React from "react"

 export default function App(){

  return (
    <div className="App">
      <div className="App__img">
      <div className="logo__wrapper">
      <img src="/Images/Logo.png" alt="Welcome Logo" className="logo"/>
      <h1> WelcomInApp</h1>
      </div>
          <img src="/Images/HeroImage.png" alt="Picture"  />
          <h2>Easily manage your <br />property today</h2>
      </div>
      <div className="App__logPage">
        <div className="App__logWrapper"> 
          <h3 className="App__heading">Log in</h3>
          <form>
          <label htmlFor="useremail">Email</label>
          <input 
          type="email" 
          name="useremail"
          id="useremail"
          placeholder="Enter your email"
          className="email"
          />
          <div className="password__wrapper"> 
          <label htmlFor="userPassword"   className="password">Password
            <span className="forget__password">Forgot password ?</span>
          </label>
          
          <input 
          type="password" 
          name="userpassword"
          id="userpassword"
          placeholder="Enter your Password"
        
          />
         <img src="/Images/EyeLogo.png" alt="Eye Logo" className="eye__logo"/>
         </div>
          <button className="btn">Log in</button>

          <hr className="hr"/>

          <div className="googleImg__wrapper">
            <img src="/Images/Google Logo - Copy.jpeg" alt="Google Image Wrapper" />
            <div>Continue with Gmail</div>
          </div>
           <p className="account__enquiry">Don't have an account ? <span className="signup"> Sign up </span>
           </p>
          </form>
          </div>
      </div>
    </div>
  )
 }