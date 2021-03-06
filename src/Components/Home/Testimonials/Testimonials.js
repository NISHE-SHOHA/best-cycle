import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import Testimonial from '../Testimonial/Testimonial';

// const testimonialData = [
//     {
//         name: 'Michele',
//         img: Michele,
//         description: 'Full Service Bicycle reserves the right to determine the compatibility, suitability, authenticity,'
//     },
//     {
//         name: 'Michele',
//         img: lamar,
//         description: 'Full Service Bicycle reserves the right to determine the compatibility, suitability, authenticity,'
//     },
//     {
//         name: 'Michele',
//         img: laster,
//         description: 'Full Service Bicycle reserves the right to determine the compatibility, suitability, authenticity,'
//     }
// ]

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        fetch('https://obscure-bayou-25032.herokuapp.com/reviews')
        .then(response => response.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <section className="testimonials">
            <div className="container" id="testmonial">
                <h1>Testimonials</h1>
                <p>EVERYTHING YOU NEED FOR MILES OF ENJOYABLE CYCLING</p>
                <div className="row">
                    {
                        reviews.map(review => <Testimonial key={review._id} review={review}></Testimonial>)
                    }
                </div>    
            </div>
        </section>
    );
};

export default Testimonials;