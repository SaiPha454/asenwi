import React,{useState} from 'react'
import {Collapse} from './dyanmic-import'
function Faq() {
    const featuresData=[
        {
            id:1,
            "feature":"What are the main features"
        },
        {
            id:2,
            "feature":"DO I have to pay after trail?"
        },
        {
            id:3,
            "feature":"How can I get started after trail?"
        },
        {
            id:4,
            "feature":"Can I refuned if I am not satisfied?"
        }
    ]
    const [features,setFeatures] = useState(featuresData);
  return (
    <section id="section-faq" className="faq" >
      <Collapse/>
  <div className="container">
    <div className="text-center">
      <h1 className="display-3 fw-bold text-uppercase">faq</h1>
      <div className="heading-line"></div>
      <p className="lead">frequently asked questions, get knowledge befere hand</p>
    </div>

    {/* <!-- Accordion --> */}
    <div className="row">
      <div className="col-md-12 mt5">
        <div className="accordion" id="accordionExample">
            {
                features.map((feature,index)=>{
                    return (
                        <div className="accordion-item shadow mb-3" key={`${feature.feature}-${index}`}>
                        <h2 className="accordion-header" id={`heading-${feature.id}`}>
                          <button className={`accordion-button ${feature.id  == 1 ? '': 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${feature.id}`} aria-expanded="true" aria-controls={`collapse-${feature.id}`}>
                            {
                                feature.feature
                            }
                          </button>
                        </h2> 
                        <div id={`collapse-${feature.id}`} className={`accordion-collapse collapse ${feature.id == 1 ? 'show' : ''}`} aria-labelledby={`heading-${feature.id}`} data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <strong>{"This is the first item's accordion body."}</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {"It's"} also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                          </div>
                        </div>
                      </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Faq