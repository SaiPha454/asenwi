import React from 'react'

function MobileNavBar({toggleNavBar}) {

  return (
    <div className="mobile-nav" id="mobile-nav">
        <div className="container">
            <div  className="mobile-nav-menu">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a  className="nav-link nav-link-mobile-toggler" aria-current="page" href="#section-home">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link nav-link-mobile-toggler"  href="#section-service">Services</a>
                </li>
                <li className="nav-item">
                <a className="nav-link nav-link-mobile-toggler"  href="#section-testimonial">Testimonials</a>
                </li>
                <li className="nav-item">
                <a className="nav-link nav-link-mobile-toggler" href='#section-faq'>Faq</a>
                </li>
                <li className="nav-item">
                <a className="nav-link nav-link-mobile-toggler"  href="#section-portfolio" >Portfolio</a>
                </li>
                <li className="nav-item">
                <a className="nav-link nav-link-mobile-toggler"  href='#section-contact'>Contact</a>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default MobileNavBar