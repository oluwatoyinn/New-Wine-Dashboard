import React, { Component } from 'react'
import axios from 'axios'

class Bin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             persons:[]
        }
    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const persons = res.data
            this.setState({persons})
        })
    }
    
    render() {
        return (
            <>
                {this.state.persons.map(person => 
                    <div>
                        <li>{person.name}</li>
                        <li>{person.email}</li>
                   </div>
                 )}
            </>
        )
    }
}

export default Bin
