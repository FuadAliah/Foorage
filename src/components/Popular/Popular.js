import React, { Component } from 'react';
import { motion } from 'framer-motion'
import axios from 'axios';

import './Popular.scss'

class Popular extends Component {

    state = {
        Popular: [],
    }

    componentDidMount() {
        axios.get('./data.json').then(res => { this.setState({ Popular: res.data.popular }) })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { Popular } = this.state
        const PopularList = Popular && Popular.length ? (
            Popular.map(popularItem =>
                <div className="strip" key={popularItem.id}>
                    <figure className="item">
                        <span className="offer">{popularItem.offer}</span>
                        <img className="img" src={popularItem.img} alt="img" />
                        <a href="#c">
                            <span className="Category">{popularItem.category}</span>
                            <div className="itemInfo">
                                <h3>{popularItem.name}</h3>
                                <small>{popularItem.street}</small>
                            </div>
                        </a>
                    </figure>
                    <div className="recomended">
                        <span className="status">Opened</span>
                        <div className="rank">
                            <div className="reviews">
                                <p>Superb</p>
                                <small>351 Reviews</small>
                            </div>
                            <span className="rank_number">{popularItem.vote}</span>
                        </div>
                    </div>
                </div>)
        ) : (null)
        return (
            <section className="Popular">
                <div className="container">
                    <motion.div className="headSection"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.6,
                            ease: "easeInOut",
                            delay: 0.2
                        }}>
                        <h2>Popular Restaurants</h2>
                        <p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
                    </motion.div>
                </div>
                <div className="container">
                    <motion.div className="bodySection"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.6,
                            ease: "easeInOut",
                            delay: 0.4
                        }}>
                        {PopularList}
                    </motion.div>
                </div>
                <div className="container">
                    <motion.div className="banner"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.6,
                            ease: "easeInOut",
                            delay: 0.6
                        }}>
                        <div className="wrapper">
                            <small>Foogra</small>
                            <div className="text">
                                <h2>More than 3000 Restaurants</h2>
                                <p>Book a table easly at the best price</p>
                            </div>
                            <a href="#d" className="view">View All</a>
                        </div>
                    </motion.div>
                </div>
            </section>
        );
    }
};

export default Popular;