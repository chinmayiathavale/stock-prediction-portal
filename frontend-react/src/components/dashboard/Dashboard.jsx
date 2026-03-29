import React from 'react'
import { useEffect } from 'react'
import axios  from 'axios'
import axiosInstance from '../../axiosInstance'


const Dashboard = () => {

    useEffect(() => {
        // const fetchProtectedData = async () => {
        //     try {
        //         const resp = await axios.get('http://127.0.0.1:8000/api/v1/protected-view',
        //                                     {
        //                                         headers : {
        //                                             'Authorization' : `Bearer ${localStorage.getItem('accessToken')}`
        //                                         }
        //                                     }
        //         )
        //         console.log('Success : ', resp.data)
        //     } catch(error) {
        //         console.error('Error in fetching data : ',error)
        //     }
        // }

        const fetchProtectedData = async () => {
            try {
                const resp = await axiosInstance.get('/protected-view/')
                // console.log('Success : ', resp.data)
                console.log('Success : ', resp)
            } catch(error) {
                console.error('Error in fetching data : ',error)
            }
        }

        fetchProtectedData()
    },[])

  return (
    <>
        <div className='text-light container'>Dashboard</div>
    </>
  )
}

export default Dashboard