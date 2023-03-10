import { React, useState , useEffect} from "react"
import { getPersonas } from "../../data/personas"
import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Heading, Button, Flex, Box } from "@chakra-ui/react"
import {useRouter} from 'next/router'

  const persona = () =>{

  const  [personas, setPersonas] = useState([{
    role:'',
    _id:'',
    nombre:'',
    correo:''
 }])

const router = useRouter()

const contentTable = () =>{
    return personas.map(persona =>{
    return(
       <Tr key={persona._id}>
        <Td>
        <Button
        onClick={()=> router.push(`./usuarios/actualizar/${persona._id}`)}> Modificar </Button> </Td>
          <Td>{persona.nombre} </Td>
          <Td>{persona.role} </Td>
          <Td>{persona.correo} </Td>
       </Tr>
    )
    })
}

useEffect(() => {
    getPersonas().then(res => {setPersonas(res.data)})
  }, [])

  return(
        <Box
        h='100vh'
        bg='gray'
        bgSize='cover'
        > 
        <Flex
        direction='column'
        alignItems='center'
        justify='center'
        h='100%'
        bg='rgb(0 0 0 / 50%)'
        p={['0 10%', null, '0 20%']}
        > 
       <Heading
       color='white'
       textTransform='uppercase'
       textAlign="center"
       fontWeight='light'
       letterSpacing='5px' 
       >Usuarios Registrados</Heading>
 
     <Flex>
 
     </Flex>
 
     <TableContainer>
       <Table variant='simple'>
         <TableCaption>Usuarios registrados</TableCaption>
           <Thead>
             <Tr>
                 <Th></Th>
                 <Th>Nombre</Th>
                 <Th>Role</Th>
                 <Th>Correo</Th>
             </Tr>
           </Thead>
           <Tbody>
               {contentTable()}
           </Tbody>
       </Table>
     </TableContainer>
     </Flex>
     </Box>
   )


  }
  export default persona;