import React from 'react'
import './style.css'
import newsletter from '../../assets/images/newsletter.png';

const Contact = () => {
    return (
        <>
            <div className="contact">
                <img src={newsletter} className='pic' />
                <div className="custom-container">
                    <div className="custom-text">Contact Us</div>
                    <form action="#">
                        <div className="custom-form-row">
                            <div className="custom-input-data">
                                <input type="text" required />
                                <div className="custom-underline"></div>
                                <label for="">First Name</label>
                            </div>
                            <div className="custom-input-data">
                                <input type="text" required />
                                <div className="custom-underline"></div>
                                <label for="">Last Name</label>
                            </div>
                        </div>
                        <div className="custom-form-row">
                            <div className="custom-input-data">
                                <input type="text" required />
                                <div className="custom-underline"></div>
                                <label for="">Email Address</label>
                            </div>
                            <div className="custom-input-data">
                                <input type="text" required />
                                <div className="custom-underline"></div>
                                <label for="">Website Name</label>
                            </div>
                        </div>
                        <div className="custom-form-row">
                            <div className="custom-input-data custom-textarea">
                                <textarea rows="8" cols="80" required></textarea>
                                <br />
                                <div className="custom-underline"></div>
                                <label for="">Write your message</label>
                                <br />
                                <div className="custom-form-row custom-submit-btn">
                                    <div className="custom-input-data">
                                        <div className="custom-inner"></div>
                                        <input type="submit" value="submit" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Contact
