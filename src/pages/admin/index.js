import React, { useCallback, useState } from 'react'
import './style.css'
import Dropdown from './component/dropdown';
import Logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import ShippingForm from '../cart/form';
import { useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
    const [tableData, setTableData] = useState([]);

    const handleFormSubmit = (formData) => {
        setTableData([...tableData, formData]);
    };

    const getCartData = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:3180/get-cart-data');
            setTableData(response.data);
        } catch (error) {
            console.error('Error fetching cart data:', error.message);
        }
    }, []);

    useEffect(() => {
        getCartData();
    }, [])

    return (
        <>

            <div className='mainn'>
                <div className="sidenav">
                    <div className='logoo'>
                        <Link to="/"><img src={Logo} className='logo' /></Link>
                    </div>
                    <div className='dashboard'>
                        <a href="#">Dashboard</a>
                    </div>

                    <div className='profile'>
                        <a href="#">Profile</a>
                    </div>

                    <div className='profile'>
                        <a href="#" >Product</a>
                    </div>

                    <div className='profile'>
                        <a href="#">Contact</a>
                    </div>

                </div>


                <div className="main">
                    <table>
                        <tr>
                            <th>First Name</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip</th>
                            <th>Product</th>
                            <th>Unit price</th>
                            <th>Quantity</th>
                            <th>Sub Total</th>
                            <th>Processeing</th>
                        </tr>
                        {tableData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.firstName}</td>
                                <td>{data.email}</td>
                                <td>{data.number}</td>
                                <td>{data.address}</td>
                                <td>{data.city}</td>
                                <td>{data.state}</td>
                                <td>{data.zip}</td>
                                <td>{data.productName}</td>
                                <td>{data.price}</td>
                                <td>{data.quantity}</td>
                                <td>{data.price * data.quantity}</td>
                                <td><Dropdown /></td>
                            </tr>
                        ))}




                    </table>
                </div>
            </div>
            {/* <ShippingForm onFormSubmit={handleFormSubmit} /> */}
        </>
    )
}


export default Admin
