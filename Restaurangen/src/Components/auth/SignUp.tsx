import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { H2centered } from "../style/Title";
import { Form, Input } from "../style/Form";
import { ButtonYellow } from "../style/Buttons";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  

  const signUp = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Validate email and password
    if (!isValidEmail(email)) {
      setErrorMessage("Felaktig e-postadress.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Lösenordet måste vara minst 6 tecken.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("E-posten har en användare.");
      });
  };

  // Email validation function
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isButtonDisabled = password.length < 6 || !isValidEmail(email);

  return (
    <div>
      <Form onSubmit={signUp}>
        <H2centered>Skapa ny inloggning</H2centered>
       
        <p style={{ color: "red" }}>{errorMessage}</p>
        <Input type="email" placeholder="E-post" onChange={(e) => setEmail(e.target.value)} value={email} required/>
         <p>Minst 6 tecken</p>
        <Input type="password" placeholder="Lösenord" onChange={(e) => setPassword(e.target.value)} value={password} required />
        
        <ButtonYellow type="submit" disabled={isButtonDisabled} className={isButtonDisabled ? "DisabledButton" : ""} >
          Skicka
        </ButtonYellow>
      </Form>
    </div>
  );
};
