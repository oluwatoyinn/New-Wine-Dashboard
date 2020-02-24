import React from 'react'
import {NavLink} from 'react-router-dom'

const MenuLink = () => {
    return (
        <React.Fragment>
             <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
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
                    <a href="#" className="nav-link active">
                        <i className="far fa-circle nav-icon" />
                        <p>Active Page</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Inactive Page</p>
                    </a>
                    </li>
                </ul>
                </li>
                <li className="nav-item">
                    <NavLink to="/member" className="nav-link">
                        <i className="nav-icon fas fa-th"/>
                        <p>
                         Members
                        <span className="right badge badge-danger">50</span>
                        </p>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/cell" className="nav-link">
                        <i className="nav-icon fas fa-th" />
                        <p>
                         Cell Information
                        <span className="right badge badge-danger">6</span>
                        </p>
                    </NavLink>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default MenuLink
