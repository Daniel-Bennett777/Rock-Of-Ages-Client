import React, { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"

export const Login = () => {
    const [email, setEmail] = useState("steve@brownlee.com")
    const [password, setPassword] = useState("brownlee")
    const existDialog = useRef()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        fetch(`http://localhost:8000/login`, {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(authInfo => {
                if (authInfo.valid) {
                    localStorage.setItem("rock_token", JSON.stringify(authInfo))
                    navigate("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>

            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1 className="text-4xl mt-7 mb-3">Rock of Ages</h1>
                    <h2 className="text-xl mb-10">Please sign in</h2>
                    <fieldset className="mb-4">
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email" id="inputEmail"
                            value={email}
                            onChange={evt => setEmail(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset className="mb-4">
                        <label htmlFor="inputPassword"> Password </label>
                        <input type="password" id="inputPassword"
                            value={password}
                            onChange={evt => setPassword(evt.target.value)}
                            className="form-control"
                            placeholder="Password"
                        />
