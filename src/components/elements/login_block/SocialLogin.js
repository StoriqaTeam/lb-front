import React, {Component} from 'react'
import  {Cookies}            from "react-cookie"
import TwitterLogin             from 'react-twitter-auth'
import {fbAppId}             from './../../../constants/constantsApp' 


import style              from './style.css'

class SocialLogin extends Component {



 	async getTwitterToken(e){
 		e.preventDefault()
 		let cookies = new Cookies
 		let headers = new Headers();
 		headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')
 		headers.append('Authorization', 'Basic YmJDaWpydHZPTE9JYXcwZjd5aWxiald5QTpDVFZXNFdiNGV4bG9kYWVhM2RZcE03SDhWODJmTERGMEtWQ2Mxd25xc3p6QndnVjNVOQ==')
 		let user  = await fetch(`https://api.twitter.com/oauth2/token`,{
 			method: 'POST',
 			headers: headers,
 			mode: 'no-cors',
 			body: 'grant_type=client_credentials'
 		})
 		.then(
 			res => {
 				console.log(res); return res.json()
 			},
 			err => err
 		)
 		.then (json => {
 			console.log(json)
 			cookies.set('twi', json)
 		})
 	}

	render(){

  	return(
  			<div className='social-login'>
    					<div className="txt1 text-center p-t-54 p-b-20">
				          <span>
				            login via
				          </span>
				        </div>
				        <div className="flex-c-m">
				          <a href={`https://www.facebook.com/v3.0/dialog/oauth?client_id=${fbAppId}&&response_type=token&redirect_uri=${window.location.origin}/fb&state=testString`} className="login100-social-item" target='_blank'>
				            <img src="/src/img/icons/fb2.png" className='popup__button_fb'/>
				          </a>
				           
				          <a href="https://api.twitter.com/oauth/authenticate?oauth_token=AAAAAAAAAAAAAAAAAAAAALz27gAAAAAAqJsTTGZD4GVFn1O9q%2FrTrXugxVw%3DXwiGHvhAvQF4fH71CN2qbCVKfYctZRLoIbEZy5N0Vmiu3XLh1H" className="login100-social-item">
				            <img src="/src/img/icons/tw.png" className='popup__button_tw'/>
				          </a>
				          <a href={`https://accounts.google.com/o/oauth2/v2/auth?scope=openid%20email&include_granted_scopes=${true}&redirect_uri=${window.location.origin}/google&response_type=token&client_id=836131905097-k989bkib5nu42ksclkqgr05q97g62b33.apps.googleusercontent.com`} target='_blank' className="login100-social-item">
				            <img src="/src/img/icons/google.svg" />
				          </a>
			        	</div>
			        </div>	
  	)}
}
export default SocialLogin

// <TwitterLogin loginUrl="https://api.twitter.com/oauth/request_token"
//               onFailure={this.onFailed}
//               onSuccess={this.onSuccess}
//               requestTokenUrl="http://localhost:3000/tw/"
//               showIcon={true}
//               customHeaders={'customHeader'}>
//     <b>Custom</b> Twitter <i>Login</i> content
// </TwitterLogin>
