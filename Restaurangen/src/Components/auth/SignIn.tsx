import {useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { H2centered } from "../style/Title";
import { Form, Input } from "../style/Form";
import { ButtonYellow } from "../style/Buttons";
export const SignIn = () =>{

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const signIn = (e: { preventDefault: () => void; }) =>{

e.preventDefault()
signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    console.log(userCredential)
}).catch((error) =>{
    console.log(error)
})

}
    return (    

        <div>
            <Form onSubmit={signIn}>
                <H2centered>Logga in</H2centered>
                <Input type="email" placeholder="E-post" onChange={(e) =>setEmail(e.target.value)} value={email}></Input>
                <Input type="password" placeholder="Lösenord" onChange={(e) =>setPassword(e.target.value)} value={password}></Input>
                <ButtonYellow type="submit">Click</ButtonYellow>
            </Form>
        </div>
        

    )


}