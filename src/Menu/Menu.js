import React from 'react';
import logo from '../logo.svg';


class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            slide: false
        }
    }

    slide = () => {
        this.setState({ slide: !this.state.slide})
        const menu = document.querySelector('.slide-nav');
        if(this.state.slide){
            menu.classList.remove('slide-nav-active')
            menu.classList.toggle('slide-nav-exit-active')
        } else {
            menu.classList.remove('slide-nav-exit-active')
            menu.classList.toggle('slide-nav-active')
        }
    }

    render(){
        return (
            <div>
                <div className="nav row">
                    <img alt="logo" className="col-md-1 col-3" src={logo}></img>
                    <i onClick={this.slide} className="fas fa-bars col-md-1 offset-md-10 col-2 offset-7"></i>
                    <ul className="inline-nav col-10">
                        <a href="/#service"><li className="offset-lg-4 offset-md-4 col-md-3 offset-3 col-3">Services</li></a>
                        <a href="/#about"><li className=" col-md-3 col-3">About</li></a>
                        <a href="/#contact"><li className="col-md-3 col-3">Contact Me</li></a>
                    </ul>
                </div>

                <div className="slide-nav container-fluid">
                    <div>
                        <i onClick={this.slide} className="fas fa-times"></i>
                    </div>
                    <ul>
                    <a href="/#service" onClick={this.slide}><li>Services</li></a>
                        <a href="/#about" onClick={this.slide}><li>About</li></a>
                        <a href="/#contact" onClick={this.slide}><li>Contact Me</li></a>
                    </ul>
                    <img alt="logo" className="fixed-bottom col-md-1 col-3" src={logo}></img>
                </div>
            </div>
        );
    }
}

export default Menu;