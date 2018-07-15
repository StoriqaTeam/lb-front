import React, { Component } from "react"
import {Cookies}            from "react-cookie"
import {  Route, Switch, Redirect } from 'react-router-dom'

import {getCodeFromUrl}     from './../../constants/constantsApp'

class ActivationPage extends Component {

	componentDidMount(){
		let hash = getCodeFromUrl('hash', '?')
		if (hash) {
			this.activateEmail(hash)
		}
	}

	async activateEmail(hash){
 		let headers = new Headers();
 		headers.append('Content-Type', 'application/json')
 		let user  = await fetch(`http://localhost:5000/api/v1/activate`,{
 			method: 'POST',
 			headers: headers,
 			body: JSON.stringify({
 				hash: hash
 			})
 		})
 		.then(
 			res => res.json(),
 			err => err
 		)
 		.then (json => {
 			return json.status === 'success' ? json.message : null
 		})
 		console.log(user)
 		return user && this.props.userActions.getProfile(user)
 	}


	render(){
		let cookies = new Cookies,
		token = cookies.get('token');
		return this.props.user
		? <Redirect to='/profile' />
		: null
	}

}

export default ActivationPage
