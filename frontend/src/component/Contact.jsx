

import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();
    const handlemess=()=>{
      toast.success("Message sent successfully");
      navigate("/");
    }
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = async (data) => {
      
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            message: data.message,
        };
        
        try {
            await axios.post(`${window.location.origin}/usermessage/message`, userInfo);
             
        } catch (err) {
            console.log(err);
            toast.error("Error: " + err.message);  
        }
    };

    return (
        <div className="container mx-auto px-4 py-16 md:w-[500px]">
            <h1 className="text-3xl font-bold mb-8 text-center">Contact</h1>
            <h2 className="text-xl font-bold mb-2">Leave a Message</h2>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col">
                    <label htmlFor="fullname" className="mb-2 text-sm font-medium">Name</label>
                    <input 
                        type="text" 
                        id="fullname" 
                        className="shadow-sm rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full"
                        {...register("fullname", { required: true })} 
                    />
                    {errors.fullname && <span className="text-red-500 text-sm">Name is required</span>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-2 text-sm font-medium">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="shadow-sm rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full"
                        {...register("email", { required: true })} 
                    />
                    {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="mb-2 text-sm font-medium">Message</label>
                    <textarea 
                        id="message" 
                        rows="5" 
                        className="shadow-sm rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full"
                        {...register("message", { required: true })} 
                    ></textarea>
                    {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
                </div>
                <button 
                    type="submit" 
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handlemess}
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default Contact;
