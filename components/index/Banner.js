import React from 'react'

function Banner() {
    return (

        <div className="container-fluid  Hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 main-content">
                        <h2>Contributing becomes easy!!</h2>
                        <h4>The one-stop platform for developers!</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus tenetur saepe veniam minus officia laudantium tempore maxime voluptatem? Assumenda, vitae maxim vckjd !</p>
                        <div className="buttons">
                            <button className="btn1">Explore <img className="btn-img" src="/img/photo-camera.png" alt="" width="25" height="25" /></button>
                            <button className="btn2">&nbsp;Join Us &nbsp;</button>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 main-picture">
                        <img className="img1" src="/img/Other 03.png" alt="" width="100px" height="100px" />
                        <img className="img2" src="/img/Other 07.png" alt="" width="100px" height="100px" />
                        <img className="img3" src="/img/Other 03.png" alt="" width="100px" height="100px" />

                        <img className="img4" src="/img/Saly-10.png" alt="" width="600px" height="600px" />



                    </div>


                </div>
            </div>
        </div>

    )
}

export default Banner
