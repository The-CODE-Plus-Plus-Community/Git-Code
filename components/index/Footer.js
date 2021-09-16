import React from 'react'

function Footer() {
    return(

        <footer>
        <div className="container">
            <div className="sec abt_soc">
                
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur pariatur eos porro, dicta voluptatibus quam, temporibus numquam voluptatum ullam consectetur nesciunt, qui nobis quasi cumque hic aut dolorum nostrum. Blanditiis sint, accusamus culpa minima quos animi ipsum excepturi numquam quas laudantium totam corporis voluptatibus quam, facere eos incidunt reprehenderit.</p>
               
                <ul className="social">
                    <li><a className="sh" chref="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a className="sh" href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a className="sh" href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a className="sh" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            <div className="sec quicklinks">
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">FAQ</a></li>  
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div className="sec contact">
                <h2>Contact Info</h2>
                <ul className="info">
                    <li>
                        <span><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                        <span>647 Linda Street <br>
                        Phoenixville, PA 19460,<br>USA </span>
                    </li>

                    <li>
                        <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                        <p><a href="">+91 XXX XXX XXXX</a> <br>
                        <a href="">+91 XXX XXX XXXX</a> </p>
                    </li>

                    <li>
                        <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
                        <p><a href="#">123@abc.com</a></p>
                    </li>

                </ul>
            </div>
        </div>
        
        <div className="copyright">
            <p>Copyright © 2021 OpenSource. All Rights Reserved. </p>
        </div>

    </footer>

    )
}

export default Footer