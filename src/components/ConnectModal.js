import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

//Modal de Connexion ou d'inscription
const ConnectModal = () => {
  const [signUp, setSignUp] = useState(true);
  return (
    <div className="connect-modal">
      <div className="header-btn">
        <button
          style={{ background: signUp ? "rgb(28,28,28)" : "rgb(83,83,83)" }}
          onClick={() => setSignUp(true)}
        >
          S'inscrire
        </button>
        <button
          style={{ background: signUp ? "rgb(83,83,83)" : "rgb(28,28,28)" }}
          onClick={() => setSignUp(false)}
        >
          Se Connecter
        </button>
      </div>

      {
        //faire appel au composant actif ou pas
      }
      {signUp ? <SignUp /> : <Login />}
    </div>
  );
};

export default ConnectModal;
