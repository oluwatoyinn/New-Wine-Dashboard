import React, { Component } from 'react'
import NavBar from './NavBar'
import AsideBar from './AsideBar'
import ContentWrapper from './ContentWrapper'
import ControlAsideBar from './ControlAsideBar'
import Footer from './Footer'


class DashBoard extends Component {
    render() {
        return (
            <>
              <NavBar />
              <AsideBar />
              <ContentWrapper />
              <ControlAsideBar />
              <Footer />
            </>
        )
    }
}

export default DashBoard
