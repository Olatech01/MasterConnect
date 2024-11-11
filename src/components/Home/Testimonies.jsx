"use client"
import React, { useState, useEffect } from 'react';

const Testimonies = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: 'Emily Rodriguez',
            title: 'Graphic Engineer',
            image: '/emily.svg',
            text: "As a graphic designer trying to showcase my talent, this job portal was a game-changer. The creative-focused job categories made it easy to target design-related opportunities, and the option to upload my portfolio directly was a big plus. It didn't take long before I found the perfect fit—a Graphic Designer role in a creative agency—thanks to this portal's thoughtful approach to job hunting."
        },
        {
            name: 'Leslie Alexander',
            title: 'Electrical Engineer',
            image: '/les.svg',
            text: "I can't express how grateful I am to this job portal for transforming my job search. As a recent graduate, I was eager to kickstart my career as a Software Engineer. This platform's user-friendly interface and comprehensive job listings made the process a breeze. Within a short time, I secured my dream job in a leading tech company, and I owe it all to this fantastic portal!"
        },
        {
            name: 'Mark Johnson',
            title: 'Computer Engineer',
            image: '/mark.svg',
            text:  "For anyone struggling with job hunting, I can't recommend this job portal enough. It changed the trajectory of my career. The resume builder and interview preparation resources were invaluable, boosting my confidence and making me stand out to employers. With multiple job offers on the table, I ultimately accepted the position of Project Manager, and it's all thanks to this incredible platform!"
        },
        {
            name: 'Sarah Wilson',
            title: 'Product Manager',
            image: '/emily.svg',
            text: "I can't express how grateful I am to this job portal for transforming my job search. As a recent graduate, I was eager to kickstart my career as a Software Engineer. This platform's user-friendly interface and comprehensive job listings made the process a breeze. Within a short time, I secured my dream job in a leading tech company, and I owe it all to this fantastic portal!"
        },
        {
            name: 'Sarah Wilson',
            title: 'Product Manager',
            image: '/emily.svg',
            text:  "For anyone struggling with job hunting, I can't recommend this job portal enough. It changed the trajectory of my career. The resume builder and interview preparation resources were invaluable, boosting my confidence and making me stand out to employers. With multiple job offers on the table, I ultimately accepted the position of Project Manager, and it's all thanks to this incredible platform!"
        },
        {
            name: 'Daniel Garcia',
            title: 'Software Engineer',
            image: '/mark.svg',
            text: "I've been looking for a new job for the past five years, and I can't say enough good things..."
        }
    ];

    const displayCount = 3;
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % testimonials.length
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 7000);
        return () => clearInterval(interval);
    }, []);

    const visibleTestimonials = [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length]
    ];

    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                {visibleTestimonials.map((testimonial, index) => (
                    <div className="testimonial-card border-2" key={index}>
                        <div className='flex items-center gap-4'>
                            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                            <div className='flex flex-col gap-3'>
                                <h3>{testimonial.name}</h3>
                                <p className="testimonial-title">{testimonial.title}</p>
                            </div>
                        </div>
                        <p className="testimonial-text text-[12px]">{testimonial.text}</p>
                    </div>
                ))}
            </div>
            <button className="prev-btn" onClick={prevSlide}>‹</button>
            <button className="next-btn" onClick={nextSlide}>›</button>

            <style jsx>{`
                .swiper-container {
                    position: relative;
                    max-width: 100%;
                    overflow: hidden;
                    padding: 20px;
                }
                .swiper-wrapper {
                    display: flex;
                    transition: transform 0.5s ease;
                    transform: translateX(-${currentIndex * (100 / displayCount)}%);
                }
                .testimonial-card {
                    flex: 0 0 33.33%;
                    box-sizing: border-box;
                    padding: 10px;
                    text-align: center;
                    background: #fff;
                    margin: 0 10px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                .testimonial-image {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    margin-bottom: 10px;
                }
                .testimonial-title {
                    font-weight: bold;
                    color: #555;
                }
                .testimonial-text {
                    font-size: 0.9rem;
                    color: #666;
                }
                .prev-btn, .next-btn {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background-color: #333;
                    color: #fff;
                    border: none;
                    padding: 10px;
                    font-size: 1.5rem;
                    cursor: pointer;
                    border-radius: 50%;
                }
                .prev-btn {
                    left: 10px;
                }
                .next-btn {
                    right: 10px;
                }
            `}</style>
        </div>
    );
};

export default Testimonies;

