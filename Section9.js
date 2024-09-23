import React from 'react';

const Sections = () => {
  return (
    <>
     
      {/* Section 9 Start */}
      <div className="container-fluid">
        <div className="row ml-2 mb-5">
          <div className="col-xl-10">
            <h4>
              <b>From the blog</b>
            </h4>
          </div>
          <div className="col-xl-2">
            <button className="p-2 moreposts ml-5">
              <b>More posts</b>
            </button>
          </div>
        </div>

        {[...Array(6)].map((_, index) => (
          <div key={index} className="row mb-5 hov">
            <div className="col-xl-2 mt-5 headings">
              <h6 className="ml-5">
                <b>{index % 2 === 0 ? 'Blog Post' : 'Job Collection'}</b>
              </h6>
            </div>
            <div className="col-xl-5 mt-5 headings">
              <h3 className="title-3 ml-5">
                <b>The Truth About Finding Your First Engineering Job</b>
              </h3>
            </div>
            <div className="col-xl-5 mt-5 red">
              <div className="w-75">
                <p style={{ color: 'black' }} className="para">
                  Even for senior engineers, job searches can be confusing, frustrating affairs.
                  When you're a junior engineer looking for your first job...
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Section 9 End */}

     
    </>
  );
};

export default Sections;
