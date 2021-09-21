import React from 'react';

function Cards() {
    return (
        <div>
            <div className="container-fluid py-4 main_card">
                <p className="text-center mb-5 features mt-5">FEA<span style={{ color: "#D21BAA"}}>TU</span>RES</p>


                <div className="row align-items-center g-5 px-5 py-5 mx-lg-5" >

                    {/*events*/}
                    <div className="col-12 col-md-6 mt-5 mb-md-5 mb-3">
                        <div className="card">
                            <div data-aos="fade-down-left">
                                <img src="/img/calendar_front.png" className="img-fluid img" alt="alt" /></div>
                            <div className="card-body mx-3">
                                <div className="row">
                                    <div className="col align-items-center d-flex">
                                        <h3 className="card-title mt-2">Events</h3>
                                    </div>
                                </div>
                                <p className="card-text mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est vero? Provident necessitatibus ullam maiores, culpa exercitationem voluptatem assumenda aliquid perferendis error, modi quidem.</p>
                            </div>
                        </div>
                    </div>

                    {/*programs*/}
                    <div className="col-12 col-md-6 mt-5 mb-md-5 mb-3">
                        <div className="card">
                            <div data-aos="fade-down-left">
                                <img src="/img/rocket2.png" className="img-fluid image1 rocket" alt="alt"/></div>
                            <div className="card-body mx-3">
                                <div className="row">
                                    <div className="col align-items-center d-flex">
                                        <h3 className="card-title mt-2">Programs</h3>
                                    </div>
                                </div>
                                <p className="card-text mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est vero? Provident necessitatibus ullam maiores, culpa exercitationem voluptatem assumenda aliquid perferendis error, modi quidem.</p>
                            </div>
                        </div>
                    </div>

                    {/*Projects*/}
                    <div className="col-12 col-md-6">
                        <div className="card">
                            <div data-aos="fade-down-left">
                                <img src="/img/controller.png" className="img-fluid image1 control" alt="alt" /></div>
                            <div className="card-body mx-3">
                                <div className="row">
                                    <div className="col align-items-center d-flex">
                                        <h3 className="card-title mt-2">Projects</h3>
                                    </div>
                                </div>
                                <p className="card-text mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est vero? Provident necessitatibus ullam maiores, culpa exercitationem voluptatem assumenda aliquid perferendis error, modi quidem.</p>
                            </div>
                        </div>
                    </div>

                    {/*Tutorials*/}
                    <div className="col-12 col-md-6">
                        <div className="card">
                            <div data-aos="fade-down-left">
                                <img src="/img/lappy.png" className="img-fluid image1 lappy" alt="alt" /></div>
                            <div className="card-body mx-3">
                                <div className="row">
                                    <div className="col align-items-center d-flex">
                                        <h3 className="card-title mt-2">Tutorials</h3>
                                    </div>
                                </div>
                                <p className="card-text mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est vero? Provident necessitatibus ullam maiores, culpa exercitationem voluptatem assumenda aliquid perferendis error, modi quidem.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cards
