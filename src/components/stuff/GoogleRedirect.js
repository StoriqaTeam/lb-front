import React, { Component } from "react"
import {Cookies}            from "react-cookie"
import { connect }            from 'react-redux'
import * as userActions       from './../../actions/userActions'
import { bindActionCreators } from 'redux'
import {getCodeFromUrl}         from './../../constants/constantsApp'

class GoogleRedirect extends Component {

	componentDidMount(){
		let accessToken =  getCodeFromUrl('access_token')
		return accessToken ? this.getUser(accessToken) : close();
	}

	componentWillReceiveProps(nextProps){
		if (nextProps.user){
			//close();
		}
	}

	async getUser(accessToken){
		let fbProfile =	await fetch(`https://graph.facebook.com/me?fields=id,first_name,last_name,birthday,picture.width(250).height(250),email&access_token=${accessToken}`,{
			method: 'GET'
		})
		.then(
			res => res.json(),
			err => err
		)
		.then(json => {
			return json.id && json	
		})
		console.log(fbProfile)
 		let headers = new Headers();
		headers.append('Content-Type', 'application/json')

		if (fbProfile){

			let user = {	
				name:    fbProfile.first_name,
 					surname: fbProfile.last_name,
 					img:     fbProfile.picture.data.url,
 					email:   fbProfile.email
 				}
				return user && this.props.userActions.getProfile(user) 

			user  = await fetch(`http://localhost:5000/api/v1/soc_auth`,{
		 			method: 'POST',
		 			headers: headers,
		 			body: JSON.stringify({
		 					provider: 'fb', 
		 					id:  fbProfile.id,
		 					name:    fbProfile.first_name,
		 					surname: fbProfile.last_name,
		 					img:     encodeURIComponent(fbProfile.picture.data.url)
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


