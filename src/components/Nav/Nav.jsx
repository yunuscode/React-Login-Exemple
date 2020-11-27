import './nav.css'

import Components from '../index'
import { useAuth } from '../../contexts'


import {
  NavLink
} from "react-router-dom";

export default function Nav() {

	const [token, setToken] = useAuth()

	const handleButton = e => {
		setToken()
	}

	return (
		<nav className="nav">
			<Components.Container>
				<h1 className="nav-title">YUSUZ</h1>
				<ul className="nav-list">
					{ token && <li className="nav-item">
						<NavLink className="nav-link" to="/">Home</NavLink>
					</li> }
					{ token && <li className="nav-item">
						<button className="nav-link danger" onClick={e => handleButton(e)}>Exit</button>
					</li> }
					{ !token && <li className="nav-item">
						<NavLink className="nav-link" to="/login">Login</NavLink>
					</li> }
					{ !token && <li className="nav-item">
						<NavLink className="nav-link" to="/registration">Registration</NavLink>
					</li> }
				</ul>
			</Components.Container>
		</nav>
	)
}