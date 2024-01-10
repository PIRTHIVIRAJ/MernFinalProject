
import React, { useState, useEffect } from 'react';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const QuantityBox = (props) => {
    const [inputValue, setinputValue] = useState(1);
    const [cartItems, setcartItems] = useState([]);

    useEffect(() => {
        setcartItems(props.cartItems);
        //setinputValue(props.item.quantity)
    }, [props.cartItems])

    return (
        <div className='addCartSection pt-4 pb-4 d-flex align-items-center '>
            <div className='counterSec mr-3'>
                <input type='number' value={props.qty} />
                <span className='arrow plus'

                    onClick={
                        () => {
                            props.setAction('inc')
                            props.setQty(prev => prev + 1);
                        }
                    }

                ><KeyboardArrowUpIcon /></span>


                <span className='arrow minus'
                    onClick={
                        () => {
                            props.setAction('dec')
                            if (props.qty !== 1) {
                                props.setQty(prev => prev - 1);
                            }
                        }
                    }
                ><KeyboardArrowDownIcon /></span>
            </div>

        </div>
    )
}

export default QuantityBox;