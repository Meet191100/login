import React, { useState } from "react";
import "./lg.css";


const Login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;



    const [selected, setSelected] = useState("Faculty");

    return (
        <section className="login">
            <div className="loginContainer">
            {hasAccount ?
            <p class="text1">Sign In</p>:
            <p class="text">Sign Up</p>
            }
            {!hasAccount ?
                (<div><label>Name</label>
                <input
                    type="text"
                    required
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /></div>):<div/>
                }
            {!hasAccount ?
                (<div><label>Surname</label>
                <input
                    type="text"
                    required
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /></div>):<div/>
                }
                {!hasAccount ?
                (<div><label>Phone Number</label>
                <input
                    type="text"
                    required
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /></div>):<div/>
                }
                <label>Email</label>
                <input
                    type="text"
                    required
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <label>Role</label>
                {/* <input
                    type="text"
                    required
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /> */
                
                }
            {/* <label className="label">College</label> */}
            <select
              className="select"
              onChange={(e) => this.onChangeCollege(e.target.value)}
            >
              <option value="" disabled selected>
                Select
              </option>
              <option name="cspit">Admin</option>
              <option name="depstar">Student</option>
            </select>
                <div className="btnContainer">
                
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Sign In</button>
                      
                            <p>
                                Don't have a account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
                
                            </p>
                            
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignup}>Sign Up</button>
                            <p>
                                Have and account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                            </p>
                            
                        </>
                    )}
                    
                </div>
            </div>
        </section>
    );
};

export default Login;
