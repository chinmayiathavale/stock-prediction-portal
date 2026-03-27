import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from'react-router-dom'
import { useContext } from 'react'

import { AuthContext } from '../AuthProvider'

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [errors,setErrors] = useState('')
  const [loading, setLoading] = useState(false)

  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)


  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    // console.log('handleRegistration()')
    setLoading(true)

    const userData = {username,password}

    try {

      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
      // console.log('response => ', response.data)
      console.log('Login successfull!!')

      localStorage.setItem('accessToken',response.data.access)
      localStorage.setItem('refreshToken',response.data.refresh)

      // setSuccess(true)
      // setIsLoggedIn(true);
      setIsLoggedIn(true)
      setErrors('')
      navigate('/')

    } catch(error) {
      console.log('Invalid Credentials')
      // setErrors(error.response?.data)
      setErrors('Invalid credentials.')

      console.log(error)
      console.log('Login error : ', error.response?.data)
      // setIsLoggedIn(false)
    } finally {
      setLoading(false)
    }

  }

  return (
    <>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6 main-text-bg-light p-5 rounded'>
              <h4 className='text-light text-center mb-4'>Login to an account</h4>
              <form action="" onSubmit={handleLogin}>
                <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Username' name='username' value={username} onChange={(e) => {setUsername(e.target.value)}} />
                </div>
                <div className='mb-3'>
                  <input type="password" className='form-control' placeholder='Password' name='password' value={password} onChange={(e) => {setPassword(e.target.value)}} />
                </div>
                <small>{errors!=='' && <div className='text-danger mb-3'>Please check username or password. {errors} </div>}</small>
                {loading ?
                  <button type='submit' className='btn btn-info d-block mx-auto' disabled>Please wait ...</button> :
                  <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>
                }
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default Login