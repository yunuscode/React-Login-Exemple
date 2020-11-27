import React from 'react'
import './login.css'

import Components from '../index'
import { useAuth } from '../../contexts'

export default function Login () {

	const [setToken] = useAuth(true)

	const LoginRef = React.useRef()
	const PasswordRef = React.useRef()

	const [loadingText, setLoadingText] = React.useState("Kirish")

	const formHandler = e => {
		e.preventDefault()
		let loginValue = LoginRef.current.value
		let passwordValue = PasswordRef.current.value

		if(loginValue === "muhammad" && passwordValue === "password"){
			setLoadingText("Ma'lumot yuklanyabdi....")
			setTimeout(() => {
				setToken("xxx")
			}, 3000)
		} 
		else {
			setLoadingText("Login va parol xato")
		}
		
	}

	return (
		<>
			<section className="login">
				<Components.Container>
					<h1>Login Screen</h1>
				</Components.Container>
			</section>
			<main className="main-login">
				<Components.Container>
					<form onSubmit={ e => formHandler(e) }>
						<label>
							<input ref={LoginRef} type="text" name="login" placeholder="Login" />
						</label>
						<label>
							<input ref={PasswordRef} type="password" autoComplete="on" name="password" placeholder="Password" />
						</label>
						<button>{loadingText}</button>
					</form>
				</Components.Container>
			</main>
		</>
	)
}