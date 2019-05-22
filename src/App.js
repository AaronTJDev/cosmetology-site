import React from 'react';
import Menu from './Menu/Menu'
import './App.css';
import lashImage from './img/Lashes1.jpg'

function App() {
    return (
        <div className="App container-fluid">
            <Menu/>
            <div className="headline col-12">
                <img className="col-12" src={lashImage}/>
                <h1 className="header col-12">Lashes by La'Nesha</h1>
            </div>
        </div>
    );
}

export default App;
