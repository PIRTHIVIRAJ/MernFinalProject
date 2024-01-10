import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import QuantityBox from '../../components/quantityBox';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { MyContext } from '../../App';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { useCart } from '../../providers';
import ShippingForm from './form';
import CartItem from '../../components/CartItem';


const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const context = useContext(MyContext);
    const history = useNavigate();
    const { cart, removeItem, subtotal, setSubTotal } = useCart();


    useEffect(() => {
        if (context.isLogin === "true") {
            getCartData("http://localhost:3000/cart");
        } else {
            history('/');
        }

        window.scrollTo(0, 0);
    }, []);

    const getCartData = async (url) => {
        try {
            const response = await axios.get(url);
            setCartItems(response.data);
        } catch (error) {
            console.error(error.message);
        }
    };

    const updateSubtotal = (items) => {
        setSubTotal(
            items.reduce(
                (total, item) => total + parseInt(item.price.split(",").join("")) * item.quantity,
                0
            )
        );
    };

    const deleteItem = async (id) => {
        try {
            removeItem(id)
        } catch (error) {
            console.error("Error deleting item:", error.message);
        }
    };

    const emptyCart = async () => {
        try {
            await Promise.all(
                cartItems.map((item) =>
                    axios.delete(`http://localhost:3000/cart/${parseInt(item.id)}`)
                )
            );
            getCartData("http://localhost:3000/cart");
            context.emptyCart();
        } catch (error) {
            console.error("Error clearing cart:", error.message);
        }
    };

    const updateCart = (items) => {
        setCartItems(items);
        updateSubtotal(items); // Update the subtotal when cart items change
    };

    // console.log(subtotal)

    return (
        <>
            {
                context.windowWidth > 992 && <div className="breadcrumbWrapper mb-4">
                    <div className="container-fluid">
                        <ul className="breadcrumb breadcrumb2 mb-0">
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                Shop
                            </li>
                            <li>
                                Cart
                            </li>
                        </ul>
                    </div>
                </div>

            }

            <section className='cartSection mb-5'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='d-flex align-items-center w-100'>
                                <div className='left'>
                                    <h1 className='hd mb-0'>Your Cart</h1>
                                    {/* <p>There are <span className='text-g'>3</span> products in your cart</p> */}
                                </div>

                                {/* <span className='ml-auto clearCart d-flex align-items-center cursor '
                                    onClick={() => emptyCart()}><DeleteOutlineOutlinedIcon /> Clear Cart</span> */}

                            </div>



                            <div className='cartWrapper mt-4'>
                                <div className='table-responsive'>
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Unit Price</th>
                                                <th>Quantity</th>
                                                <th>Subtotal</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                cart?.length !== 0 &&
                                                cart.map((item, index) => {
                                                    return (
                                                        <CartItem item={item} deleteItem={deleteItem} setSubTotal={setSubTotal} />
                                                    )
                                                })
                                            }


                                        </tbody>

                                    </table>
                                </div>
                            </div>

                            <br />
                            <div className='ttldiv'>
                                {/* <th className='ttl'>Total</th> */}
                                <h3 className='ml-auto mb-0 font-weight-bold'>
                                    <span className='text-g'>Total Rs: {subtotal}</span>
                                </h3>
                            </div>

                            <div className='d-flex align-items-center'>
                                <Link to="/">
                                    <Button className='btn-g'>
                                        <KeyboardBackspaceIcon /> Continue Shopping</Button>

                                </Link>
                                {/* <Button className='btn-g ml-auto' onClick={updateCartData}>
                    <RefreshIcon /> Update Cart</Button> */}


                            </div>

                            <ShippingForm />

                        </div>


                        <div className='col-md-4 cartRightBox'>
                            <div className='card p-4 '>
                                <div className='d-flex align-items-center mb-4'>
                                    <h5 className='mb-0 text-light'>Subtotal</h5>
                                    <h3 className='ml-auto mb-0 font-weight-bold'>
                                        <span className='text-g'>{subtotal}</span>
                                    </h3>
                                </div>

                                <div className='d-flex align-items-center mb-4'>
                                    <h5 className='mb-0 text-light'>Shipping</h5>
                                    <h3 className='ml-auto mb-0 font-weight-bold'><span >Free</span></h3>
                                </div>
                                <div className='d-flex align-items-center mb-4'>
                                    <h5 className='mb-0 text-light'>Delivary</h5>
                                    <h3 className='ml-auto mb-0 font-weight-bold'><span >Cash on Delivary</span></h3>
                                </div>


                                <div className='d-flex align-items-center mb-4'>
                                    <h5 className='mb-0 text-light'>Estimate for</h5>
                                    <h3 className='ml-auto mb-0 font-weight-bold'>Pakistan</h3>
                                </div>


                                <div className='d-flex align-items-center mb-4'>
                                    <h5 className='mb-0 text-light'>Total</h5>
                                    <h3 className='ml-auto mb-0 font-weight-bold'>
                                        <span className='text-g'>{subtotal}</span>
                                    </h3>
                                </div>


                                <br />
                                {/* <Button className='btn-g btn-lg'>Proceed To CheckOut</Button> */}


                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}

export default Cart;