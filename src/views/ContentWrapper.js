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
                    <h1 className="m-0 text-dark">Starter Page</h1>
                    </div>{/* /.col */}
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Starter Page</li>
                    </ol>
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
