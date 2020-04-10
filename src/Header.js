import React, {Component} from 'react';
import './css/bootstrap.css';
import './css/Header.css';
import Background from './img/home-banner.png';
import Profpict from './img/Bayu.png';

const bg={
    backgroundImage:`url(${Background})`,
    height:'90vh',
    backgroundSize: 'cover'
}
class Header extends Component{
    render(){
        return(
            <header className="home_banner_area" style={bg}>
                <div className="banner_inner">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-6">
                                <div className="banner_content">
                                    <h3>Hey There !</h3>
                                    <h1 className="text-uppercase">I am Bayu Triharyanto</h1>
                                    <h5 className="text-uppercase">Frontend Developer</h5>
                                    <div className="social_icons my-5">
                                        <a href="#"><i className="ti-twitter"></i></a>
                                        <a href="#"><i className="ti-skype"></i></a>
                                        <a href="#"><i className="ti-instagram"></i></a>
                                        <a href="#"><i className="ti-dribbble"></i></a>
                                        <a href="#"><i className="ti-vimeo"></i></a>
                                    </div>
                                    <a className="primary_btn" href="#"><span>View More</span></a>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="banner_photo">
                                    <img className="img-fluid"src={Profpict} alt="Profpict" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>

        );
    }
}

export default Header;
