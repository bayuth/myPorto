import React, {Component} from 'react';
import './css/bootstrap.css';
import './css/Footer.css';

class Footer extends Component{
    render(){
        return(
            <footer class="footer_area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <div class="footer_top flex-column">
                                <div class="footer_logo">
                                    <a href="#">
                                        <img src="img/logo2.png" alt=""/>
                                    </a>
                                    <div class="d-lg-block d-none">
                                        <nav class="navbar navbar-expand-lg navbar-light justify-content-center">
                                            <div class="collapse navbar-collapse offset">
                                                <ul class="nav navbar-nav menu_nav mx-auto">
                                                    <li class="nav-item"><a class="nav-link text-white" href="index.html">Home</a></li>
                                                    <li class="nav-item"><a class="nav-link text-white" href="about.html">About</a></li>
                                                    <li class="nav-item"><a class="nav-link text-white" href="portfolio.html">Portfolio</a></li>
                                                    <li class="nav-item"><a class="nav-link text-white" href="blog.html">BLog</a></li>
                                                    <li class="nav-item"><a class="nav-link text-white" href="services.html">Services </a></li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                                <div class="footer_social mt-lg-0 mt-4">
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-skype"></i></a>
                                    <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row footer_bottom justify-content-center">
                        <p class="col-lg-8 col-sm-12 footer-text">
                            
        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a> | Modify By Bayu
        </p>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;