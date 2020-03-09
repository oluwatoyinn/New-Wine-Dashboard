import React, { Component } from 'react'
import axios from 'axios'
import {
    Table,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap"
import { BASE_URL } from '../../configs/Constants'
import MyLoader from '../../components/MyLoader'
import {Row,Col,Card,CardBody} from 'reactstrap'
import {TextInput} from '../../components/FormComponents'
// import {NotificationContainer} from 'react-notifications';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getCells} from '../../actions/cellActions'
import {changeIsLoading} from '../../actions/isLoadingAction'
import SimpleReactValidator from 'simple-react-validator';
// import {ErrorMsg} from '../../configs/StyleConstants'
import SpinnerSVG from '../../components/SpinnerSVG'



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
             modal:false,
             errors:{},
             spinner:false
             
        }

        this.validator = new SimpleReactValidator();

    }

    componentDidMount(){
       
        this.props.getCells()
    }

//    ****************************************************************
onSubmitFinal=(e)=>{

    e.preventDefault()
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

handleSubmit = ()=>{        


        const {
            cellZone,
            cellAddress,
            cellLeaderEmail,
            cellLeaderName,
            cellPhoneNumber
        } = this.state

        const Data = {

            "zone": cellZone ,
            "cellAddress": cellAddress,
            "cellLeaderName": cellLeaderName,
            "email": cellLeaderEmail,
            "cellPhoneNumber": cellPhoneNumber
        }
        this.setState({
            spinner:true,
            modal:false
        })
        setTimeout(()=>{

            axios.post(`${BASE_URL}/api/cells`,Data )
            .then(res =>{
              
                NotificationManager.success('Successfully Processed', 'NEW CELL');
                
                this.setState({
    
                    modal:false,
                    spinner:false
                })
                console.log(res)
                this.props.getCells()
                this.resetStateData()
    
            })
            .catch(err=>{
    
    
                this.setState({
                        
                    errors:err.response.data.errors,
                    spinner:false,
                    modal:true
                })
                NotificationManager.error('Error in processing request', 'FAILED');
    
            })
        },1000)

    }

    resetStateData = ()=> {

        this.setState({

            cellZone: "",
            cellAddress: "",
            cellLeaderName: "",
            cellLeaderEmail: "",
            cellPhoneNumber: "",
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
            this.validator.hideMessages()
    }



    componentWillUnmount(){

        this.props.changeIsLoading()
  
  }
  

    render() {

        const {
            cellZone,
            cellAddress,
            cellLeaderEmail,
            cellLeaderName,
            cellPhoneNumber,
            errors
        } = this.state


        let arr = [];
        Object.values(errors).forEach((value) => (
          arr.push(value)
        ));


        const myCell = this.props.cells.map((cell,index) =>{
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

        if(this.props.isLoading) return <MyLoader msg="Please wait..." />

      
        //    Modal Class------------------------------------------
            return(

            <>
                <NotificationContainer/>
                  
                {this.state.spinner &&<SpinnerSVG top="50%" left="50%" />}

                <Row>
                      
                    <Col md="9">
                        <h4 className="text-left">Cell Information</h4>
                    </Col>
                    <Col md="3">
                        <button className="btn btn-outline-primary float-right mb-3" onClick={this.toggle}>
                            <i className="fa fa-plus"></i> new cell
                        </button>
                    </Col>
                    <Col md="12">
                        <Card>
                            <CardBody>
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
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
               {/* modal start */}
               <Modal 
                isOpen={this.state.modal}
                backdrop={'static'} 
                toggle={this.toggle} 
                 >
                        <ModalHeader 
                        toggle={this.toggle} 
                        close={closeBtn}
                        cssModule={{'modal-title': 'w-100 text-center'}}
                        >
                            New Cell
                        </ModalHeader>
                        <ModalBody>
                            <Row>
                                <Col md="12">
                                    <ul>
                                        {arr.map((item, i) => (
                                            <li key={i}><h6 style={{color: 'red'}}>{item}</h6></li>
                                        ))}
                                    </ul>
                                </Col>
                                <Col md="12">
                                    <TextInput
                                        labelFor="cellLeaderName"
                                        labelText="Name"
                                        type="text"
                                        name="cellLeaderName"
                                        value={cellLeaderName}
                                        onChange={this.handleChange}
                                    >
                                        {/* <ErrorMsg>{this.validator.message('cell leader name', cellLeaderName, 'required')}</ErrorMsg>        */}
                                    </TextInput>
                                </Col>
                                <Col md="12">
                                    <TextInput
                                        labelFor="cellAddress"
                                        labelText="Address"
                                        type="text"
                                        name="cellAddress"
                                        value={cellAddress}
                                        onChange={this.handleChange}
                                    >
                                        {/* <ErrorMsg>{this.validator.message('cell address', cellAddress, 'required')}</ErrorMsg>        */}
                                    </TextInput>
                                </Col>
                                <Col md="12">
                                    <TextInput
                                        labelFor="zone"
                                        labelText="Zone"
                                        type="number"
                                        name="cellZone"
                                        value={cellZone}
                                        onChange={this.handleChange}
                                    >
                                        {/* <ErrorMsg>{this.validator.message('cellZone', cellZone, 'required|numeric')}</ErrorMsg>        */}
                                    </TextInput>
                                </Col>
                                <Col md="12">
                                    <TextInput
                                        labelFor="cellLeaderEmail"
                                        labelText="Email"
                                        type="text"
                                        name="cellLeaderEmail"
                                        value={cellLeaderEmail}
                                        onChange={this.handleChange}
                                    >
                                        {/* <ErrorMsg>{this.validator.message('cell leader email', cellLeaderEmail, 'required|email')}</ErrorMsg>        */}
                                    </TextInput>
                                </Col>
                                <Col md="12">
                                    <TextInput
                                        labelFor="cellPhoneNumber"
                                        labelText="Phone Number"
                                        type="text"
                                        name="cellPhoneNumber"
                                        value={cellPhoneNumber}
                                        onChange={this.handleChange}
                                    >
                                        {/* <ErrorMsg>{this.validator.message('cell phone number', cellPhoneNumber, 'required|phone')}</ErrorMsg>        */}
                                    </TextInput>
                                </Col>
                            </Row>
                        </ModalBody>
                        <ModalFooter>
                            <button className="btn btn-success btn-block" onClick={this.onSubmitFinal}>Create</button>
                        </ModalFooter>
                </Modal>



            </>
            )
           
    }

}


CellList.propTypes = {

        cellReducers:PropTypes.array
  };

  const mapStateToProps = state => ({
      
    cells: state.cellReducers.cells,
    isLoading: state.cellReducers.isLoading

  });
  

export default connect(mapStateToProps,{getCells,changeIsLoading})(CellList)
