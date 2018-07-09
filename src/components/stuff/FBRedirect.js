import React, { Component } from "react"
import {Cookies}            from "react-cookie"

class FBRedirect extends Component {

	

	render(){
		let cookies = new Cookies,
		token = cookies.get('token');
		return 	'test me'			
	}
}

export default FBRedirect