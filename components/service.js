import React from 'react'
import Image from 'next/image';

function Service() {
  return (
    <section className="services" id='section-service'>
  <div className="container">
    <div className="row text-center">
      <h1 className="display-3 fw-bold mb-3">Our Services</h1>
      <div className="headling-line"></div>
    </div>
 
{/* 
  <!-- Content --> */}
 
    <div className="row pt-2 mt-1 mb-1">
      <div className="col-md-6 border-right">
        <div className="bg-white p-3">
          <h2 className="fw-bold text-capitalize text-center">
            Our Services Range From Initial Design To Deployment Anywhere Anytime
          </h2>
        </div>
      </div>
      <div className="col-md-6">
        <div className="bg-white p-3">
          <p className="fw-light">
            Lorem ipsum dolor sit amet consectetur architecto magni, dicta maxime laborum temporibus dolorem esse doloremque illo quas nisi enim molestias. Tempore ducimus molestiae in dolore enim.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Start of services content --> */}
  <div className="container">
    {/* <!-- Frist --> */}
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 ">
        <div className="services_content">
          <div className="icon fas fa-paper-plane"></div>
          <h3 className="display-3--title mt-1">Marketing</h3>
          <p className="lh-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit rem, doloremque autem quibusdam blanditiis harum alias hic accusantium maxime atque ratione magni repellat?
          </p>
          <button className="rounded-pill learn-btn border-primary">
            Learn more <span><i className="fas fa-arrow-right"></i></span>
          </button>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end services_pic-container">
        <div className="services_pic position-relative">
          <Image src='/images/services/service-1.png' alt="marketing" width={500} height={500} className="img-fluid "/>
        </div>
      </div>
    </div>
    {/* <!-- second --> */}
    <div className="row">

      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 order-md-last">
        <div className="services_content">
          <div className="icon fas fa-code"></div>
          <h3 className="display-3--title mt-1">Web Development</h3>
          <p className="lh-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit rem, doloremque autem quibusdam blanditiis harum alias hic accusantium maxime atque ratione magni repellat?
          </p>
          <button className="rounded-pill learn-btn border-primary">
            Learn more <span><i className="fas fa-arrow-right"></i></span>
          </button>
        </div>
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start services_pic-container">
        <div className="services_pic">
          <Image width={500} height={500} src="/images/services/service-2.png" alt="Web Development" className="img-fluid"/>
        </div>
      </div>
    </div>
    {/* <!-- Third --> */}
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
        <div className="services_content">
          <div className="icon fas fa-cloud-arrow-up">
            
          </div>
          <h3 className="display-3--title mt-1">Cloud Hosting</h3>
          <p className="lh-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit rem, doloremque autem quibusdam blanditiis harum alias hic accusantium maxime atque ratione magni repellat?
          </p>
          <button className="rounded-pill learn-btn border-primary">
            Learn more <span><i className="fas fa-arrow-right"></i></span>
          </button>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end services_pic-container">
        <div className="services_pic">
          <Image width={500} height={500} src="/images/services/service-3.png" alt="Cloud Hosting" className="img-fluid"/>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Service