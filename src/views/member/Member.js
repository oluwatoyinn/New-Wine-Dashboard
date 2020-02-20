import React, { Component } from 'react'
import Axios from 'axios'
import {Table,Button} from "reactstrap"
import { BASE_URL } from '../../configs/Constants'

export class Member extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             data:[]
        }
    }
    componentDidMount(){
        Axios.get(`${BASE_URL}/api/members`)
        .then(res =>{

            this.setState({
               data:res.data.data
            })
        })
    } 
    render() {
           const mydata = this.state.data.map(member =>{
               return (
                 <tr className="table table-striped table-hover">
                        <td>{member.id}</td>
                        <td>{member.firstName}</td>
                        <td>{member.lastName}</td>
                        <td>{member.email}</td>
                        <td>{member.birthday}</td>
                        <td>{member.phoneNumber}</td>
                        <td>{member.contactAddress}</td>
                        <td>{member.occupation}</td>
                 </tr>
               )
           })
            return(
            <>
               <Table>
                   <thead>
                       <tr>
                            <th>id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Bithday</th>
                            <th>PhoneNumber</th>
                            <th>ContactAddress</th>
                            <th>Occupation</th>
                        </tr>
                   </thead>
                   <tbody>
                       {mydata}
                   </tbody>
               </Table>
            </>
            )
    }
}

export default Member
