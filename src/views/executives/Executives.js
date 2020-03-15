import React, { Component } from 'react'
import axios from 'axios'
import {BASE_URL} from '../../configs/Constants'
import {Row,Col,Card} from 'reactstrap'
class Executive extends Component {
constructor(props) {
super(props)

this.state = {

data:[]
}
}


componentDidMount(){

this.getExecutives()
}

getExecutives(){

axios.get(`${BASE_URL}/api/executives`)
.then(res=>{

this.setState({

data:res.data.data
})
})
}
render() {
return (
<React.Fragment>
<Row>
{this.state.data.map((info,index)=>{
return (
<Col md="4">

<Card>

<div className="col-md-12 profile-pic text-center" key={index}>
<div className="img-box">
<img
src={`${BASE_URL}/img/`+info.profileImage}
alt="profile pix"
className="img-responsive"
width="150px"
height="250px"
/>
<ul>
{/* eslint-disable-next-line  */}
<a href="#"><li><i className="fab fa-facebook" /></li></a>
{/* {/ eslint-disable-next-line /} */}
<a href="#"><li><i className="fab fa-twitter" /></li></a>
{/* {/ eslint-disable-next-line /} */}
<a href="#"><li><i className="fab fa-instagram" /></li></a>
</ul>
</div>
<h2>{info.firstName} {info.lastName}</h2>
<h4>{info.position}</h4>
<h6>{info.email}</h6>
<h6>{info.phoneNumber}</h6>
</div>
</Card>

</Col>
)
})}
</Row>
</React.Fragment>
)
}
}

export default Executive