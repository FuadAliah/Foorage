import React from 'react';
import HomeSearch from './../HomeSearch/HomeSearch'
import Categories from './../Categories/Categories'
import Popular from './../Popular/Popular'
import Owner from './../Owner/Owner'
import Footer from './../Footer/Footer'


const HomeIndex = () => {
    return (
        <div>
            <HomeSearch />
            <Categories />
            <Popular />
            <Owner />
            <Footer />
        </div>
    );
};
export default HomeIndex;