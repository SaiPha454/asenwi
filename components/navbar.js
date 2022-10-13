import React,{useEffect} from 'react'
import Image from 'next/image';
import logoImg from 'public/images/logo.png';
import MobileNavBar from './mobileNavbar';
import Link from 'next/link';

function Navbar() {

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
            <div className="container">
            <span className="navbar-brand logo" >
                <Link className='' href="/">Asenwi</Link>
            </span>
            <button id="navbar-toggler"  data-bs-toggle="collapse"  data-bs-target="#navbarNav" className="navbar-toggler navbar-toggler-button nav-link-mobile-toggler" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i id="navbar-toggler-icon" className="bi bi-list"></i>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item"  >
                    <a className="nav-link active"
                    aria-current="page" href="#section-home">Home</a>
                </li>

                <li className="nav-item" >
                    <a href="#section-service" className="nav-link" >Services</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#section-testimonial">Testimonials</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link " href='#section-faq'>Faq</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#section-portfolio" >Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href='#section-contact'>Contact</a>
                </li>
                </ul>
                <button type="button" className="rounded-pill call-btn">+959 696369146
                <span>
                    <i className="fas fa-phone-alt"></i>
                </span>
                </button>
            </div>
            </div>
        </nav>
        {/* <MobileNavBar  /> */}
    </>
  )
}

export default Navbar