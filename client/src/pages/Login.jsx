import { useState } from "react";
import axios from "axios";
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Login = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: '', 
  })

  const loginUser = async (e) => {
    e.preventDefault()
    const { email, password } = data
    try {
      const {data} = await axios.post('/login', {
        email,
        password
      });
      if(data.error) {
        toast.error(data.error)
      } else {
        setData({});
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <motion.div 
      initial="hidden"
      animate="show"
      variants={fadeIn("right", "spring", 0.5)} 
      className='p-[1px] rounded-[20px] shadow-card items-center green-orange-gradient'>
        <div className='bg-tertiary rounded-[20px] py-4 px-8 min-h-[280px] flex justify-evenly items-center flex-col'>
          <form onSubmit={loginUser} className="mt-4 flex flex-col gap-8">
              <h3 className={styles.sectionHeadText}>Login</h3>
              <span className="text-white
              font-medium leading-normal">Email</span>
              <input type='email' placeholder='Your registered email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} 
              className="w-[20rem] bg-tertiary py-2 px-2
              placeholder:text-secondary text-sm
              text-white outline-none font-medium border-b-2
              bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20
              hover:border-accent focus:border-accent"/>
              <span className="text-white
              font-medium">Password</span>
              <input type='password' placeholder='Put your registered password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}
              className="w-[20rem] bg-tertiary py-2 px-2
              placeholder:text-secondary text-sm
              text-white outline-none font-medium border-b-2
              bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20
              hover:border-accent focus:border-accent"/>
              <button type='submit' className='mx-auto bg-tertiary backdrop-opacity-30 
              backdrop-blur-sm bg-opacity-40 py-2 px-6 mx-2 outline-none w-fit
              text-accent font-bold shadow-md rounded-xl my-4
              hover:bg-accent hover:text-white 
              border-accent transition-colors border-2
              md:py-2 md:px-8 md:w-fit'>Login</button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Login, "login");