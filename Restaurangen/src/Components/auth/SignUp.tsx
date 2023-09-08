import {useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { H2centered } from "../style/Title";
import { Form, Input } from "../style/Form";
import { ButtonYellow } from "../style/Buttons";
export const SignUp = () =>{

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const SignUp = (e: { preventDefault: () => void; }) =>{

e.preventDefault()
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    console.log(userCredential)
}).catch((error) =>{
    console.log(error)
})

}
    return (    

        <div>
            <Form onSubmit={SignUp}>
                <H2centered>Skapa ny inloggning</H2centered>
                <Input type="email" placeholder="E-post" onChange={(e) =>setEmail(e.target.value)} value={email}></Input>
                <Input type="password" placeholder="Lösenord" onChange={(e) =>setPassword(e.target.value)} value={password}></Input>
                <ButtonYellow type="submit">Click</ButtonYellow>
            </Form>
        </div>


    )


}