import React from 'react'
import HeaderNav from './HeaderNav'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader';

function Applayout() {
    const navigation = useNavigation();
    return (
        <>
            <HeaderNav />
            <Loader />
            {navigation.state === "loading" ? <Loader /> : <Outlet />}
            <Footer />
        </>
    )
}

export default Applayout
