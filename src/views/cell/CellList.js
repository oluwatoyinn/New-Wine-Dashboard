import React, { Component } from 'react'
import axios from 'axios'
import {Table,
        Button,
        Modal,
        ModalHeader,
        ModalBody,
        ModalFooter,
        Label,
        Input,
        FormGroup} from "reactstrap"
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
                id:'',

                modal: false,
                isLoading:true,
                // isEdit:false
             
        }
    }
    
    //GET REQUEST -------------------------------------------------------------------------------------------------------------------
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

    // Handle the posting ---------------------------------------------------------------------------------------------------------

    handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            zone: this.state.zone,
            cellAddress:this.state.cellAddress,
            cellLeaderName:this.state.cellLeaderName,
            email:this.state.email,
            cellPhoneNumber:this.state.cellPhoneNumber
        };

        axios.post(`${BASE_URL}/api/cells`, user)
        .then(res =>{

            console.log(res)
            this.setState({
                modal:false
            })
              
        })

        this.getCells()
    }

    //PUT REQUEST ----------------------------------------------------------------------------------------------------------------

    updateCell = (event) => {
        event.preventDefault();

        const cell = {
            celAddress: this.state.cellAddress,
            cellLeaderName: this.state.cellLeaderName,
            zone:this.state.cellZone,
            email: this.state.cellLeaderEmail,
            cellPhoneNumber:this.state.cellPhoneNumber    
        }
   
        axios.put(`${BASE_URL}/api/cells/${this.state.id}`.id, cell )
        .then(res =>{
            console.log(res.data)
        })
      
    }

    deleteCell = () =>{};
  

    handleChange = event =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    //Handle posting ends here

    toggle =() => {
        this.setState({
            modal: !this.state.modal
        })
    }


    updateToggle = (id) => {
        
        setTimeout(()=>{
            this.getSingleCell(id)
        },1000)
    }

    getSingleCell(id){
        axios.get(`${BASE_URL}/api/cells/${id}`)
        .then(res=>{

            this.setState({
                id:res.data.data.id,
                cellZone:res.data.data.cellZone,
                cellLeaderEmail:res.data.cellLeaderName,
                cellLeaderEmail:res.data.cellLeaderEmail,
                cellPhoneNumber:res.data.cellPhoneNumber
            })
        })
        this.setState({
            modal:false,
            isEdit:true
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
                        <td className="container">
                            <button className="btn btn-warning" size="sm" onClick={this.updateToggle(cell.id)} >Edit </button> {' '}
                            <button className="btn btn-danger" onClick={this.deleteCell(cell.id)}> Del </button>
                        </td>
                 </tr>
                 )
           })

           const {
               id,
               cellLeaderEmail,
               cellLeaderName,
               cellPhoneNumber,
               cellAddress,
               cellZone,
               isEdit
            } = this.state

        //    Modal Class------------------------------------------
            return(
            <>
               <Button color="primary" className="float-right mb-3" onClick={this.toggle}>Add Cell</Button>
                 
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
               <Modal isOpen={this.state.modal} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle} > Add New Cell
                        </ModalHeader>
                        <ModalBody>

                            {/* <FormGroup>
                                <Label for="cellLeaderName">id</Label>
                                <Input type="text" id="id" name="id" value={id} onChange={this.handleChange} />
                            </FormGroup> */}
                             <FormGroup>
                                <Label for="cellLeaderName">Name</Label>
                                <Input type="text" id="cellLeaderName" name="cellLeaderName" value={cellLeaderName} onChange={this.handleChange} />
                            </FormGroup>       
                            <FormGroup>
                                <Label for="cellAddress">Address</Label>
                                <Input type="textarea" id="cellAddress" name="cellAddress" value={cellAddress} onChange={this.handleChange} />
                            </FormGroup> 
                            <FormGroup>
                                <Label for="zone">CellZone</Label>
                                <Input type="nunber" id="zone" name="zone" value={cellZone} onChange={this.handleChange} />
                            </FormGroup> 
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="text" id="email" name="email" value={cellLeaderEmail} onChange={this.handleChange} />
                            </FormGroup>
                                <FormGroup>
                                <Label for="cellPhoneNumber">Phone Number</Label>
                                <Input type="text" id="cellPhoneNumber" name="cellPhoneNumber" value={cellPhoneNumber} onChange={this.handleChange} />
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>

                            {/* {isEdit? */}
                            {/* <Button color="primary" onClick={this.updateCell}>Edit Cell</Button> */}
                            {/* :  */}
                            <Button color="primary" onClick={this.handleSubmit}>Add Cell</Button>
                             {/* }  */}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>

                        </ModalFooter>
                </Modal>

            </>
            )
           
    }

}

export default CellList
