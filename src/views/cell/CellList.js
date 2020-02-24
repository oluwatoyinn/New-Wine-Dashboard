import React, { Component } from 'react'
import axios from 'axios'
import {Table,Button,Modal,ModalHeader,ModalBody,ModalFooter,Label,Input,FormGroup} from "reactstrap"
import { BASE_URL } from '../../configs/Constants'

export class CellList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             data:[],
             cellZone: "",
             cellAddress: "",
             cellLeaderName: "",
             cellLeaderEmail: "",
             cellPhoneNumber: "",
             modal:false
             
        }
        // this.toggle = this.toggle.bind(this)
    }
    

    componentDidMount(){
       
        this.getAllCell()
    }

    // *************************************************
    getAllCell = ()=> {

        axios.get(`${BASE_URL}/api/cells`)
        .then(res =>{

            this.setState({
                data:res.data.data
            })
        })   
    }
//    ****************************************************************
    addCell(){


        const {
            cellZone,
            cellAddress,
            cellLeaderEmail,
            cellLeaderName,
            cellPhoneNumber
        } = this.state

        const Data = {

            "cellZone": cellZone ,
            "cellAddress": cellAddress,
            "cellLeaderName": cellLeaderName,
            "cellLeaderEmail": cellLeaderEmail,
            "cellPhoneNumber": cellPhoneNumber
        }
        
        axios.post(`${BASE_URL}/api/cells`,Data )
        .then(res =>{
            
            console.log(res)
        })
        .catch(err=>{


        })
    }
       
    handleChange = e => {
        this.setState({
            
            [e.target.name]: e.target.value
        })
    }

    toggle=()=>{

            this.setState(prevState=>({

                modal:!prevState.modal

            }))
    }

    render() {

        const {
            cellZone,
            cellAddress,
            cellLeaderEmail,
            cellLeaderName,
            cellPhoneNumber
        } = this.state

        const myCell = this.state.data.map((cell,index) =>{
            return (
                <tr className="table table-striped table-hover" key={cell.id}>
                    <td>{index+1}</td>
                    <td>{cell.cellAddress}</td>
                    <td>{cell.cellLeaderName}</td>
                    <td>{cell.cellZone}</td>
                    <td>{cell.cellLeaderEmail}</td>
                    <td>{cell.cellPhoneNumber}</td>
                </tr>
            )
        })

        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

        //    Modal Class------------------------------------------
            return(
            <>
               
                 
                <div className="row">
                    <div className="col-md-9">
                        <h4>Cell Information</h4>
                    </div>
                    <div className="col-md-3">
                        <Button color="primary" className="float-right mb-3" onClick={this.toggle}>
                            <i className="fa fa-plus"></i> New Cell
                        </Button>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <Table className="">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Cell Address</th>
                                            <th>Leader Name</th>
                                            <th>Zone</th>
                                            <th>Email</th>
                                            <th>Phone Number</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {myCell}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
               {/* modal start */}
               <Modal isOpen={this.state.modal} toggle={this.toggle}  >
                        <ModalHeader 
                        toggle={this.toggle} 
                        close={closeBtn}
                        cssModule={{'modal-title': 'w-100 text-center'}}
                        >
                            New Cell
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <Label for="cellLeaderName">Name</Label>
                                <Input type="text" id="cellLeaderName" name="cellLeaderName" value={cellLeaderName} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="cellLeaderAddress">Address</Label>
                                <Input type="textarea" id="cellAddress" name="cellAddress" value={cellAddress} onChange={this.handleChange} />
                            </FormGroup> 
                            <FormGroup>
                                <Label for="cellZone">zone</Label>
                                <Input type="number" id="cellZone" name="cellZone" value={cellZone} onChange={this.handleChange} />
                            </FormGroup>
                           
                           
                            <FormGroup>
                                <Label for="cellLeaderEmail">Email</Label>
                                <Input type="text" id="cellLeaderEmail"name="cellLeaderEmail" value={cellLeaderEmail} onChange={this.handleChange} />
                            </FormGroup>
                                <FormGroup>
                                <Label for="cellPhoneNumber">Phone Number</Label>
                                <Input type="text" id="cellPhoneNumber" name="cellPhoneNumber" value={cellPhoneNumber} onChange={this.handleChange} />
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button className="btn btn-success btn-block" onClick={""}>Create</Button>
                        </ModalFooter>
                </Modal>
            </>
            )
           
    }

}

export default CellList
