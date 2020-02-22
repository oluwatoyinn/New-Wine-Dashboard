import React, { Component } from 'react'
import axios from 'axios'
import {Table,Button,Modal,ModalHeader,ModalBody,ModalFooter,Label,Input,FormGroup} from "reactstrap"
import { BASE_URL } from '../../configs/Constants'

export class CellList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             data:[],
             datas: 
                 {
                     id:'',
                     cellZone:'',
                     cellAddress:'',
                     cellLeaderName:'',
                     CellLeaderEmail:'',
                     cellPhoneNumber:''
                 }
             
        }
    this.toggleNewCell = this.toggleNewCell.bind(this)
    }
    

    componentDidMount(){
        axios.get(`${BASE_URL}/api/cells`)
        .then(res =>{

            this.setState({
            data:res.data.data
            })
        })   
    }

    // Handle the posting -------------------------------------
 
    // handleSubmit = event =>{
    //     event.preventDefault();

    //     const user = {
    //         id :this.state.id,
    //         cellZone: this.state.cellZone,
    //         cellAddress:this.state.cellAddress,
    //         cellLeaderName:this.state.cellLeaderName,
    //         cellLeaderEmail:this.state.cellLeaderEmail,
    //         cellPhoneNumber:this.state.cellPhoneNumber
    //     };

    //     axios.post(`${BASE_URL}/api/cells`, {user})
    //     .then(res =>{
    //         console.log(res)
    //     })
    // }

    addCell(){
        
        axios.post(`${BASE_URL}/api/cells`, this.state.datas)
        .then(res =>{
            let {cells} =this.state;
            cells.push(res.data.data);

            this.setState({cells, toggleNewCell:false })
        })
    }
       
    handleChange = event => {
        this.setState({
            id:event.target.value,
            cellZone:event.target.value,
            cellAddress:event.target.value,
            cellLeaderName:event.target.value,
            cellLeaderEmail:event.target.value,
            cellPhoneNumber:event.target.value,
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
           const myCell = this.state.data.map(cell =>{
               return (
                 <tr className="table table-striped table-hover">
                        <td>{cell.id}</td>
                        <td>{cell.cellZone}</td>
                        <td>{cell.cellAddress}</td>
                        <td>{cell.cellLeaderName}</td>
                        <td>{cell.cellLeaderEmail}</td>
                        <td>{cell.cellPhoneNumber}</td>
                 </tr>
               )
           })

        //    Modal Class------------------------------------------
            return(
            <>
               <Button color="primary" onClick={this.toggleNewCell}>Add Cell</Button>
                    <Modal isOpen={this.state.newCell} toggle={this.toggleNewCell} onSubmit={this.handleSubmit}>
                        <ModalHeader toggle={this.toggleNewCell}>Add New Cell</ModalHeader>
                            <ModalBody>
                            <FormGroup>
                                <Label for="id">Id</Label>
                                <Input type="number" id="id" value={this.state.datas.id} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="cellZone">CellZone</Label>
                                <Input type="text" id="cellZone" value={this.state.datas.cellZone} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="cellLeaderAddress">Address</Label>
                                <Input type="text" id="cellAddress" value={this.state.datas.cellLeaderAddress} onChange={this.handleChange} />
                            </FormGroup> 
                            <FormGroup>
                                <Label for="cellLeaderName">Name</Label>
                                <Input type="text" id="cellLeaderName" value={this.state.datas.cellLeaderName} onChange={this.handleChange} />
                            </FormGroup> 
                            <FormGroup>
                                <Label for="cellLeaderEmail">Email</Label>
                                <Input type="text" id="cellLeaderEmail" value={this.state.datas.cellLeaderEmail} onChange={this.handleChange} />
                            </FormGroup>
                             <FormGroup>
                                <Label for="cellPhoneNumber">Phone Number</Label>
                                <Input type="text" id="cellPhoneNumber" value={this.state.datas.cellPhoneNumber} onChange={this.handleChange} />
                            </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.addCell.bind(this)}>Add Cell</Button>{' '}
                                <Button color="secondary" onClick={this.toggleNewCell}>Cancel</Button>
                            </ModalFooter>
                    </Modal>
        
               <Table>
                   <thead>
                       <tr>
                            <th>id</th>
                            <th>CellZone</th>
                            <th>CellAddress</th>
                            <th>CellLeaderName</th>
                            <th>CellLeaderEmail</th>
                            <th>CellPhoneNumber</th>
                        
                        </tr>
                   </thead>
                   <tbody>
                       {myCell}
                   </tbody>
               </Table>
            </>
            )
           
    }

}

export default CellList
