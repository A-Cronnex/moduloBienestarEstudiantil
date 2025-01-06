import { FormControl, FormLabel, VStack, Input, Button, Heading, Center } from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "./useAuth";
import Nav from "./nav";
import Footer from "./Footer";
import '../src/login.css'
function Login(){
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    const {login_user} = useAuth()

    const handleLogin = () => {
        login_user(username, password)
    }
    
    return (
        <>
        <div className="wrapper">
            <Nav></Nav>
        <div className="wrapperStack">
        <VStack spacing={"10px"} alignContent={"center"} alignItems={"center"} justifyContent={"center"} borderTop={"1px"} padding={"10rem"} width={"50%"} alignSelf={"center"} justifySelf={"center"} borderRadius={"100px"} backgroundColor={"white"}>
            <Heading>Bienvenido, inicie sesión</Heading>
            <FormControl margin={"5px"}>
                <FormLabel>Usuario</FormLabel>
                <Input border={"1px"} onChange={(event) => setUsername(event.target.value)} value={username} type="text" width={'50%'}></Input>
            </FormControl>
            <FormControl>
                <FormLabel>Contraseña</FormLabel>
                <Input border={"1px"} onChange={(event) => setPassword(event.target.value)} value={password} type="password" width={'50%'}></Input>
            </FormControl>
            <Button onClick={handleLogin} width={'30%'} backgroundColor={"green.700"} color={"white"}>Iniciar sesión</Button>
        </VStack>
        </div>
        <Footer></Footer>
        </div>
        </>
    )
} 

export default Login