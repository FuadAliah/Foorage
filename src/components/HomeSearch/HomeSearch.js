import React, { Component } from 'react';
import './HomeSearch.scss'

class HomeSearch extends Component {


    handleSubmit = (e) => {
        e.preventDefault()
    }


    render() {
        return (
            <div className='HomeSearch'>
                <div className='background' />
                <div className='mainSearch'>
                    <h2>Discover & Book</h2>
                    <p>The best restaurants at the best price</p>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Looking for..." />
                        <input type="text" placeholder="Address, Neighborhood..." />
                        <input type="Submit" defaultValue="Search" />
                    </form>
                </div>
            </div>
        );
    }
};

export default HomeSearch;