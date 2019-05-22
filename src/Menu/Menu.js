import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
                </div>

                <div className="slide-nav container-fluid">
                    <div>
                        <i onClick={this.slide} className="fas fa-times"></i>
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>Book Now</li>
                        <li>Services</li>
                        <li>Contact Me</li>
                    </ul>
                    <img alt="logo" className="fixed-bottom col-md-1 col-3" src={logo}></img>
                </div>
            </div>
        );
    }
}

export default Menu;