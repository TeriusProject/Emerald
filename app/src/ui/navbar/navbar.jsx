import { React } from "react"
import { ReactComponent as Logo } from "../../img/logo.svg"
import "./navbar.css"

export function Navbar() {
	return (
		<div className="navbar">
			<Logo />
		</div>
	)
}