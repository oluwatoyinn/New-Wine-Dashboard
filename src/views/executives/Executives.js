import React, { Component } from 'react'
import {Table,Card,Button, Modal, ModalBody,ModalFooter, ModalHeader,Input,Label,FormGroup} from "reactstrap"
import axios from 'axios'
import {BASE_URL} from '../../configs/Constants'
import DefaultLoading from "../../configs/DefaultLoading"
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

export class Executives extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             data: [],
             id:'',
            firstName: '',
            lastName:'',
            position:'',
            email:'',
            phoneNumber:'',

            modal:false,
            isLoading: true
        }
    }

    componentDidMount(){
        setTimeout(()=>{
              this.getExecutives()
        }, 1000)
      
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


    handleSubmit = event =>{
        event.preventDefault();

        const executive = {
            firstName: this.state.firstName,
            lastName:this.state.lastName,
            position:this.state.position,
            email:this.state.email,
            phoneNumber:this.state.phoneNumber
        }
        axios.post(`${BASE_URL}/api/executives`, executive)
        .then(res =>{
            console.log(res.data)
            this.setState({
                modal:false
            })
            setTimeout(()=>{
                this.getExecutives() 
             },100)
        })
      
       
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    toggle = () =>{
        this.setState({
            modal: !this.state.modal
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

        const {
            firstName,
            lastName,
            position,
            email,
            phoneNumber,
            data
        } =this.state

        const columns = [{
            dataField: 'id',
            text: '#'
          }, {
            dataField: 'firstName',
            text: 'First Name'
          }, 
          {
            dataField: 'lastName',
            text: 'Last Name'
          },
          {
            dataField: 'position',
            text: 'Position'
          },
          {
            dataField: 'email',
            text: 'Email'
          },
          {
            dataField: 'phoneNumber',
            text: 'Phone Number'
          }
        ];


        return (
            <>
            
            <div className="row">
                <div className="col-md-12">
                    <Button color="primary" className="float-right mb-3" onClick={this.toggle}>Add Executive</Button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Card>
                        <BootstrapTable 
                        keyField='id' 
                        data={ data } 
                        columns={ columns } 
                        bordered={ false }
                        hover
                        pagination={ paginationFactory() }
                        />
                    </Card>
                </div>
            </div>
            

            {/* Modal starts here */}
            
                    <Modal isOpen={this.state.modal} toggle={this.toggle} >
                        <ModalHeader toggle={this.toggle} >Add New Eecutive</ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <Label for="firstName">First Name</Label>
                                <Input type="text" id="firstName" name="firstName" value={firstName}  onChange={this.handleChange} />
                            </FormGroup>  
                            <FormGroup>
                                <Label for="lastName">Last Name</Label>
                                <Input type="text" id="lastName" name="lastName" value={lastName} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="position">Position</Label>
                                <Input type="text" id="position" name="position" value={position} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email Address</Label>
                                <Input type="text" id="email" name="email" value={email} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="phoneNumber">Phone Number</Label>
                                <Input type="text" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={this.handleChange} />
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.handleSubmit}>Add Executive</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
            </>
        )
    }
}

export default Executives
