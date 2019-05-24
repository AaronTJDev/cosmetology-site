import React from 'react';
import Header from './Header';
import Info from './Info';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <div>
                <Header/>
                <Info/>
            </div>
        );
    }
}


export default Home;
