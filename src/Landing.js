import React, {Component} from 'react';
import Header from './Header';
import AboutSection from './AboutSection';
import PortofolioSection from './PortofolioSection';
import Footer from './Footer';

class Landing extends Component{
    render(){
        return(
            <div>
                <Header/>
                <AboutSection/>
                <PortofolioSection/>
                <Footer/>
            </div>
        );
    }
}

export default Landing;