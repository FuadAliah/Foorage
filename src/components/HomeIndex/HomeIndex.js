import React from 'react';
import { motion } from 'framer-motion'
import HomeSearch from './../HomeSearch/HomeSearch'
import Categories from './../Categories/Categories'
import Popular from './../Popular/Popular'
import Owner from './../Owner/Owner'
import Footer from './../Footer/Footer'


const HomeIndex = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                type: "tween",
                duration: 0.4,
                ease: "easeInOut"
            }}>
            <HomeSearch />
            <Categories />
            <Popular />
            <Owner />
            <Footer />
        </motion.div>
    );
};
export default HomeIndex;