import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Service from './Service';
import Skill from './Skill';
import Project from './Project';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Service/>
            <Skill/>
            <Project/>
            <Testimonial/>
        </div>
    );
};

export default Home;