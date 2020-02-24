import React, { Component } from 'react'
import DisplayContents from './DisplayContents'

class ContentWrapper extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="content-wrapper">
                    <div className="content-header">
                        {/* <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                            <h1 className="m-0 text-dark"></h1>
                            </div>
                            <div className="col-sm-6">
                            </div>
                        </div>
                        </div> */}
                    </div>
                    <div className="content">
                        <div className="container-fluid">
                            <DisplayContents/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ContentWrapper
