import React, { Component } from "react"
import {Cookies}            from "react-cookie"
import { connect }            from 'react-redux'
import * as userActions       from './../../actions/userActions'
import { bindActionCreators } from 'redux'
import {getCodeFromUrl}         from './../../constants/constantsApp'
import {API_URL}         from './../../constants/constantsAPI'

class GoogleRedirect extends Component {

	componentDidMount(){
		let accessToken =  getCodeFromUrl('access_token', '#')
		return accessToken ? this.getUser(accessToken) : close();
	}

	componentWillReceiveProps(nextProps){
		if (nextProps.user){
			close();
		}
	}

	async getUser(accessToken){
		let googleProfile =	await fetch(`https://www.googleapis.com/plus/v1/people/me?access_token=${accessToken}&scope=https://www.googleapis.com/auth/userinfo.email`,{
			method: 'GET'
		})
		.then(
			res => res.json(),
			err => err
		)
		.then(json => {
			return json.id && json	
		})
		console.log(googleProfile)

		if (googleProfile){
			let user  = await fetch(`${API_URL}/api/v1/soc_auth`,{
		 			method: 'POST',
		 			headers: new Headers({
						'Content-Type': 'application/json'		 				
		 			}),
		 			body: JSON.stringify( {	
						name:     googleProfile.name.givenName,
						surname:  googleProfile.name.familyName,
						id:       googleProfile.id,
						email:    googleProfile.emails[0].value,
						provider: 'google',
						soc_id:   googleProfile.id
					})
		 		})
		 		.then(
		 			res => res.json(),
		 			err => err
		 		)
		 		.then (json => {
		 			console.log(json)
		 			return json.status === 'success' ? json.message : null
		 		})	
		 		console.log(user)
		 		return user && this.props.userActions.getProfile(user) 
		 	} 		


 

	}

	render(){
		let cookies = new Cookies,
		token = cookies.get('token');
		return 	null		
	}
}


function mapStateToProps(state) {
  return {
    
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions:   bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleRedirect)


