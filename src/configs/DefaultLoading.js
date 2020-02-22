import React from 'react'

const DefaultLoading = () => {
    return (
        <>
            <div style={myStyle}>
                <h2 className="text-center" >Loading....</h2>
            </div>
        </>
    )
}



const myStyle = {

    position: 'absolute', 
    left: '50%', 
    top: '50%',
    transform: 'translate(-50%, -50%)'
}

export default DefaultLoading