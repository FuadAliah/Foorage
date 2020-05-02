import React, { Component } from 'react';
import './Footer.scss'



class Footer extends Component {


    handleSubmit = (e) => {
        e.preventDefault()
    }


    render() {
        return (
            <div className="Footer" >
                <div className="row">
                    <div className="container">
                        <div className="row">
                            <div className="column">
                                <h5>Quick links</h5>
                                <ul>
                                    <li><a href="#f">About us</a></li>
                                    <li><a href="#f">Add your restaurant</a></li>
                                    <li><a href="#f">Help</a></li>
                                    <li><a href="#f">My account</a></li>
                                    <li><a href="#f">Blog</a></li>
                                    <li><a href="#f">Contacts</a></li>
                                </ul>
                            </div>
                            <div className="column">
                                <h5>CATEGORIES</h5>
                                <ul>
                                    <li><a href="#f">Top Categories</a></li>
                                    <li><a href="#f">Best Rated</a></li>
                                    <li><a href="#f">Best Price</a></li>
                                    <li><a href="#f">Latest Submissions</a></li>
                                </ul>
                            </div>
                            <div className="column">
                                <h5>CONTACTS</h5>
                                <ul>
                                    <li className="contact"><img src="./imgs/home.svg" alt="home" height="20" /> <span>97845 Baker st. 567 Los Angeles - US</span></li>
                                    <li className="contact"><img src="./imgs/smartphone.svg" alt="home" height="22" /> <span>+1 696 8571</span></li>
                                    <li className="contact"><img src="./imgs/email.svg" alt="home" height="18" /> <a href="mailTo">design@yahoo.com</a></li>

                                </ul>
                            </div>
                            <div className="column">
                                <h5>KEEP IN TOUCH</h5>
                                <form onSubmit={this.handleSubmit}>
                                    <input type="email" placeholder="Your email" />
                                    <button type="submit"><img src="./imgs/arrow-1-right.svg" alt="arrow" height="20" /></button>
                                </form>
                                <h5 className="social">Follow Us</h5>
                                <div className="icons">
                                    <a href="#n"><img src="./imgs/facebook_icon.svg" alt="facebook" height="32" /></a>
                                    <a href="#n"><img src="./imgs/twitter_icon.svg" alt="twitter" height="32" /></a>
                                    <a href="#n"><img src="./imgs/instagram_icon.svg" alt="instagram" height="32" /></a>
                                    <a href="#n"><img src="./imgs/youtube_icon.svg" alt="youtube" height="32" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <div className="last">
                            <img src="./imgs/cards_all.svg" alt="payment" />
                            <ul className="copyright">
                                <li><a href="#c">Terms and conditions</a></li>
                                <li><a href="#c">Privacy</a></li>
                                <li><span>&copy; 2020 Fuad Aliah</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }



};

export default Footer;