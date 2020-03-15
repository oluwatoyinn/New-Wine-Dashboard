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
        FormGroup,
        Container} from "reactstrap"
import MyLoader from "../../components/MyLoader"
import { BASE_URL } from '../../configs/Constants'
import SimpleReactValidator from 'simple-react-validator'
import {ErrorMsg} from '../../configs/StyleConstant'
import SweetAlert from 'react-bootstrap-sweetalert'

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
                isEdit:false,
                errors:{},
                alert:null
             
        }
        this.validator = new SimpleReactValidator();
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

    handleFinalSubmit = (e)=> {

        e.preventDefault();
        if(this.validator.allValid())
        {
            this.handleSubmit()
        }
        else
        {
            this.validator.showMessages()
            this.forceUpdate()
        }
        
    }

    handleSubmit = () => {

        const user = {
            zone: this.state.zone,
            cellAddress:this.state.cellAddress,
            cellLeaderName:this.state.cellLeaderName,
            email:this.state.email,
            cellPhoneNumber:this.state.cellPhoneNumber
        };

        axios.post(`${BASE_URL}/api/cells`, user)
        .then(res =>{

            const getAlert = () => (
                <SweetAlert
                confirmBtnText="Okay"
                confirmBtnBsStyle="success"
                success title= {res.data.message}
                onConfirm={()=>this.hideAlert()}
                />
                    
                );
                
                this.setState({
                alert: getAlert(),
                modal:false
                
                });

        })
        .catch(err=>{
            this.setState({
                errors:err.response.data.errors
            })
        })

    }
    updateSubmit = (event) => {
        event.preventDefault();

        const user = {
            zone: this.state.zone,
            cellAddress:this.state.cellAddress,
            cellLeaderName:this.state.cellLeaderName,
            email:this.state.email,
            cellPhoneNumber:this.state.cellPhoneNumber
        };

        axios.put(`${BASE_URL}/api/cells/${this.state.id}`, user)
        .then(res =>{

            console.log(res)
            this.setState({
                modal:false
            })
              
        this.getCells()
        this.resetState()
        })

    }

    hideAlert = ()=> {

        this.setState({
        alert: null,
        modal:false
        
        });
        
        this.getCells()
        this.resetState()
        
    }
    
    handleChange = event =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    toggle =() => {
        this.setState({
            modal: !this.state.modal,
            isEdit:false
        })
        this.resetState()
    }

    //PUT/UPDATE REQUEST START HERE ----------------------------------------------------------------------------------------------------------------

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

    //Handle posting ends here


    //
    resetState = ()=> {
        this.setState({
            zone:'',
            cellAddress:'',
            cellLeaderName:'',
            email:'',
            cellPhoneNumber:'',
        })
    }

    updateToggle = (e,id) => {
        e.preventDefault()
        this.setState({
            modal:true,
            isEdit:true
        })
        setTimeout(()=>{
            this.getSingleCell(id)
        },1000)
    }

    getSingleCell(id){
        axios.get(`${BASE_URL}/api/cells/${id}`)
        .then(res=>{

            this.setState({
                id:res.data.data.id,
                zone:res.data.data.cellZone,
                cellLeaderName:res.data.data.cellLeaderName,
                cellAddress:res.data.data.cellAddress,
                email:res.data.data.cellLeaderEmail,
                cellPhoneNumber:res.data.data.cellPhoneNumber
            })
        })
    }


    deleteRow(id){
        axios.delete(`${BASE_URL}/api/cells/${id}`)
        .then(res =>{
            this.getCells()
        })
    }

    render() {
        if (this.state.isLoading) return <MyLoader msg="Please wait..."/>

        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

            let arr = [];
            Object.values(this.state.errors).forEach((value) => (
            arr.push(value)
            ));

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
                            <button className="btn btn-warning d-inline-block " size="sm" onClick={e=>this.updateToggle(e,cell.id)} >Edit </button> {' '}
                            <button className="btn btn-danger d-inline-block" onClick={this.deleteRow.bind(this, cell.id )}> Delete </button>
                        </td>
                 </tr>
                 )
           })

           const {
               email,
               cellLeaderName,
               cellPhoneNumber,
               cellAddress,
               zone,
               isEdit
            } = this.state

        //    Modal Class------------------------------------------
            return(
            <>
               <div className="row">
                <div className="col-md-12">
                     <Button color="primary" className="float-right mb-3" onClick={this.toggle}>Add Cell</Button>
                </div>
               </div>
                 
                <div className="row">
                    <div className="col-md-12">
                    <div className="card shadow-sm">
                        <div className="card-body">  
                        {/* <Container> */}
                        <Table >   
                            <thead>
                                <tr>
                                        <th>#</th>
                                        <th>Address</th>
                                        <th>Leader Name</th>
                                        <th>Zone</th>
                                        <th>Email</th>
                                        <th>Phone Number</th>
                                        <th>Action</th>  
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {myCell}
                            </tbody>
                        </Table>
                        {/* </Container>  */}
                        </div>
                        </div>
                    </div>
               </div>

               {/* modal start */}
               <Modal isOpen={this.state.modal} toggle={this.toggle} >
                    <ModalHeader 
                    toggle={this.toggle}
                    close={closeBtn}
                     > 
                        Add New Cell
                    </ModalHeader>
                        <ModalBody>

                            {/* <FormGroup>
                                <Label for="cellLeaderName">id</Label>
                                <Input type="text" id="id" name="id" value={id} onChange={this.handleChange} />
                            </FormGroup> */}

                                <ul>
                                {arr.map((item, i) => (
                                <li key={i}><h6 style={{color: 'red'}}>{item}</h6></li>
                                ))}
                                </ul>
                            <FormGroup>
                                <Label for="cellLeaderName">Name</Label>
                                <Input type="text" id="cellLeaderName" name="cellLeaderName" value={cellLeaderName} onChange={this.handleChange} />
                                <ErrorMsg>{this.validator.message('leader name', cellLeaderName, 'required')}</ErrorMsg>
                            </FormGroup>       
                            <FormGroup>
                                <Label for="cellAddress">Address</Label>
                                <Input type="textarea" id="cellAddress" name="cellAddress" value={cellAddress} onChange={this.handleChange} />
                                <ErrorMsg>{this.validator.message('Address', cellAddress, 'required')}</ErrorMsg>
                            </FormGroup> 
                            <FormGroup>
                                <Label for="zone">CellZone</Label>
                                <Input type="nunber" id="zone" name="zone" value={zone} onChange={this.handleChange} />
                                <ErrorMsg>{this.validator.message('zone', zone, 'required')}</ErrorMsg>
                            </FormGroup> 
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="text" id="email" name="email" value={email} onChange={this.handleChange} />
                                <ErrorMsg>{this.validator.message('email', email, 'required')}</ErrorMsg>
                            </FormGroup>
                                <FormGroup>
                                <Label for="cellPhoneNumber">Phone Number</Label>
                                <Input type="text" id="cellPhoneNumber" name="cellPhoneNumber" value={cellPhoneNumber} onChange={this.handleChange} />
                                <ErrorMsg>{this.validator.message('phone number', cellPhoneNumber, 'required')}</ErrorMsg>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>

                            {isEdit?
                            <Button color="primary" block onClick={this.updateSubmit}>Update Cell</Button>
                            : 
                            <Button color="primary" block onClick={this.handleFinalSubmit}>Add Cell</Button>
                            }

                        </ModalFooter>
                </Modal>
                
                {this.state.alert}
            </>
            )
           
    }

}

export default CellList
