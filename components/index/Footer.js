import React from 'react';

function Footer() {
    return(

        <footer>
        <div className="container">
            <div className="sec abt_soc">
                
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur pariatur eos porro, dicta voluptatibus quam, temporibus numquam voluptatum ullam consectetur nesciunt, qui nobis quasi cumque hic aut dolorum nostrum. Blanditiis sint, accusamus culpa minima quos animi ipsum excepturi numquam quas laudantium totam corporis voluptatibus quam, facere eos incidunt reprehenderit.</p>
               
            </div>
            
            <div className="sec quicklinks">
                <h2>Quick Links</h2>
                <ul className="contacts">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Features</li>
                    <li>Subscribe</li>
                    <li>FAQ's</li>
                </ul>
            </div>

            <div className="sec contact">
                <h2>Contact Info</h2>
                <ul className="info">
                    <li>
                        <span><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                        <span>647 Linda Street <br />
                        Phoenixville, PA 19460,<br />USA </span>
                    </li>

                    <li>
                        <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                        <p>+91 XXX XXX XXXX<br />
                        +91 XXX XXX XXXX</p>
                    </li>

                    <li>
                        <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
                        <p>123@abc.com</p>
                    </li>

                </ul>
            </div>
            <div className="copyright col-12">
            <p>Some Copyright © information. All Rights Reserved. </p>
        </div>
        </div>
        

    </footer>

    )
}

export default Footer