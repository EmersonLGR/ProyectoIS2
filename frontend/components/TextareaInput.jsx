import { FormControl, FormLabel, Textarea } from '@chakra-ui/react'
import React from 'react'


const TextareaInput = ({name,placeholder, handleChange, label, value}) =>{
    return(
        <FormControl id={name}>
            <FormLabel>{label}</FormLabel>
            <Textarea placeholder={placeholder} name={name} onChange={handleChange} value={value}/>
        </FormControl>
    )


}

export default TextareaInput