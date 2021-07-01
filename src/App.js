import React, { useState, useEffect } from "react";
import Login from "./Login";
import fire from "./fire";
import "./index.css";
import Hero from "./Hero";


var errcheck = 0;
const App = () => {


  var db = fire.firestore();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };


  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)

      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":

          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
        }
      });
  };

  function start() {
    errcheck = 1;
    console.log(errcheck);
  }

  const handleSignup = async () => {
    errcheck = 0;

    clearErrors();
    await fire



      .auth()
      .createUserWithEmailAndPassword(email, password)

      .catch((err) => {

        start();
        console.log("inside catch")
        switch (err.code) {
          case "auth/email-already-in-use":

          case "auth/invalid-email":
            setEmailError(err.message);

            break;
          case "auth/weak-password":
            setPasswordError(err.message);

            break;
          default:
            start();
        }
      });
    console.log("outside catch")
    console.log(errcheck);

    if (errcheck == 0) {

      db.collection("Users")
        .add({
          name: name,
          surname: surname,
          number: number,
          email: email,
          role: role,
        })
        .then(() => {

         
        })
        .catch((error) => {
          alert(error.message);

        });

    }


    // set all field null for next response(after uploading the first one)
    setName("");
    setEmail("");
    setSurname("");
    setNumber("");
    setRole("");
    setError("");
  };
  function handleLogOut() {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      clearInputs();
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);



  return (
    <div className="App">
      {user ? (
        <Hero handleLogOut={handleLogOut} />
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          name={name}
          surname={surname}
          number={number}
          role={role}
          setName={setName}
          setSurname={setSurname}
          setNumber={setNumber}
          setRole={setRole}
          setError={setError}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
          clearInputs={clearInputs}
        />


      )}


    </div>

  );


};

export default App;