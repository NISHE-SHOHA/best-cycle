import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = (data, e) => {
        const serviceData = {
            name: data.name,
            price: data.price,
            description: data.description,
            imageURL: imageURL
        }
        fetch('https://obscure-bayou-25032.herokuapp.com/addService', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(response => {
            if(response){
                alert('Service added successfully')
            }
        })
        e.target.reset()
    };
    
    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', 'c02c3069981bf3b5935d19ccd946c94d')
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(response => {
            setImageURL(response.data.data.display_url)
        })
        .catch(err => {
            console.log(err)
        })

    }

    return (
        <div className="review-area">
            <h3 className="text-white p-5">Add A Service</h3>
            <form className='review-form' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input name="name" type="text" placeholder="Enter Name" required ref={register} />

                <label htmlFor="price">Price</label>
                <input name="price" type="text" placeholder="Enter Price" required ref={register} />

                <label htmlFor="Image">Image</label>
                <input name="file" type="file" placeholder="Upload image" onChange={handleImageUpload} required />

                <label htmlFor="description">Description</label>   
                <textarea name="description" type="text" placeholder="Description" required ref={register}  />
                
                <input className="submit-btn" type="submit" />
            </form>
        </div>
    );
};

export default AddService;