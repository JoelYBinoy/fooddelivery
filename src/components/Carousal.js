import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../css/carousal.css'


function Carousal() {
    return (
        <div>
            <div>

                <div className="row">
                    <div className="col-sm-12">

                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                      

                        <Carousel className="carousel slide carousel-fade" >


                            <Carousel.Item interval={2000}>
                                <img className='img_1' src='https://i.pinimg.com/originals/c5/0f/4b/c50f4b27bed130f64cb4bf2258895514.jpg' width={1600} height={800} alt='' text="First slide" />
                               
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img className='img_1' src='https://images4.alphacoders.com/830/830166.jpg' width={1600} height={800} alt='' text="Second slide" />

                            </Carousel.Item>
                            <Carousel.Item >
                                <img className='img_1' src='https://wallpapercave.com/wp/wp3108352.jpg' width={1600} height={800} alt='' text="Third slide" />


                            </Carousel.Item>
                            
                            

                        </Carousel>
                        <div className='search' style={{zIndex:'10'}} >
                                <form className="d-flex">
                                    <input className="col-xs-4 "  type="search" placeholder="Search" aria-label="Search"/>
                                       <button className="btn btn-outline-primary" type="submit">Search</button>
                                </form>
                            </div>
                    </div>
                </div>

            </div>

        </div>



    )
}

export default Carousal