import Components from './components'

import {
  Switch,
} from "react-router-dom";

import {
  Public,
  Private
} from "./routes";

function App () {
	
    return (
	<>
		<Components.Nav />
		<Switch>
			<Private path="/" exact>
				<Components.Home />
			</Private>
			<Public path="/login" exact>
				<Components.Login />
			</Public>
			<Public path="/registration" exact>
				<Components.Registration />
			</Public>
		</Switch>
		<Components.Footer />
	</>
    )
}

export default App;
