import React, { Component } from 'react'
import {Table} from "reactstrap"
import axios from 'axios'
import {BASE_URL} from '../../configs/Constants'
import DefaultLoading from "../../configs/DefaultLoading"

export class Executives extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             data: [],
             isLoading: true
        }
    }

    componentDidMount(){

        this.getExecutives()
    }

    getExecutives = () => {
        axios.get(`${BASE_URL}/api/executives`)
        .then (res => { 

            this.setState({
                data:res.data.data,
                isLoading:false
            })
        })
    }
    
    render() {
        
        if (this.state.isLoading) return <DefaultLoading />
        
        const myExecutives = this.state.data.map((executive,index) =>{
                return(
                    <tr>
                        <td> {index+1} </td>
                        <td> {executive.firstName} </td>
                        <td> {executive.lastName} </td>
                        <td> {executive.position} </td>
                        <td> {executive.email} </td>
                        <td> {executive.phoneNumber} </td>
                    </tr>
                )
        })
        return (
            <>
                <Table className="mt-5">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Position</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myExecutives}
                    </tbody>
                </Table>

            </>
        )
    }
}

export default Executives
