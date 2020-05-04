import React, { Component } from 'react';
import axios from 'axios'
import './Categories.scss'

class Categories extends Component {

    state = {
        Categories: []
    }

    componentDidMount() {
        axios.get('./data.json').then(res => { this.setState({ Categories: res.data.categories }) })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { Categories } = this.state
        const CategoriesList = Categories && Categories.length ? (
            Categories.map(Category =>
                <a href='#g' key={Category.id}>
                    <img src={Category.icon} alt="hb" />
                    <div className="info">
                        <h2 className="title">{Category.title}</h2>
                        <p className="price">{Category.price}</p>
                    </div>
                </a>)
        ) : (null)

        return (
            
            <section className="Categories">
                <div className="container">
                    <div className="headSection">
                        <h2>Popular Categories</h2>
                        <p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
                    </div>
                </div>
                <div className="container">
                    <div className="bodySection">

                        {CategoriesList}

                    </div>
                </div>
            </section>
        )
    }
}


export default Categories;