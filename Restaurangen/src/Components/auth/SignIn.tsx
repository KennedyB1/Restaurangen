import {useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
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
            <form onSubmit={signIn}>
                <h1>sign in</h1>
                <input type="email" placeholder="email" onChange={(e) =>setEmail(e.target.value)} value={email}></input>
                <input type="password" placeholder="password" onChange={(e) =>setPassword(e.target.value)} value={password}></input>
                <button type="submit">Click</button>
            </form>
        </div>


    )


}