import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Logo from '../../logo.svg';
import './NavBar.scss'

class NavBar extends Component {

    state = {
        Scrolled: false,
    }

    componentDidMount() {

        window.addEventListener('scroll', () => {
            const Position = window.scrollY > 50
            if (Position !== true) {
                this.setState({
                    Scrolled: false
                })
            } else {
                this.setState({
                    Scrolled: true
                })
            }
        })
    }


    render() {
        return (
            <nav className='fixedNav'>
                <div className="container">
                    <div className='d_flex'>
                        <NavLink to="/" href="#Home">
                            <img src={Logo} alt='Logo' />
                        </NavLink>
                        <div className='d_flex nav'>
                            <NavLink exact activeClassName="active" to='/'>Home</NavLink>
                            <NavLink activeClassName="active" to='/listing'>Listing</NavLink>
                            <NavLink activeClassName="active" to='/menu'>Menu</NavLink>
                            <NavLink activeClassName="active" to='/booking'>Booking</NavLink>
                            <NavLink activeClassName="active" to='/signUp'>SignUp</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
};

export default NavBar;