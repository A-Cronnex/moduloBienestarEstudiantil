import { FormControl, FormLabel, VStack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

import { login } from "./api";
import { useAuth } from "./useAuth";

function Login(){
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    const {login_user} = useAuth()

    const handleLogin = () => {
        login_user(username, password)
    }
    
    return (
        <VStack>
            <FormControl>
                <FormLabel>Usuario</FormLabel>
                <Input onChange={(event) => setUsername(event.target.value)} value={username} type="text"></Input>
            </FormControl>
            <FormControl>
                <FormLabel>Contraseña</FormLabel>
                <Input onChange={(event) => setPassword(event.target.value)} value={password} type="password"></Input>
            </FormControl>
            <Button onClick={handleLogin}>Iniciar sesión</Button>
        </VStack>
    )
} 

export default Login