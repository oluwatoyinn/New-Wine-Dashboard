import React, { Component } from 'react'
import DisplayContents from './DisplayContents'

class ContentWrapper extends Component {
    render() {
        return (
            <>
                {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1 className="m-0 text-dark">MEMBERS LIST</h1>
                    </div>{/* /.col */}
                    <div className="col-sm-6">
                        
                            {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Member's Info</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" placeholder="Enter first name" />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" placeholder="Enter last name" />
                        </div>
                        <div className="form-group">
                            <label>Contact</label>
                            <input type="text" className="form-control" placeholder="Enter Contact Address" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Email Address" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" />
                            Check me out
                            </label>
                        </div>
                        </form></div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>


                    </div>{/* /.col */}
                </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            {/* /.content-header */}
            {/* Main content */}
            <div className="content">
                <div className="container-fluid">
                    
                    <DisplayContents/>
                {/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            {/* /.content */}
            </div>
            {/* /.content-wrapper */}
  
            </>
        )
    }
}

export default ContentWrapper
