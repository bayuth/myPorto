import React, {Component} from 'react';
import './css/PortofolioSection.css';
import './css/bootstrap.css';
import Porto from './img/porto.PNG';

class Portofolio extends Component{
    render(){
        return(
            <section className="port-area section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main_title">
                                <p className="top_text">Our Portofolio <span></span></p>
                                <h2>Latest Project <br></br>
                                     </h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="thumb">
                                    <img className="img-fluid" src={Porto} alt=""/>
                                </div>
                                <div className="short_details">
                                    <div className="meta-top d-flex">
                                        <a href="#"><i className="ti-user"></i> Admin post</a>
                                        <a href="#"><i className="ti-calendar"></i> Feb 14, 2019</a>
                                    </div>
                                    <a className="d-block" href="single-blog.html">
                                        <h4>Shall every fourth lesser have...</h4>
                                    </a>
                                    <div className="text-wrap">
                                        <p>
                                            Have whose a two night earth she set you creeping replenish place whales move Forth first him seed green.
                                        </p>
                                    </div>
                                    <a href="#" className="primary_btn2">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="thumb">
                                    <img className="img-fluid" src={Porto} alt=""/>
                                </div>
                                <div className="short_details">
                                    <div className="meta-top d-flex">
                                        <a href="#"><i class="ti-user"></i> Admin post</a>
                                        <a href="#"><i class="ti-calendar"></i> Feb 14, 2019</a>
                                    </div>
                                    <a className="d-block" href="single-blog.html">
                                        <h4>Shall every fourth lesser have...</h4>
                                    </a>
                                    <div className="text-wrap">
                                        <p>
                                            Have whose a two night earth she set you creeping replenish place whales move Forth first him seed green.
                                        </p>
                                    </div>
                                    <a href="#" className="primary_btn2">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="thumb">
                                    <img className="img-fluid" src={Porto} alt=""/>
                                </div>
                                <div className="short_details">
                                    <div className="meta-top d-flex">
                                        <a href="#"><i className="ti-user"></i> Admin post</a>
                                        <a href="#"><i className="ti-calendar"></i> Feb 14, 2019</a>
                                    </div>
                                    <a className="d-block" href="single-blog.html">
                                        <h4>Shall every fourth lesser have...</h4>
                                    </a>
                                    <div className="text-wrap">
                                        <p>
                                            Have whose a two night earth she set you creeping replenish place whales move Forth first him seed green.
                                        </p>
                                    </div>
                                    <a href="#" className="primary_btn2">Learn More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="thumb">
                                    <img className="img-fluid" src={Porto} alt=""/>
                                </div>
                                <div className="short_details">
                                    <div className="meta-top d-flex">
                                        <a href="#"><i className="ti-user"></i> Admin post</a>
                                        <a href="#"><i className="ti-calendar"></i> Feb 14, 2019</a>
                                    </div>
                                    <a className="d-block" href="single-blog.html">
                                        <h4>Shall every fourth lesser have...</h4>
                                    </a>
                                    <div className="text-wrap">
                                        <p>
                                            Have whose a two night earth she set you creeping replenish place whales move Forth first him seed green.
                                        </p>
                                    </div>
                                    <a href="#" className="primary_btn2">Learn More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="thumb">
                                    <img className="img-fluid" src={Porto} alt=""/>
                                </div>
                                <div className="short_details">
                                    <div className="meta-top d-flex">
                                        <a href="#"><i className="ti-user"></i> Admin post</a>
                                        <a href="#"><i className="ti-calendar"></i> Feb 14, 2019</a>
                                    </div>
                                    <a className="d-block" href="single-blog.html">
                                        <h4>Shall every fourth lesser have...</h4>
                                    </a>
                                    <div className="text-wrap">
                                        <p>
                                            Have whose a two night earth she set you creeping replenish place whales move Forth first him seed green.
                                        </p>
                                    </div>
                                    <a href="#" className="primary_btn2">Learn More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="thumb">
                                    <img className="img-fluid" src={Porto} alt=""/>
                                </div>
                                <div className="short_details">
                                    <div className="meta-top d-flex">
                                        <a href="#"><i className="ti-user"></i> Admin post</a>
                                        <a href="#"><i className="ti-calendar"></i> Feb 14, 2019</a>
                                    </div>
                                    <a className="d-block" href="single-blog.html">
                                        <h4>Shall every fourth lesser have...</h4>
                                    </a>
                                    <div className="text-wrap">
                                        <p>
                                            Have whose a two night earth she set you creeping replenish place whales move Forth first him seed green.
                                        </p>
                                    </div>
                                    <a href="#" className="primary_btn2">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Portofolio;