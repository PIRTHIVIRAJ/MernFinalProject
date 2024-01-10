import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCart } from '../../../providers/cartProvider';

const ShippingForm = () => {
    const navigate = useNavigate();
    const { cart, subtotal } = useCart();
    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log(e.target[6])
        console.log(cart)

        const formData = {
            firstName: e.target[0].value,
            email: e.target[1].value,
            number: e.target[2].value,
            address: e.target[3].value,
            city: e.target[4].value,
            state: e.target[5].value,
            zip: e.target[6].value,
        };

        try {
            // Send data to the server
            const response = await axios.post('http://localhost:3180/save-user', { formData, cart, subtotal });

            // Handle the response as needed
            console.log(response.data);
            navigate('/checkout')
        } catch (error) {
            console.error('Error saving data:', error.message);
        }
    };
    return (
        <>
            <div className="shipping-row">
                <div className="shipping-col-75">
                    <div className="shipping-container">
                        <form onSubmit={handleSubmit}>

                            <div className="shipping-row">
                                <div className="shipping-col-50">
                                    <h3>Shipping Address</h3>
                                    <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                                    <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                                    <input type="text" id="email" name="email" placeholder="john@example.com" />
                                    <label htmlFor="num"><i className="fa fa-phone"></i> Number</label>
                                    <input type="tel" id="email" name="Number" placeholder="123456789" />
                                    <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                                    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                                    <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
                                    <input type="text" id="city" name="city" placeholder="Khairpur Mir's" />

                                    <div className="shipping-row">
                                        <div className="shipping-col-50">
                                            <label htmlFor="state">State</label>
                                            <input type="text" id="state" name="state" placeholder="Sindh" />
                                        </div>
                                        <div className="shipping-col-50">
                                            <label htmlFor="zip">Zip</label>
                                            <input type="text" id="zip" name="zip" placeholder="66000" />
                                        </div>
                                    </div>
                                </div>

                                {/* Uncomment the following block if needed */}
                                {/* <div className="shipping-col-50">
                                    <h3>Payment</h3>
                                    <label htmlFor="fname">Accepted Cards</label>
                                    <div className="shipping-icon-container">
                                        <i className="fa fa-cc-visa" style={{ color: 'navy' }}></i>
                                        <i className="fa fa-cc-amex" style={{ color: 'blue' }}></i>
                                        <i className="fa fa-cc-mastercard" style={{ color: 'red' }}></i>
                                        <i className="fa fa-cc-discover" style={{ color: 'orange' }}></i>
                                    </div>
                                    <label htmlFor="cname">Name on Card</label>
                                    <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                                    <label htmlFor="ccnum">Credit card number</label>
                                    <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                                    <label htmlFor="expmonth">Exp Month</label>
                                    <input type="text" id="expmonth" name="expmonth" placeholder="September" />

                                    <div className="shipping-row">
                                        <div className="shipping-col-50">
                                            <label htmlFor="expyear">Exp Year</label>
                                            <input type="text" id="expyear" name="expyear" placeholder="2018" />
                                        </div>
                                        <div className="shipping-col-50">
                                            <label htmlFor="cvv">CVV</label>
                                            <input type="text" id="cvv" name="cvv" placeholder="352" />
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            {/* Uncomment the following lines if needed */}
                            {/* <label>
                                <input type="checkbox" defaultChecked={true} name="sameadr" /> Shipping address same as billing
                            </label> */}
                            <input type="submit" value="Proceed to checkout" className="shipping-btn" />

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShippingForm;
