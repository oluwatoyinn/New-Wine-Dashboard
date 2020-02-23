import React, { Component } from 'react'
import axios from 'axios'
import {Table} from "reactstrap"
import { BASE_URL } from '../../configs/Constants'
import DefaultLoading from '../../configs/DefaultLoading'

export class Member extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             data:[],
             isLoading:true
        }
    }
    componentDidMount(){
      
            setTimeout(()=>{
                this.getMember()
            },1000)

    } 

    getMember = ()=> {


        axios.get(`${BASE_URL}/api/members`)
        .then(res =>{

            this.setState({
               data:res.data.data,
               isLoading:false
            })
        })

    }

    render() {
       
         if(this.state.isLoading) return <DefaultLoading/>

           const mydata = this.state.data.map((member,index) => {
               return (

                 <tr className="table table-striped table-hover" key={member.id}>
                        <td>{index+1}</td>
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
              <div className="card shadow-sm">
                  <div className="card-body">
                    <Table>
                        <thead>
                            <tr>
                                    <th>#</th>
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
                  </div>
              </div>
            </>
            )
    }
}



export default Member
