import React from 'react'
import { FormControl, FormLabel, Input } from "@chakra-ui/react"

const FormInput = ({ onChange, placeholder, label, type, name, value }) => {
    return (
        <FormControl id ={name}>
            <FormLabel>{label}</FormLabel>
            <Input type={type} placeholder={placeholder}  name={name}  onChange={onChange} value={value} />
        </FormControl>
    )
}

export default FormInput