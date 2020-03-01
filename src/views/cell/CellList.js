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
             datas: 
                 {
                     cellZone:'',
                     cellAddress:'',
                     cellLeaderName:'',
                     cellLeaderEmail:'',
                     cellPhoneNumber:''
                 },
              newCell: false,
              isLoading:true,
             
        }
    this.toggleNewCell = this.toggleNewCell.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
    addCell(){

        const user = {
            cellZone: this.state.cellZone,
            cellAddress:this.state.cellAddress,
            cellLeaderName:this.state.cellLeaderName,
            cellLeaderEmail:this.state.cellLeaderEmail,
            cellPhoneNumber:this.state.cellPhoneNumber
        };

        axios.post(`${BASE_URL}/api/cells`, {user})
        .then(res =>{
            
            let {cells} =  this.state;
            cells.push(res.data.data)
            this.setState({cells, newCell:true})
            
        })

    }

    handleSubmit = event =>{
        event.preventDefault();
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
                 </tr>
               )
           })

        //    Modal Class------------------------------------------
            return(
            <>
               <Button color="primary" className="float-right mb-3" onClick={this.toggleNewCell}>Add Cell</Button>
                 
        
               <Table className="mt-5">
                   <thead>
                       <tr>
                            <th>#</th>
                            <th>Cell Address</th>
                            <th>Cell Leader Name</th>
                            <th>Cell Zone</th>
                            <th>Cell Leader Email</th>
                            <th>Cell Phone Number</th>
                        
                        </tr>
                   </thead>
                   <tbody>
                       {myCell}
                   </tbody>
               </Table>

               {/* modal start */}
               <Modal isOpen={this.state.newCell} toggle={this.toggleNewCell} onSubmit={this.handleSubmit}>
                        <ModalHeader toggle={this.toggleNewCell}>Add New Cell</ModalHeader>
                        <ModalBody>
                       
                            <FormGroup>
                                <Label for="cellAddress">Address</Label>
                                <Input type="text" id="cellAddress" name="cellAddress" value={this.state.datas.cellAddress} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="cellLeaderName">Name</Label>
                                <Input type="text" id="cellLeaderName" name="cellLeaderName" value={this.state.datas.cellLeaderName} onChange={this.handleChange} />
                            </FormGroup> 
                            <FormGroup>
                                <Label for="cellZone">CellZone</Label>
                                <Input type="text" id="cellZone" name="cellZone" value={this.state.datas.cellZone} onChange={this.handleChange} />
                            </FormGroup> 
                            <FormGroup>
                                <Label for="cellLeaderEmail">Email</Label>
                                <Input type="text" id="cellLeaderEmail" name="cellLeaderEmail" value={this.state.datas.cellLeaderEmail} onChange={this.handleChange} />
                            </FormGroup>
                                <FormGroup>
                                <Label for="cellPhoneNumber">Phone Number</Label>
                                <Input type="text" id="cellPhoneNumber" name="cellPhoneNumber" value={this.state.datas.cellPhoneNumber} onChange={this.handleChange} />
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.addCell.bind(this)}>Add Cell</Button>{' '}
                            <Button color="secondary" onClick={this.toggleNewCell}>Cancel</Button>
                        </ModalFooter>
                </Modal>
            </>
            )
           
    }

}

export default CellList
