import {useContext} from 'react'
import Button from './Button'
import { Link , useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Header = () => {

  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

  const navigate = useNavigate()
  
  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    console.log('Logged Out!!')
    navigate('/login')
  }

  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            {/* <a className='navbar-brand text-light' href="">Stock Prediction Portal</a> */}
            <Link className='navbar-brand text-light' to='/' >Stock Prediction Portal</Link>
            {/* <div>
              <Button text='Login' classname='btn-outline-info' url='/login'/>
              &nbsp;
              <Button text='Register' classname='btn-info' url='/register'/>                
            </div> */}
            <span className='text-light'>{isLoggedIn}</span>
            <div>
              {
                isLoggedIn ?

                (
                  <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                ) :
                (
                  <>
                    <Button text='Login' classname='btn-outline-info' url='/login'/>
                    &nbsp;
                    <Button text='Register' classname='btn-info' url='/register'/>
                  </>
                )
              }
            </div>
        </nav>
    </>
  )
}

export default Header