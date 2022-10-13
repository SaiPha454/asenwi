import Image from 'next/image'
import React,{useState} from 'react'

function Portfolio() {
    const [projects,setProjects]=useState([1,2,3,4,5,6,7,8,9]);
    const [filters, setFilters]=useState([
        "All", "Website","Design","Mockup"
    ])
  return (
    <section className="portfolio" id='section-portfolio'>
  <div className="container">
    <div className="row text-center mt-5">
      <h1 className="display-3 fw-bold text-capitalize">
        Latest Work
      </h1>
      <div className="headling-line"></div>
      <p className="lead mt-3 pt-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro temporibus distinctio.
      </p>
    </div>
    {/* <!-- Filter Button --> */}
    <div className="row text-center mt-5 mb-3 g-3">
      <div className="col-md-12 ">
        {
            filters.map((filter,index)=>{
                return  <button key={`${filter}-${index}`} className="btn btn-outline-primary mx-1" type="button">{filter}</button>
            })
        }
      </div>
    </div>

    {/* <!-- Images of portfolio --> */}
    <div className='row'>
        {
            projects.map((proj,index)=>{
                return(
                    <div className="col-lg-4 col-md-6" key={`project-${index}`}>
                    <div className="portfolio-box shadow">
                      <Image placeholder='blur' blurDataURL='/images/blur.png' src={`/images/portfolio/portfolio-${proj}.jpg`} alt="Images" className="img-fluid" layout='fill' />
                      <div className="portfolio-info">
                        <div className="caption  text-center">
                          <h4>Project name goes here {proj}</h4>
                          <p>category project</p>
                        </div>
                      </div>
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

export default Portfolio