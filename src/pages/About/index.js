import React from 'react';
import './style.css';
import newsletter from '../../assets/images/newsletter.png';

const About = () => {
    return (
        <>
            <section class="custom-about-us">
                <div class="custom-about">
                    <img src={newsletter} className='custom-pic' />
                    <div class="custom-text">
                        <h2>About Us</h2>
                        <h5>Grocery <span>Store</span></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About;