import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import QuantityBox from '../quantityBox';
import { Rating } from '@mui/material';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useCart } from '../../providers';
const CartItem = ({ item, deleteItem, setSubTotal }) => {

    const [price, setPrice] = useState(parseInt(item?.price.split(",").join("")) * item?.quantity);
    const [qty, setQty] = useState(item?.quantity);
    const [action, setAction] = useState('inc');
    const { updateCartItem } = useCart();
    const itemP = parseFloat(item.price.split(",").join(""));

    useEffect(() => {
        // update Cart in provider
        if (item?.quantity !== undefined) {
            updateCartItem(item, qty);
            const itemPrice = parseFloat(item.price.split(",").join(""));
            setPrice(itemPrice * qty); // Update the price based on the new quantity
            if (action === 'inc') {
                setSubTotal((prev) => prev + itemP * qty);
            } else {
                setSubTotal((prev) => prev - itemP * qty);
            }
        }
    }, [qty]);


    return (
        <tr>
            <td width={"50%"}>
                <div className='d-flex align-items-center'>

                    <div className='img'>
                        <Link to={`/product/${item.id}`}>
                            <img src={item.catImg + '?im=Resize=(100,100)'} className='w-100' />
                        </Link>
                    </div>


                    <div className='info pl-4'>
                        <Link to={`/product/${item.id}`}><h4>{item.productName}</h4></Link>
                        <Rating name="half-rating-read"
                            value={parseFloat(item.rating)} precision={0.5} readOnly /> <span className='text-light'>({parseFloat(item.rating)})</span>
                    </div>

                </div>
            </td>

            <td width="20%"><span>Rs: {itemP}</span></td>

            <td>
                <QuantityBox qty={qty} setQty={setQty} setAction={setAction} />
            </td>

            <td>
                <span className='text-g'>Rs. {item.price * qty}</span>
            </td>

            <td align='center'>
                <span className='cursor'
                    onClick={() => deleteItem(item.id)}
                ><DeleteOutlineOutlinedIcon /></span>
            </td>

        </tr>
    )
}

export default CartItem
