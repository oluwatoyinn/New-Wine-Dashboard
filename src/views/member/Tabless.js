import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../configs/Constants'

class Tabless extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             data:[]
        }
    }

    componentDidMount(){
        axios.get(`${BASE_URL}/api/members`)
        .then(res =>{

            this.setState({
               data:res.data.data
            })
        })
    }
    
    render() {
        return (
            <>
                    {this.state.data.map(member=> 
                        <tr>
                            <td>{member.firstName}</td> 
                            <td> {member.age} </td>
                            <td> {member.email} </td>
                        </tr>
                    )}
            </>
        )
    }
}

export default Tabless
