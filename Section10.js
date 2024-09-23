import React from 'react'

export default function Section10() {
  return (
    <div>
       <div className="container-fluid pt-5 sec10">
        <div className="row color mt-5">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="col-sm-12 col-lg-1   mt-5 mb-5"></div>
          ))}
          <div className="col-sm-12 col-lg-2 col-md-6 mt-5 mb-5">
            <button className="p-2  bod">Jobs</button>
          </div>
          <div className="col-sm-12 col-lg-2 col-md-6 mt-5 mb-5">
            <button className="p-2  bod ">Featured</button>
          </div>
          <div className="col-sm-12 col-lg-2 col-md-6 mt-5 mb-5">
            <a href="./customer">
              <button className="p-2 bod">Customers</button>
            </a>
          </div>
          <div className="col-sm-12 col-lg-2 col-md-6 mt-5 mb-5">
            <a href="./pricing">
              <button className="p-2  bod">Pricing</button>
            </a>
          </div>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="col-sm-12 col-lg-1 col-md-2 mt-5 mb-5"></div>
          ))}
        </div>
      </div>
      {/* Section 10 End */}
    </div>
  )
}
