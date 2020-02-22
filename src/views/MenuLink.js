import React from 'react'
import {NavLink} from 'react-router-dom'

const MenuLink = () => {
    return (
        <React.Fragment>
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    {/* Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library */}
                    <li className="nav-item has-treeview menu-open">
                    <a href="#" className="nav-link active">
                        <i className="nav-icon fas fa-tachometer-alt" />
                        <p>
                        Starter Pages
                        <i className="right fas fa-angle-left" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                        <NavLink to="/member" activeStyle={{color:'#03a9f3'}} className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Member</p>
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Financial</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/cell" activeStyle={{color:'#03a9f3'}} className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Cells</p>
                        </NavLink>
                        </li>
                    </ul>
                    </li>
                    {/* <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-th" />
                        <p>
                        Simple Link
                        <span className="right badge badge-danger">New</span>
                        </p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-th" />
                        <p>
                        Simple Link
                        <span className="right badge badge-danger">New</span>
                        </p>
                    </a>
                    </li> */}
                </ul>
        </React.Fragment>
    )
}

export default MenuLink
