import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../configs/Constants'
import MyLoader from '../../components/MyLoader'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

export class Member extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             data:[],
             isLoading:true
        }
    }
    componentDidMount(){
      
            setTimeout(()=>{
                this.getMember()
            },1000)

    } 

    getMember = ()=> {


        axios.get(`${BASE_URL}/api/members`)
        .then(res =>{

            this.setState({
               data:res.data.data,
               isLoading:false
            })
        })

    }

    render() {


       
         if(this.state.isLoading) return <MyLoader msg="Please wait..." />
         const columns = [
            
          {
            dataField: 'id',
            text: '#',
            hidden:true
          }, 
          {
            dataField: '#',
            text: '#',
            formatter: (cell, row, rowIndex, extraData) => (
               
                    <div>
                        {rowIndex+1}
                    </div>
              )
          }, 
          {
            dataField: 'firstName',
            text: 'First Name'
          }, 
          {
            dataField: 'lastName',
            text: 'Last Name'
          }, 
          {
            dataField: 'email',
            text: 'Email'
          },
          {
            dataField: 'phoneNumber',
            text: 'Phone Number'
          },
          {
            dataField: 'occupation',
            text: 'Occupation'
          }
        ];

          const options = {
            pageStartIndex: 1,
          };

           const rowStyle = { 
               cursor:'pointer'
             };

            const {data} = this.state

            return(

                <React.Fragment>
                    <h5 className="text-left">List of Team Members</h5>
                    <div className="card">
                        <div className="card-body">
                            <BootstrapTable 
                            keyField="id"
                            data={ data }
                            columns={ columns }
                            bordered={false}
                            hover
                            pagination={ paginationFactory(options) }
                            rowStyle = {rowStyle}
                            />
                        </div>
                    </div>
                </React.Fragment>

            )
    }
}



export default Member
