import React,{Fragment} from 'react'
import {Switch,Route} from 'react-router-dom'
import HomePage from './HomePage'
import Member from './member/Member'


const DisplayContents = () => {
    return (
        <Fragment>

            <Switch>
                <Route exact path="/"  component={HomePage} />
                <Route exact path="/member" component={Member} />
            </Switch>
           

        </Fragment>
    )
}

export default DisplayContents
