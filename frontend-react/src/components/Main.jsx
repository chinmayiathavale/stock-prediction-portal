import React from 'react'
import Button from './Button'



const Main = () => {
  return (
    <>
        <div className='container'>
            <div className='p-5 text-center main-text-bg-light rounded'>
                <h1 className='text-light'>Stock Prediction App</h1>
                <p className='text-light lead'>This Stock Prediction App utilizes some Machine Learning, specifically employing Keras and LSTM model, integrated within Django framework. It forcasts future stock prices by analyzing 100-day nd 200-day moving averages, essential indicators widely used by stock analysts to inform trading and investment decisions.</p>
                {/* <Button text='Login' classname='btn-outline-info' url='/login' /> */}
                <Button text='Explore Now' classname='btn-outline-info' url='/dashboard' />
            </div>
        </div>
      
    </>
  )
}

export default Main