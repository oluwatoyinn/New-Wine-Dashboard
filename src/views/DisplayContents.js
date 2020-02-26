import React,{Fragment} from 'react'
import {Switch,Route} from 'react-router-dom'
import HomePage from './HomePage'
import Member from './member/Member'
import CellList from './cell/CellList'
import Executive from './executive/Executive'
import DressCode from './dresscode/DressCode'
import SongSchedule from './song/SongSchedule'
import FinancialRecord from './finance/FinancialRecord'
import UnitDepartment from './department/UnitDepartment'
import Role from './role/Role'
import UpcomingEvent from './upcomingevent/UpcomingEvent'


const DisplayContents = () => {
    return (
        <Fragment>
 {/* Will contain all pages  eg financial, members, cell  etc */}
            <Switch>
                <Route exact path="/"  component={HomePage} />
                <Route exact path="/members" component={Member} />
                <Route exact path="/cells" component={CellList} />
                <Route exact path="/executives" component={Executive} />
                <Route exact path="/dresscode" component={DressCode} />
                <Route exact path="/songs" component={SongSchedule} />
                <Route exact path="/finance" component={FinancialRecord} />
                <Route exact path="/department" component={UnitDepartment} />
                <Route exact path="/role" component={Role} />
                <Route exact path="/event" component={UpcomingEvent} />
            </Switch>
        </Fragment>
    )
}

export default DisplayContents
