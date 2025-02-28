import React,{useContext, useEffect, useState} from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const RecruiterLogin = () => {
    const [state,setState]=useState('Login')
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const [image,setImage]=useState(false)
    const [isTextDataSubmitted,setIsTextDataSubmitted]=useState(false)
    const {setShowRecruiterLogin}=useContext(AppContext)

    useEffect(()=>{
        document.body.style.overflow='hidden'
        return ()=>{
            document.body.style.overflow='unset'
        }
    },[])

    const onSubmitHandler = async (e)=>{
        e.preventDefault()

        if(state==='Signup' && !isTextDataSubmitted){
            setIsTextDataSubmitted(true)
        }
    }
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
            <form onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-xl text-slate-500'>
                <h1 className='text-center text-2xl text-neutral-700 font-medium'>Recruiter {state}</h1>
                <p className='text-sm'>Welcome Back! Please sign in to continue</p>
                {
                    state==='Signup' && isTextDataSubmitted 
                    ? <>
                    <div className='flex items-center gap-4 my-10'>
                        <label htmlFor='image'>
                            <img src={image?URL.createObjectURL(image) :assets.upload_area} className='w-16 rounded-full'></img>
                            <input onChange={e=>setImage(e.target.files[0])} type='file' id='image' hidden></input>
                        </label>
                        <p>Upload Company <br></br> Logo</p>
                    </div>
                    </>
                    :<>
                {
                    state!=='Login' && (<div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                        <img src={assets.person_icon}></img>
                        <input onChange={e=>setName(e.target.value)} className='outline-none text-sm' value={name} type='text' placeholder='Company Name' required></input>
                    </div>)
                }
                <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                    <img src={assets.email_icon}></img>
                    <input onChange={e=>setEmail(e.target.value)} className='outline-none text-sm' value={email} type='email' placeholder='Email ID' required></input>
                </div>
                <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                    <img src={assets.lock_icon}></img>
                    <input onChange={e=>setPassword(e.target.value)} className='outline-none text-sm' value={password} type='password' placeholder='Password' required></input>
                </div>
                
                </>
}
               {state==='Login' && <p className='text-sm text-blue-600 mt-4 cursor-pointer'>Forgot Password?</p>} 
                <button type='submit' className='bg-blue-600 w-full text-white py-2 rounded-full mt-4'>
                    {state==='Login' ? 'Login' : isTextDataSubmitted ? 'Create Account' : 'Next'}
                </button>
                {
                    state==='Login' 
                    ? <p className='mt-5 text-center'>Dont have an account?  <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Signup')}>Sign up</span></p> 
                    : <p className='mt-5 text-center' >Already have an account?  <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Login')}>Login</span></p>
                }
                
                <img onClick={e=>setShowRecruiterLogin(false)} src={assets.cross_icon} className='absolute top-5 right-5 cursor-pointer'></img>
                
                 </form>
    </div>
  )
}

export default RecruiterLogin
