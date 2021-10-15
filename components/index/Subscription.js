import React from 'react'

export default function Subscription() {
    return (
        <section className="subscribe-intro">
        <div className="auto-container">
            <div className="row clearfix">
                {/* <!--Column--> */}
                <div className="column col-md-9 col-sm-12 col-xs-12">
                    <h2>Email Subscription</h2>
                    <p>Be the first to get notified on upcoming events, scholarship or any news latest updates.</p>
                </div>
                {/* <!--Column--> */}
                <div className="column col-md-3 col-sm-12 col-xs-12">
                    <div className="text-right padd-top-20 px-5 mt-4 mt-md-0 text-center">
                        <p className="theme-btn btn-style-one" style={{cursor: 'pointer'}}>Subscribe Now</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}


