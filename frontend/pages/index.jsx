import { Button, Box, Heading, Stack, Flex } from "@chakra-ui/react";
import { React } from "react"
import { useRouter } from 'next/router'
import { Grid, GridItem } from '@chakra-ui/react'



const index = () => {

  const router = useRouter()

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
        >
         Assemblies
        </Heading>
      <Stack
      direction={{base: 'column', md: 'row'}}
      spacing='40px'
      mt='30px'
      w={['100%', null, 'auto']}
      >
        <Button variant='outline'
        size='lg'
        textTransform='uppercase'
        fontWeight='light'
        borderRadius='0'
        color='white'
        letterSpacing='1px'
        _hover={{
          color:'black',
          bg:'white'
        }}
        onClick={()=>router.push('./identificar')}
        >
          Ingresar
        </Button>
        <Button variant='outline'
        size='lg'
        textTransform='uppercase'
        fontWeight='light'
        borderRadius='0'
        color='white'
        letterSpacing='1px'
        _hover={{
          color:'black',
          bg:'white'
        }}
        onClick={()=>router.push('./registrar')}
        >
          Registrar
        </Button>
      </Stack>
      
      </Flex>
      <Grid>
        
          <GridItem pl='2'  area={'footer'}>
          <Button variant='outline'
        size='s'
        textTransform='uppercase'
        fontWeight='light'
        borderRadius='0'
        color='black'
        letterSpacing='1px'
        _hover={{
          color:'black',
          bg:'white'
        }}
        onClick={()=>router.push('./usuarios/usuarios')}
        >
         Usuarios
        </Button>
       </GridItem>
      </Grid>
      </Box>
     
  )
}

export default index;