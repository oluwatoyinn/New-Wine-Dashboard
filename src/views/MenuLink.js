import React from 'react'
import {NavLink} from 'react-router-dom'

const MenuLink = () => {
    return (
        <React.Fragment>
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    {/* Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library */}
                    <li className="nav-item has-treeview menu-open">
                    <NavLink to="" className="nav-link active">
                        <i className="nav-icon fas fa-tachometer-alt" />
                        <p>
                        Starter Pages
                        <i className="right fas fa-angle-left" />
                        </p>
                    </NavLink>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                        <NavLink to="/member" activeStyle={{color:'#03a9f3'}} className="nav-link">
                            <i className="nav-icon fas fa-th" />
                            <p>Member</p>
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/financials" activeStyle={{color:'#03a9f3'}} className="nav-link">
                            <i className="fas fa-money-check-alt"></i>
                            <p>Financial</p>
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/cell" activeStyle={{color:'#03a9f3'}} className="nav-link">
                            <i className="fa fa-user-tie" />
                            <p>Cells</p>
                        </NavLink>
                         <NavLink to="/user_roles" activeStyle={{color:'#03a9f3'}} className="nav-link">
                            <i className="fa fa-user-tie" />
                            <p>User Roles</p>
                        </NavLink>
                        <NavLink to="/executives" activeStyle={{color:'#03a9f3'}} className="nav-link">
                            <i className="fa fa-user-tie" />
                            <p>Executives</p>
                        </NavLink>
                        </li>
                    </ul>
                    </li>
                    {/* <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-th" />
                        <p>
                        Simple NavLink
                        <span className="right badge badge-danger">New</span>
                        </p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-th" />
                        <p>
                        Simple NavLink
                        <span className="right badge badge-danger">New</span>
                        </p>
                    </a>
                    </li> */}
                </ul>
        </React.Fragment>
    )
}

export default MenuLink
