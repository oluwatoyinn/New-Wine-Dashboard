import React, { Component } from 'react'
import MenuLink from './MenuLink'
import {NavLink} from 'react-router-dom'

class AsideBar extends Component {
    render() {
        return (
            <>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <NavLink to="/" className="brand-link">
                <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                <span className="brand-text font-weight-light">GLOBAL HARVEST</span>
            </NavLink>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                    <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                </div>
                <div className="info">
                    <NavLink to="" className="d-block">NEW WINE</NavLink>
                </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <MenuLink/>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
            </aside>

            </>
        )
    }
}

export default AsideBar
