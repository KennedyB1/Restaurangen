import { useEffect, useState } from "react";

import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { Dashboard } from "./Dashboard";
import { SignIn } from "./auth/SignIn";
import { SignUp } from "./auth/SignUp";
import { auth } from "../firebase";

export const Admin = () => {
  const [authUser, setAuthUser] = useState<User | null>(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('signed out');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
        
      {authUser ? (
        <>
          <Dashboard />
          <p>Inloggad som {authUser.email}</p>
          <button onClick={userSignOut}>Logga ut</button>
        </>
      ) : (
        <>
          <SignIn />
          <SignUp />
          <p>Inte inloggad</p>
        </>
      )}
    </div>
  );
  
};
