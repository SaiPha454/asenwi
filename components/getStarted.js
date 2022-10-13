import React from 'react'

function GetStarted() {
  return (
    <section className="get-started">
  <div className="container">
    <div className="row text-center">
      <h1 className="display-3 fw--bold text-capitalize">
        Get Started
      </h1>
      <div className="headling-line"></div>
      <p className="lead mt-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero illum architecto modi.
      </p>
    </div>

    {/* <!-- Start of Form content --> */}
    <div className="row text-white">

      <div className="col-12 col-lg-6 gradient shadow p-3">
        <div className="cta-info w-100">
          <h4 className="display-4 fw-bold">
            100% Satisfaction Guaranteed
          </h4>
          <p className="lh-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Debitis eveniet deserunt officia natus veritatis vitae autem? Ab, nemo doloremque natus 
            officiis necessitatibus quis odio cumque voluptatibus quos repellat aliquam expedita.
          </p>
          <h3 className="disply-33--breif">
            What will be the next step?
          </h3>
          <ul className="cta-info__list">
            <li>{"We'll"} prepare the proposal.</li>
            <li>{"we'll "}discuss it together.</li>
            <li>{"let's"} start the discussion.</li>
          </ul>
        </div>
      </div>


      <div className="col-12 col-lg-6 bg-white shadow p-3">
        <div className="form w-100 pb-2">
          <h3 className="display-3--title mb-5">Start Your Project</h3>
          <div className="row">
            <form action="#" className="row">
              <div className="col-lg-6 col-md-6 mb-3">
                <input type="text" placeholder="First Name" id="inputFirstName" className="shadow form-control form-control-lg"/>
              </div>
              <div className="col-lg-6 col-md-6 mb-3">
                <input type="text" placeholder="Second Name" id="inputSecondName" className="shadow form-control form-control-lg"/>
              </div>
              <div className="mb-3">
                <input type="email" placeholder="Email" id="inputSecondName" className="shadow form-control form-control-lg"/>
              </div>
              <div className="mb-3">
                <textarea className="form-control"  rows="6" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
              </div>
              <div className="text-center d-grid mt1">
                <button className="btn btn-primary rounded-pill pt-3 pb-3">
                  submit
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default GetStarted