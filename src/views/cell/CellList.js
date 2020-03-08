import React, { Component } from 'react'
import axios from 'axios'
import {Table,Button,Modal,ModalHeader,ModalBody,ModalFooter,Label,Input,FormGroup} from "reactstrap"
import { BASE_URL } from '../../configs/Constants'
import DefaultLoading from '../../configs/DefaultLoading'

export class CellList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
                data:[],
                zone:'',
                cellAddress:'',
                cellLeaderName:'',
                email:'',
                cellPhoneNumber:'',

                editCell: {
                    id:'',
                    cellAddress:'',
                    cellLeaderName:'',
                    cellZone:'',
                    cellLeaderEmail:'',
                    cellPhoneNumber:''    
                },

                newCell: false,
                isLoading:true,
                editCellModal:false
             
        }
    this.toggleNewCell = this.toggleNewCell.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.updateChange = this.updateChange.bind(this)
    }
    

    componentDidMount(){
        setTimeout(()=>{
            this.getCells()
        },1000 )
         
    }

    getCells = () => {
        axios.get(`${BASE_URL}/api/cells`)
        .then(res =>{

            this.setState({
                data:res.data.data,
                isLoading:false
            })
        }) 
    }
    // Handle the posting -------------------------------------

    handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            zone: this.state.zone,
            cellAddress:this.state.cellAddress,
            cellLeaderName:this.state.cellLeaderName,
            email:this.state.email,
            cellPhoneNumber:this.state.cellPhoneNumber
        };

        axios.post(`${BASE_URL}/api/cells`, {user})
        .then(res =>{

            this.setState({
                newCell:false 
            })
              
        })
    }

    updateCell = (event) => {
        event.preventDefault();

        const cell = {
            cellAddress: this.state.cellAddress,
            cellLeaderName: this.state.cellLeaderName,
            cellZone:this.state.cellZone,
            cellLeaderEmail: this.state.cellLeaderEmail,
            cellPhoneNumber:this.state.cellPhoneNumber    
        }
        axios.put(`${BASE_URL}/api/cells/${this.state.editCell.id}`, cell )
        .then(res =>{
            console.log(res.data.editCell)
        })
      
    }

    handleChange = event =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    //Handle posting ends here

    // Modal Toggle start here
    toggleNewCell(){
        this.setState({
            newCell: !this.state.newCell
        })
    }
    //Modal toggle ends here

    cellEdit(id, cellAddress,cellLeaderName,cellZone,cellLeaderEmail, cellPhoneNumber) {
        this.setState({
            editCell:{id, cellAddress,cellLeaderName,cellZone,cellLeaderEmail, cellPhoneNumber}, editCellModal: !this.state.editCellModal
        })
    }

    updateChange =(event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    toggleEditCell(){
        this.setState({
            editCellModal: !this.state.editCellModal
        })
    }

    render() {
        if (this.state.isLoading) return <DefaultLoading/>

           const myCell = this.state.data.map((cell,index) => {
               return (
                 <tr className="table table-striped table-hover" key={cell.id}>
                        <td>{index+1}</td>
                        <td>{cell.cellAddress}</td>
                        <td>{cell.cellLeaderName}</td>
                        <td>{cell.cellZone}</td>
                        <td>{cell.cellLeaderEmail}</td>
                        <td>{cell.cellPhoneNumber}</td>
                        <td>
                            <button className="Ed_button" onClick={this.cellEdit.bind(this,
                            cell.id,cell.cellAddress, cell.cellLeaderName, cell.cellZone,
                            cell.cellLeaderEmail, cell.cellPhoneNumber )} >Edit </button>
                            <button className="Del_button"> Del </button>
                        </td>
                 </tr>
                 )
           })

        //    Modal Class------------------------------------------
            return(
            <>
               <Button color="primary" className="float-right mb-3" onClick={this.toggleNewCell}>Add Cell</Button>
                 
                <div className="card shadow-sm">
                    <div className="card-body">
                        <Table className="mt-5">
                            <thead>
                                <tr>
                                        <th>#</th>
                                        <th>Cell Address</th>
                                        <th>Cell Leader Name</th>
                                        <th>Zone</th>
                                        <th>Cell Leader Email</th>
                                        <th>Cell Phone Number</th>
                                        <th>Action</th>  
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {myCell}
                            </tbody>
                        </Table>
                    </div>
               </div>

               {/* modal start */}
               <Modal isOpen={this.state.newCell} toggle={this.toggleNewCell} >
                        <ModalHeader toggle={this.toggleNewCell}>Add New Cell</ModalHeader>
                        <ModalBody>
                       
                            <FormGroup>
                                <Label for="cellAddress">Address</Label>
                                <Input type="text" id="cellAddress" name="cellAddress" value={this.state.cellAddress} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="cellLeaderName">Name</Label>
                                <Input type="text" id="cellLeaderName" name="cellLeaderName" value={this.state.cellLeaderName} onChange={this.handleChange} />
                            </FormGroup> 
                            <FormGroup>
                                <Label for="zone">CellZone</Label>
                                <Input type="text" id="zone" name="zone" value={this.state.zone} onChange={this.handleChange} />
                            </FormGroup> 
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                            </FormGroup>
                                <FormGroup>
                                <Label for="cellPhoneNumber">Phone Number</Label>
                                <Input type="text" id="cellPhoneNumber" name="cellPhoneNumber" value={this.state.cellPhoneNumber} onChange={this.handleChange} />
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.handleSubmit}>Add Cell</Button>
                            <Button color="secondary" onClick={this.toggleNewCell}>Cancel</Button>
                        </ModalFooter>
                </Modal>

                {/* modal for edit start here */}

                <Modal isOpen={this.state.editCellModal} toggle={this.toggleEditCell.bind(this)} >
                        <ModalHeader toggle={this.toggleEditCell.bind(this)}>Edit A Cell</ModalHeader>
                        <ModalBody>
                       
                            <FormGroup>
                                <Label for="cellAddress">Address</Label>
                                <Input type="text" id="cellAddress" name="cellAddress" value={this.state.editCell.cellAddress} onChange={this.updateChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="cellLeaderName">Name</Label>
                                <Input type="text" id="cellLeaderName" name="cellLeaderName" value={this.state.editCell.cellLeaderName} onChange={this.updateChange} />
                            </FormGroup> 
                            <FormGroup>
                                <Label for="zone">CellZone</Label>
                                <Input type="text" id="zone" name="zone" value={this.state.editCell.cellZone} onChange={this.updateChange} />
                            </FormGroup> 
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="text" id="email" name="email" value={this.state.editCell.cellLeaderEmail} onChange={this.updateChange} />
                            </FormGroup>
                                <FormGroup>
                                <Label for="cellPhoneNumber">Phone Number</Label>
                                <Input type="text" id="cellPhoneNumber" name="cellPhoneNumber" value={this.state.editCell.cellPhoneNumber} onChange={this.updateChange} />
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.updateCell}>Update Cell</Button>
                            <Button color="secondary" onClick={this.toggleEditCell.bind(this)}>Cancel</Button>
                        </ModalFooter>
                </Modal>

            </>
            )
           
    }

}

export default CellList
