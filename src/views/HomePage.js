import React, { Component } from 'react'

export class HomePage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             firstName:[],
             lastName:[]
        }
    }
    
    render() {
        return (
            <>
                <form>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" placeholder="Enter First Name" />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" placeholder="Enter last name" />
                    </div>
                    <div className="form-group">
                        <label>Contact Address</label>
                        <textarea name="address" id="address" cols={70} rows={3} defaultValue={""} />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" className="form-control" placeholder="Enter your email address" />
                    </div>
                    <div className="form-group ">
                        <label>Date of Birth</label>
                        <input type="date" className="dob" name="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Occupation</label>
                        <select name="job" id>
                        <option value="Developer">Developer</option>
                        <option value="Pastor">Pastor</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Lawyer">Lawyer</option>
                        {/* <option value=""> Occupation<a href="occupation.html"></a></option> */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Unit Department</label>
                        <select name="unit" id>
                        <option value="teacher"> Prayer</option>
                        <option value="teacher">Welfare</option>
                        <option value="teacher">Intercessory</option>
                        <option value="teacher">Administrative</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Position</label>
                        <select name="post" id>
                        <option value="Developer">Choir Master</option>
                        <option value="Pastor">Financial Secretary</option>
                        <option value="Pastor">Treasurer</option>
                        <option value="Pastor">Member</option>
                        </select>
                        <br /><br />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>

            </>
        )
    }
}

export default HomePage
