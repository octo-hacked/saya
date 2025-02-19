'use client'

import React from 'react'
import { useState } from "react";
import { showServices } from '@/constants/showcase'
import { motion } from 'framer-motion';
import { faqs } from '@/constants/showcase';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { stats } from '@/constants/showcase';
import { testimonials } from '@/constants/showcase';
import { services } from '@/constants/showcase';
import LogoSlider from "@/components/LogoSlider";
import Newsletter from './Newsletter';
import Footer from './Footer';

const Hero = () => {
    const [open, setOpen] = useState(null);
    const toggle = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className='container max-w-[90vw] lg:w-[75vw] mx-auto'
            >
                <div className='flex flex-col justify-center items-center gap-4 my-2 w-full'>
                    <h1 className='text-3xl font-bold font-sans text-center'>Our Services</h1>
                    <div className='text-center px-4'>We pride ourselves on providing prompt and reliable service to our customers.</div>
                </div>

                <div className='w-full  mx-auto flex flex-col sm:flex-col md:flex-row gap-4 items-center md:items-start justify-center min-h-[400px] md:h-[570px] border-t-2 pt-5'>
                    {showServices.map((service) => (
                        <div key={service.name} className='w-full md:w-1/3 border h-full border-gray-300 rounded-lg shadow-lg'>
                            <img className='w-full h-48 object-cover' src={service.imgSrc} alt="" />
                            <div className='w-full p-2 flex flex-col justify-start gap-3'>
                                <h2 className='w-full text-xl font-semibold text-center'>{service.name}</h2>
                                <p className='w-full text-center'>{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
            <div className='container max-w-[90vw] lg:w-[75vw] mx-auto flex flex-col md:flex-row items-center md:items-start my-20 gap-8'>
                <motion.div
                    initial={{ scale: 1.3, opacity: 0, y: -100 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className='w-full sm:w-4/5 md:w-2/5'
                >
                    <img className='w-full object-cover rounded-lg' src="/showCase Assets/Home1.jpg" alt="" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className='w-full sm:w-4/5 md:w-3/5 my-auto p-5 flex flex-col gap-4 text-center md:text-left'
                >
                    <h2 className='text-2xl font-semibold'>Saya Elevator Industries Pvt.Ltd</h2>
                    <p>
                        Saya Elevator is a leading supplier of elevator machines & spare parts. We are totally focused on fulfillment of customers' needs. Saya's policy is to manufacture & deliver timely elevator machines that will perform reliably & effectively in total fulfillment of customers' requirements. <br /><br />

                        Saya elevator machines have been designed for use by the lift industry. Our below traction machines conform to the highest safety & performance standards and thus are the natural choice of leading national & international elevator manufacturers. We are adequately supported by our vendors, who ensure quality & timely supplies. <br /><br />

                        Our selection of elevator machines includes a range of options to fit your specific needs, whether you're installing a new elevator or upgrading an existing system. Our machines are built to last and designed to provide reliable, efficient performance for years to come.
                    </p>
                </motion.div>
            </div>
            <div className="container max-w-[90vw] lg:w-[75vw] mx-auto flex flex-col md:flex-row-reverse items-center my-10 gap-6">
                {/* Image comes first on small screens */}
                <motion.div
                    initial={{ scale: 1.3, opacity: 0, y: -100 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full md:w-2/5"
                >
                    <img className="w-full object-cover rounded-lg" src="/showCase Assets/Rectangle 4.jpg" alt="" />
                </motion.div>

                {/* Text comes below image on small screens */}
                <motion.div
                    initial={{ opacity: 0,y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full md:w-3/5 p-5 flex flex-col gap-4 text-center md:text-left"
                >
                    <h2 className="text-2xl font-semibold">Saya Elevator Industries Pvt.Ltd</h2>
                    <p>Elevator systems require high-quality and reliable components to ensure their safe and efficient operation. That's why we offer a wide range of elevator parts that are built to last and provide reliable performance. Our selection of elevator parts includes everything from motors and control systems to doors and lighting fixtures, all designed to meet the highest standards of quality and reliability. <br /><br />

                        We work with top manufacturers to ensure that our parts are of the highest quality, and we offer a range of options to fit your specific needs and budget. In addition to our extensive selection of elevator parts, we also offer expert installation and maintenance services to ensure that your elevator system is always functioning at its best. <br /><br />

                        Our experienced technicians can help you select the right parts for your system, and provide ongoing support and maintenance to keep it running smoothly.
                    </p>
                </motion.div>
            </div>
            <div className="bg-blue-500 py-10">
                <div className="container max-w-[90vw] lg:w-[75vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.2 }}
                            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center gap-4 text-center"
                        >
                            <div className="text-4xl text-black">{stat.icon}</div>
                            <h3 className="text-lg font-semibold">{stat.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="container max-w-[90vw] lg:w-[75vw] mx-auto"
            >
                {/* Title Section */}
                <div className="flex flex-col justify-center items-center gap-4 my-2 w-full md:w-1/2 mx-auto border-b-2 py-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold font-sans">Our Top Notch Materials</h1>
                    <p className="text-base md:text-lg">Here at our company, we take pride in offering only the highest quality elevator materials to ensure the utmost safety and reliability for our customers.</p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            <img src={service.imgSrc} alt={service.title} className="w-full h-56 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{service.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="container w-[90vw] lg:w-[75vw] mx-auto"
            >
                <div className="flex flex-col justify-center items-center gap-4 my-2 w-full md:w-3/4 lg:w-1/2 mx-auto border-b-2 py-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold font-sans">Elevator Inspection</h1>
                    <p className="text-base md:text-lg">Regular elevator inspections are critical to prevent accidents and ensure the safe operation of elevators in buildings.</p>
                </div>
            </motion.div>
            <div className="container w-[90vw] lg:w-[75vw] mx-auto my-5 flex flex-col-reverse md:flex-row-reverse items-center gap-6 md:gap-10">
                <motion.div
                    initial={{ scale: 1.3, opacity: 0, y: -100 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full md:w-[50%]"
                >
                    <img className="w-full h-auto object-cover rounded-lg" src="/showCase Assets/elevator-inspection.jpeg" alt="Elevator Inspection" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full md:w-[50%] flex flex-col gap-4 p-4 md:p-6"
                >
                    <p className="text-base md:text-md leading-relaxed">
                        Elevator repair and maintenance is a critical aspect of ensuring the safe and efficient operation of elevators in buildings. The process involves a variety of tasks, including routine inspections, preventative maintenance, and emergency repairs.
                        At the heart of elevator maintenance is a team of skilled workers who are responsible for keeping elevators in top condition. These workers typically include mechanics, technicians, and engineers who have specialized training in elevator repair and maintenance.
                        <br /><br />
                        The repair and maintenance process typically begins with routine inspections to identify any potential issues or areas of concern. This may involve checking the elevator's mechanical components, including the cables, pulleys, and motor, as well as the electronic control systems that govern its operation.
                        Preventative maintenance is another key component of the process. This involves conducting regular maintenance tasks, such as lubrication, cleaning, and adjusting components to ensure they are working properly.
                    </p>
                </motion.div>
            </div>
            <br></br>
            <div
                className="h-[100vh] bg-cover md:bg-cover bg-no-repeat flex flex-col justify-center items-center gap-5 px-4 text-center"
                style={{ backgroundImage: "url('showCase Assets/experience.jpg')" }}
            >
                <div className="flex flex-col gap-4 justify-center items-center max-w-2xl">
                    <h2 className="text-xl md:text-4xl font-bold">Expertise in Elevator Industry Parts Supply</h2>
                    <p className="text-sm md:text-lg font-semibold text-gray-500">
                        We pride ourselves on providing prompt and reliable service to our customers.
                    </p>
                </div>
                <br></br>
                {/* Experience Box */}
                <div className="bg-white flex flex-col justify-center items-center max-w-[400px] w-full px-4 py-5 shadow-lg rounded-lg">
                    <div>
                        <img className="w-full mx-auto rounded-t-lg" src="showCase Assets/yrs-experience.jpg" alt="years" />
                    </div>
                    <div className="flex flex-col justify-center items-center py-5">
                        <h2 className="text-lg md:text-2xl font-semibold">20 Years Experience</h2>
                        <p className="text-sm md:text-xl text-center">
                            We have 20 years of experience and are committed to excellence.
                        </p>
                    </div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="container w-[90vw] md:w-[65vw] mx-auto border-b-2 py-5"
            ><br></br><br></br>
                <div className="flex flex-col justify-center items-center gap-4 my-2 w-full text-center">
                    <h1 className="text-xl md:text-3xl font-bold font-sans">Our Dealers</h1>
                    <p className="text-sm md:text-lg">
                        Our trusted network of dealers is committed to providing reliable and efficient elevator solutions to meet your unique needs.
                    </p>
                </div>
            </motion.div>
            <LogoSlider />
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="container w-[90vw] md:w-[65vw] mx-auto"
            >
                <div className="flex flex-col justify-center items-center gap-4 my-2 w-full md:w-[50%] mx-auto border-b-2 py-5 text-center ">
                    <h1 className="text-xl md:text-3xl font-bold font-sans">Why Choose Us?</h1>
                    <p className="text-sm md:text-lg">
                        Here at our company, we take pride in offering only the highest quality elevator materials to ensure the utmost safety and reliability for our customers.
                    </p>
                </div>

                <p className="text-sm md:text-lg leading-relaxed">
                    We are a leading provider of high-quality elevators for residential, commercial, and industrial buildings. Our commitment to excellence and customer satisfaction is unmatched in the industry.
                    <br /><br />
                    When you choose Saya Elevator, you can rest assured that you are receiving the very best in elevator technology, design, and installation. Our team of experienced professionals will work closely with you to ensure that your elevator is tailored to meet your specific needs and requirements.
                    <br /><br />
                    We offer a wide range of elevator solutions, including passenger elevators, freight elevators, home elevators, and accessibility lifts. All of our elevators are built using the latest technology and the highest quality materials, ensuring superior performance and durability.
                    <br /><br />
                    At Saya Elevator, we take great pride in our work and strive to exceed your expectations at every turn. Whether you are looking for a new elevator installation, modernization of an existing elevator, or routine maintenance and repair services, we are here to help.
                    <br /><br />
                    Thank you for considering Saya Elevator for your elevator needs. We look forward to serving you and helping you take your building to new heights.
                </p>
            </motion.div>
            <div className="container w-[90vw] md:w-[65vw] mx-auto my-12">
                <h2 className="text-xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b pb-4">
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggle(index)}>
                                <h3 className="text-base md:text-lg font-medium">{faq.question}</h3>
                                {open === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: open === index ? "auto" : 0, opacity: open === index ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <p className="mt-2 text-gray-600 text-sm md:text-base">{faq.answer}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container w-full md:w-[75vw] mx-auto my-12 px-5">
                <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="border rounded-lg shadow-md overflow-hidden">
                            <div className={`${testimonial.bgColor} h-32`}></div>
                            <div className="flex flex-col items-center -mt-12">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-24 h-24 rounded-full border-4 border-white"
                                />
                                <h3 className="text-xl font-semibold mt-4 border-t-2 w-[90%] text-center py-4">{testimonial.name}</h3>
                                <p className="mt-4 px-6 pb-6 text-center text-gray-700">{testimonial.testimonial}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Hero
