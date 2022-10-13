import Image from 'next/image'
import React from 'react'

function Company() {
  return (
    <section className="companies">
  <div className="container">
    <div className="row text-center">
      <h4 className="fw-bold lead mb-3">Trusted by campanies like</h4>
      <div className="headling-line mb-5"></div>
    </div>
  </div>

  <div className="container">
    <div className="row">
        {
            // [com1,com2,com3,com4,com5,com6]
            [1,2,3,4,5,6].map((com, index)=>{
                return (
                    <div className="col-md-4 col-lg-2" key={index+1}>
                    <div className="companies__logo-box shadow-sm position-relative px-5" >
                      <Image src={`/images/campanies/campany-${com}.png`} className="img-fluid next-img" alt="Comapny imaage"  layout='fill' />
                    </div>
                  </div>
                )
            })
        }
      

    </div>
  </div>
</section>
  )
}

export default Company