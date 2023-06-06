import React from 'react'
import img from '../../Assets/pablo-sign-in 1.svg'
import { Link } from 'react-router-dom';

const Login = () => {

  const inputStyle = `block my-5 w-full py-3 border rounded-md border-primary px-2 placeholder:text-primary-50`;

  return (
    <div className='md:flex justify-between max-w-[90%] mx-auto'>
      <div className='h-screen bg-[#fdfdfd] basis-3/6'>
        <div className='flex items-center gap-2 mt-107'>
          <span>
            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 1.66541C0 1.11304 0.443238 0.665253 0.99 0.665253H3.96C4.50676 0.665253 4.95 1.11304 4.95 1.66541V19.6682C4.95 20.2206 5.39324 20.6684 5.94 20.6684H18.81C19.3568 20.6684 19.8 20.2206 19.8 19.6682V16.6678C19.8 16.1154 19.3568 15.6676 18.81 15.6676H12.87C11.2297 15.6676 9.9 14.3243 9.9 12.6671V3.66573C9.9 2.00861 11.2297 0.665253 12.87 0.665253H21.78C23.4203 0.665253 24.75 2.00861 24.75 3.66573V22.6687C24.75 24.3258 23.4203 25.6692 21.78 25.6692H2.97C1.32971 25.6692 0 24.3258 0 22.6687V1.66541ZM19.8 6.6662C19.8 6.11383 19.3568 5.66604 18.81 5.66604H14.85V9.66667C14.85 10.219 15.2932 10.6668 15.84 10.6668H19.8V6.6662Z" fill="url(#paint0_linear_6819_58336)"/>
              <defs>
              <linearGradient id="paint0_linear_6819_58336" x1="-1.87183e-06" y1="37.9211" x2="26.2531" y2="-5.22382" gradientUnits="userSpaceOnUse">
              <stop stopColor="#213F7D"/>
              <stop offset="1" stopColor="#39CDCC"/>
              </linearGradient>
              </defs>
            </svg>
          </span>
          <h1 className='font-Avenir text-primary font-semibold text-sm'>lendsqr</h1>
        </div>
        <img src={img} alt="" className='mt-139' />
      </div>
      <div className='h-screen basis-3/6 px-20'>
        <h1 className='font-Avenir font-bold text-md mt-220 text-primary'>Welcome!</h1>
        <p className=' font-Avenir font-normal text-xs text-primary-50 mt-10'>Enter details to login.</p>
        <div>
          <form action="">
            <div>
              <input type="text" placeholder='Email' className={inputStyle} />
            </div>
            <div className='relative'>
              <input type="text" placeholder='Password' className={inputStyle}  />
              <span className='absolute top-3 right-3 font-Avenir font-semibold text-secondary text-xxs '>show</span>
            </div>
            <span className=' font-Avenir font-semibold text-xxx text-secondary'>Forgot PASSWORD?</span>
            <Link to="dashboard">
              <input type="submit" value="LOG IN" className={`${inputStyle} bg-secondary text-white hover:bg-primary transition duration-75`} />
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;