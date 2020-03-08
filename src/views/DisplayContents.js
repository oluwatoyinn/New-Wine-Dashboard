import React,{Fragment} from 'react'
import {Switch,Route} from 'react-router-dom'
import HomePage from './HomePage'
import Member from './member/Member'
import CellList from './cell/CellList'
import Executives from "./executives/Executives"
import Financial from "./financials/Financial"
import UserRoles from "./user_roles/UserRoles"


const DisplayContents = () => {
    return (
        <Fragment>
 {/* Will contain all pages  eg financial, members, cell  etc */}
            <Switch>
                <Route exact path="/"  component={HomePage} />
                <Route exact path="/member" component={Member} />
                <Route exact path="/cell" component={CellList} />
                <Route exact path="/executives" component={Executives} />
                <Route exact path="/financials" component={Financial} />
                <Route exact path="/user_roles" component={UserRoles} />
            </Switch>
           

        </Fragment>
    )
}

export default DisplayContents
