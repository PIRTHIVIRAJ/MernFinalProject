import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Checkout = () => {
    return (
        <>
            <div className="checkout">
                <h4>Thankyou for Your Order</h4>
                <p>Your order has been processed successfully</p>
                <div className='btnh'>
                    <Link to="/"> <button className='btnhome'>Back to HomePage</button></Link>
                </div>
            </div>
        </>
    )
}

export default Checkout
