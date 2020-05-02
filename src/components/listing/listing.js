import React, { Component } from 'react';
import { motion } from 'framer-motion'
import Popular from './../Popular/Popular'
import Footer from '../Footer/Footer'
import './listing.scss'

class listing extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div className='listing'>
                <div className="pageTitle">
                    <div className="container">
                        <motion.div className="d_flex"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                type: "tween",
                                duration: 0.4,
                                ease: "easeInOut"
                            }}>
                            <span>145 restaurants in Convent Street 2983</span>
                            <form onSubmit={this.handleSubmit}>
                                <input type="search" className="reset" placeholder="Your email" />
                                <button type="submit" className="reset">Search</button>
                            </form>
                        </motion.div>

                    </div>
                </div>
                <div className="con">
                    <Popular />
                </div>
                <Footer />
            </div>
        );
    }
};

export default listing;