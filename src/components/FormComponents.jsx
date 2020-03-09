import React from 'react'
import PropTypes from "prop-types";

import {
        FormGroup,
        Label,
        Input
    } from 'reactstrap'


export const TextInput = (props) => {
    function handleChange(event){
        if(props.onChange) props.onChange(event)
    }
    return (
            <FormGroup>
                <Label for={props.labelFor}>{props.labelText}</Label>
                <Input 
                type={props.type}
                value={props.value}
                onChange={handleChange}
                name={props.name}
                rows={6}
                placeholder={props.placeholder}
                style={props.style}
                readOnly={props.readOnly}
                />
               {props.children}
            </FormGroup>
        )
}



TextInput.propTypes= {

        type:PropTypes.string,
        value:PropTypes.string,
        name:PropTypes.string,
        onChange:PropTypes.func,
        style:PropTypes.object,
        readOnly:PropTypes.bool
}

TextInput.defaultProps = {
    placeholder:"",
    style:{},
    readOnly:false
}
