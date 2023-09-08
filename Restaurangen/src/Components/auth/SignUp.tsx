import {useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
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
            <form onSubmit={SignUp}>
                <h1>sign up</h1>
                <input type="email" placeholder="email" onChange={(e) =>setEmail(e.target.value)} value={email}></input>
                <input type="password" placeholder="password" onChange={(e) =>setPassword(e.target.value)} value={password}></input>
                <button type="submit">Click</button>
            </form>
        </div>


    )


}