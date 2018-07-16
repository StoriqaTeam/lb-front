import React, {Component} from 'react'
import  {Cookies}            from "react-cookie"
import TwitterLogin             from 'react-twitter-auth'
import {fbAppId}             from './../../../constants/constantsApp' 
import {API_URL}             from './../../../constants/constantsAPI' 
import { TwitterLoginButton } from "react-social-login-buttons";
import style              from './style.css'

class SocialSign extends Component {


 	async getTwitterToken(e){
 		e.preventDefault()
 		let headers = new Headers();
 		headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')
 		headers.append('Authorization', 'Basic YmJDaWpydHZPTE9JYXcwZjd5aWxiald5QTpiYkNpanJ0dk9MT0lhdzBmN3lpbGJqV3lB')
 		let user  = await fetch(`http://api.twitter.com/oauth2/token`,{
 			method: 'POST',
 			headers: new Headers({
				'Content-Type':  'application/x-www-form-urlencoded;charset=UTF-8',
				'Authorization': `Basic ${btoa('za3Tkws79zZmF9NkxuW1Rxaii:XAqsSqwaADGfMm4WDKcqF9Y9pseFpu8VBK0mMJJHFvzEjncqkf')}`			
 			}),
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
 		})
 	}

	render(){

  	return(
  			<div className='social-login'>
    					<div className="txt1 text-center p-t-54 p-b-20">
				          <span>
				            Or Sign Up Using
				          </span>
				        </div>
				        <div className="flex-c-m">
				          <a href={`https://www.facebook.com/v3.0/dialog/oauth?client_id=${fbAppId}&&response_type=token&redirect_uri=http://localhost:3000/fb&state=testString`} className="login100-social-item bg1" target='_blank'>
				            f
				          </a>

				          <a onClick={(e) => this.getTwitterToken(e)} href="#" className="login100-social-item bg2">
				            B
				          </a>
				          <a href={`https://accounts.google.com/o/oauth2/v2/auth?scope=openid%20email&include_granted_scopes=${true}&redirect_uri=${window.location.origin}/google&response_type=token&client_id=836131905097-k989bkib5nu42ksclkqgr05q97g62b33.apps.googleusercontent.com`} target='_blank' className="login100-social-item bg3">
				            g
				          </a>
			        	</div>
			        </div>	
  	)}
}
export default SocialSign

// <TwitterLogin loginUrl="https://api.twitter.com/oauth/request_token"
//               onFailure={this.onFailed}
//               onSuccess={this.onSuccess}
//               requestTokenUrl="http://localhost:3000/tw/"
//               showIcon={true}
//               customHeaders={'customHeader'}>
//     <b>Custom</b> Twitter <i>Login</i> content
// </TwitterLogin>