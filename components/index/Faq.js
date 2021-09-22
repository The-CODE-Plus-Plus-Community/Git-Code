import React from 'react'

function Faq() {
    return (
        <div className="container-fluid-1">
        <div className="container">
  
  <div className="row">
    <div className="col-lg-7 col-md-12" style={{paddingTop: '60px'}}>
    <h2>Frequently Asked Questions (FAQs) </h2>
    
<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        What is OpenSrc? 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        OpenSrc bring to you all that you need at one place.<br/> You name it we have it. <br/>
          ✔ Open Source Programs <br/>
          ✔ Community Building and Networking <br/>
          ✔ Tutorial Content <br/>
          ✔ Open Source Projects <br/>
          ✔ Realtime Updates on all upcoming hackathons <br/>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Why be a part of OpenSrc?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        OpenSrc is one of the first of its kind, platforms where developers can get all that they want at a single place. 
          Starting from finding people of similar tech stacks to start working on projects together, to finding timely updates on 
          all upcoming competitions, hackathons etc and you can find tutorial content as well.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Are all these for free?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Yes, all these facilities will be available to you, for free.
      </div>
    </div>
  </div>
</div>
</div>
<div className="col-lg-5 col-md-12">
  <img className="img-fluid" src="/img/faq.png" height="450px" width="550px" alt=""/>
</div>
  </div>
</div>
</div>        
    )
}

export default Faq
