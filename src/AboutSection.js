import React, {Component} from 'react';
import './css/AboutSection.css';
import Profpict from './img/Bayu.png';
import './css/bootstrap.css';

class AboutSection extends Component{
    render(){
        return(
            <section className="about_area section_gap">
                <div className="container" id="about">
                    <div className="row justify-content-start align-items-center">
                        <div className="col-lg-5">
                            <div className="about_img">
                                <img className="about-pict" src={Profpict} alt=""/>
                            </div>
                        </div>

                        <div className="offset-lg-1 col-lg-5">
                            <div className="main_title text-left">
                                <p className="top_text">About me <span></span></p>
                                <h2>
                                    Frontend Developer
                                </h2>
                                <p>
                                    Also signs his face were digns fish don't first isn't over evening hath divided days light darkness gathering
                                    moved dry all darkness then fourth can't create d forth Also signs Also signs his face were moltenus Also signs
                                    his face
                                </p>
                                <a className="primary_btn" href="#"><span>Download CV</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}
export default AboutSection;