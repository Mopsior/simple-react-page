import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar'
import Header from './Header'
import Section from './Section'
import Authors from './Authors'
import Button from './Module.Button'
import Footer from './Footer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './css/index.css';
import './css/variables.css'

gsap.registerPlugin(ScrollTrigger)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <Section />
    <Authors />
    <Button text="Loromz" link="https://google.com" />
    <Footer />
  </React.StrictMode>
);
