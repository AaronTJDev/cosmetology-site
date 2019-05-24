import React from 'react';

class Info extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openBooking: false
        }
    }

    toggleBookingApp = () => {
        this.setState({ openBooking: !this.state.openBooking })
    }

    render(){
        
        var bookingApp =
        <div>
        <div class="booking-app-frame-outer col-12">
            <div onClick={this.toggleBookingApp} className="exit row">
                <h3 className="offset-sm-10 col-sm-1 offset-0 col-6">EXIT</h3>
                <i onClick={this.toggleBookingApp} className="fas fa-times col-sm-1 col-6"></i>
            </div>     
        </div>
            <div class="booking-app-frame-inner offset-sm-1 col-sm-10 offset-0 col-12">
                <iframe title="booking-app" src="https://squareup.com/appointments/buyer/widget/ft2aqa4bpgeiyf/E94WZ5A4RKTYD" style={{minHeight: "500px", width: "100%", height: "100%", border: "none"}}></iframe>;
            </div>
        </div>;

        return (
            <div>
                {
                    this.state.openBooking ?
                    bookingApp : 
                    null
                }
            <div className="info row">
                <h1 id="service" className="sub-header offset-1 col-10">Services</h1>

                <div id="first-block" className="info-block col-sm-3 col-10">
                    <h2 className="info-block-header">Classic</h2>
                    <hr/>
                    <ul>
                        <li>Natural Set $65</li>
                        <li>Full Set $75</li>
                        <li>Wispy $80</li>
                    </ul>
                </div>
                <div className="info-block offset-sm-0 col-sm-3 offset-1 col-10">
                    <h2 className="info-block-header">Category 2</h2>
                    <hr/>
                    <ul>
                        <li>Hybrid Set $90</li>
                    </ul>
                </div>
                <div className="info-block offset-sm-0 col-sm-3 offset-1 col-10">
                    <h2 className="info-block-header">Category 3</h2>
                    <hr/>
                    <ul>
                        <li>Volume Set $110</li>
                        <li>Wispy Volume $115</li>
                    </ul>
                </div>
                <button onClick={this.toggleBookingApp} className="book-button offset-sm-4 col-sm-4 offset-1 col-10">Book Appointment</button>
            </div>

            <div className="info row">
                <div className="about-text col-12">
                    <h1 id="about" className="sub-header offset-1 col-10">About</h1>
                    <h2 className="offset-sm-2 col-sm-8 offset-1 col-10">
                        I am a home-based and traveling Lash tech located in Riverside, California.
                        <hr/>
                        Please be sure to provide your location before booking a travel appointment.
                    </h2>
                </div>
            </div>

            <div id="contact" className="info row">
                <div className="contact col-12">
                    <h1 style={{marginTop:"36pt", color:"#000000"}} className="contact-header offset-1 col-10">Contact Me</h1>
                    <ul className="col-12">
                        <li>Phone:</li>
                        <li>Email:</li>
                    </ul>
                </div>
            </div>

            <div id="social" className="info row">
                <div className="social col-12">
                    <a href="/"><i className="fab fa-twitter col-4"></i></a>
                    <a href="/"><i className="fab fa-facebook col-4"></i></a>
                    <a href="/"><i className="fab fa-instagram col-4"></i></a>
                </div>
            </div>
            </div>
        )
    }
}

export default Info;