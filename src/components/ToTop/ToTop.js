import React, { Component } from 'react';
import './ToTop.scss'


class ToTop extends Component {

    state = {
        Scrolled: false
    }

    ToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const Position = window.scrollY > 100
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
            <div className={this.state.Scrolled ? 'top display' : 'top'}>
                <span onClick={this.ToTop}>
                    <img src="imgs/arrow-1-right.svg" alt="c" />
                </span>
            </div>
        );
    }



};

export default ToTop;