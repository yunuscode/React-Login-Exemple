import React from 'react'
import './registration.css'

import Components from '../index'
import { useAuth } from '../../contexts'

export default function Registration () {

	const [setToken] = useAuth(true)

	const LoginRef = React.useRef()
	const PasswordRef = React.useRef()
	const NameRef = React.useRef()

	const [loadingText, setLoadingText] = React.useState("Kirish")

	const formHandler = e => {
		e.preventDefault()
		let loginValue = LoginRef.current.value
		let passwordValue = PasswordRef.current.value
		let nameValue = NameRef.current.value

		if(loginValue === "muhammad" && passwordValue === "password" && nameValue === "muhammad"){
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
					<h1>Registration Screen</h1>
				</Components.Container>
			</section>
			<main className="main-registration">
				<Components.Container>
					<form onSubmit={ e => formHandler(e) }>
						<label>
							<input ref={LoginRef} type="text" name="login" placeholder="Login" />
						</label>
						<label>
							<input ref={NameRef} type="text" name="name" placeholder="Name" />
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