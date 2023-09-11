import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { ButtonRed } from "./style/Buttons";

const LogoutButton: React.FC = () => {
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
    <ButtonRed onClick={userSignOut} className="logOutButton">Logga ut</ButtonRed>
  );
};

export default LogoutButton;
