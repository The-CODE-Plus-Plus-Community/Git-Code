import React from 'react'
import AboutCard from './AboutCard'

function About() {
    return (
        <>
            <div id="maindiv">
                <div className="container-fluid">
                    <div className="row justify-content-md-center flex-md-row flex-column-reverse">
                        <div className="col-md-4">
                            <div className="abtcard">
                            <AboutCard number="1" para="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                            </div>
                            <div className="abtcarddiv">
                                <div className="abtcard1">
                                <AboutCard number="2" para="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                                </div>
                            </div>
                            <div className="abtcard">
                            <AboutCard number="3" para="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                            </div>
                        </div>
                        <div className="col-md-6" id="abtusdiv">
                            <div className="abtustxt">
                                <div className="abtusheading">
                                    <h1 id="h21" className="mt-1"></h1>
                                    <h1 className="abtustit">About Us</h1>
                                    <h1 id="h22" className="mt-1"></h1>
                                </div>
                                <h2 className="finalh2">We provide the best Resources <span className="OStitle">for Open Source</span></h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ut tenetur consequatur. Aliquid, eveniet
                                    provident. Molestias, commodi, aut adipisci a optio minus, ea alias odio harum quidem in impedit et.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ut tenetur consequatur. Aliquid, eveniet
                                    provident. Molestias, commodi, aut adipisci a optio minus, ea alias odio harum quidem in impedit et.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
