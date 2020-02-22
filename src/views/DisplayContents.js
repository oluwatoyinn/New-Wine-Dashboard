import React,{Fragment} from 'react'
import {Switch,Route} from 'react-router-dom'
import HomePage from './HomePage'
import Member from './member/Member'
import CellList from './cell/CellList'


const DisplayContents = () => {
    return (
        <Fragment>
 {/* Will contain all pages  eg financial, members, cell  etc */}
            <Switch>
                <Route exact path="/"  component={HomePage} />
                <Route exact path="/member" component={Member} />
                <Route exact path="/cell" component={CellList} />
            </Switch>
           

        </Fragment>
    )
}

export default DisplayContents
