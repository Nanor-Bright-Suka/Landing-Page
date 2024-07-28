import React from 'react'

function LoginPage() {
  return (
    <div className='login__main'>
      <h1 className='login__h1'>Log in</h1>
      <form>
        <div className='email__input'>
            <label htmlFor="EmailArea">Email</label>
            <input 
            type="email" 
            name='useremail'
            id='EmailArea'
            placeholder='Enter your email'
            />
        </div>
        <div className='password__input'>
            <label htmlFor='PasswordArea'>
            <span className='label__password'>Password </span><span className='forget__Password'>Forgot password?</span>
            </label>
            <input 
            type="password" 
            name='password'
            id='PasswordArea'
            placeholder='Enter Password'
            />
            <img src="/Images/EyeLogo.png" alt="Eye_Logo" />
        </div>
        <button className='login__btn'>Log in</button>
        <hr className='login__hr'/>
      </form>
      <div className='login__button__below'> 
       <div className='Google__G-wrapper'> 
        <img src="/Images/Google Logo - Copy.jpeg" alt="Google G" className='google__G'/> 
        Continue with Gmail
        </div>
   
        <p className='login__enquiry'>Don't have an account? <span className='signup'>Sign up</span></p>
        </div>
      </div>

  )
}

export default LoginPage
