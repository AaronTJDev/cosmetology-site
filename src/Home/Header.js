import React from 'react';
import lashImage from '../img/Lashes1.jpg'

class Header extends React.Component {
    render(){
        return (
            <div className="headline col-12">
                <img alt="riverside eyelash extensions lashes neisha" className="col-12" src={lashImage}/>
                <h1 className="header col-12">Lashes by Neisha</h1>
            </div>
        );
    }
}

export default Header;
