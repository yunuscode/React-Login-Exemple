import { useAuth } from './contexts'
import {
  Redirect,
  Route
} from "react-router-dom";

export function Public ({ children, ...props }) {
	const [token] = useAuth()


	if(token) {
		return (
			<Redirect to="/" />
		)
	}
	else {
		return (
			<Route  {...props}>
				{() => children }
			</Route>
		)
	}
}


export function Private ({ children, ...props }) {
	const [token] = useAuth()

	if(!token) {
		return (
			<Redirect to="/login" />
		)
	}
	else {
		return (
			<Route {...props}>
				{() => children }
			</Route>
		)
	}
}