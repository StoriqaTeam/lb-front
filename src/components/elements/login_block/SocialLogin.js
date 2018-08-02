
import ReactDOM from 'react-dom';

import React, {Component} from 'react'
import  {Cookies}            from "react-cookie"
import TwitterLogin             from 'react-twitter-auth'
import {fbAppId}             from './../../../constants/constantsApp' 
import {API_URL}     from './../../../constants/constantsAPI' 

import TelegramLoginButton from 'react-telegram-login';

import style              from './style.css'

class SocialLogin extends Component {

 
handleTelegramResponse (response) {
  console.log(response);
  let cookies = new Cookies;
			let user  = await fetch(`${API_URL}/api/v1/auth-social`,{
		 			method: 'POST',
		 			headers: headers,
		 			body: JSON.stringify({
		 					provider: 'telegram', 
		 					profile: response
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
		 		return user && this.props.userActions.getProfile(user.user) 
};
 
// componentDidMount(){
// 			ReactDOM.render(
//   <TelegramLoginButton dataOnauth={this.handleTelegramResponse} botName="OdauBot" />,
//   document.getElementById('telegramButton')
// );

// }

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
				          <a onClick={() =>twitterAccess(this)} className="login100-social-item social-login__twitter" target='_blank'>
											<svg fill="#fff" preserveAspectRatio="xMidYMid meet" height={25} width={25} viewBox="0 0 40 40" style={{verticalAlign: 'middle', color: 'rgb(0, 172, 237)'}}><g><path d="m37.7 9.1q-1.5 2.2-3.7 3.7 0.1 0.3 0.1 1 0 2.9-0.9 5.8t-2.6 5.5-4.1 4.7-5.7 3.3-7.2 1.2q-6.1 0-11.1-3.3 0.8 0.1 1.7 0.1 5 0 9-3-2.4-0.1-4.2-1.5t-2.6-3.5q0.8 0.1 1.4 0.1 1 0 1.9-0.3-2.5-0.5-4.1-2.5t-1.7-4.6v0q1.5 0.8 3.3 0.9-1.5-1-2.4-2.6t-0.8-3.4q0-2 0.9-3.7 2.7 3.4 6.6 5.4t8.3 2.2q-0.2-0.9-0.2-1.7 0-3 2.1-5.1t5.1-2.1q3.2 0 5.3 2.3 2.4-0.5 4.6-1.7-0.8 2.5-3.2 3.9 2.1-0.2 4.2-1.1z" /></g></svg>
				          </a>       
   								
				           <a href={`https://accounts.google.com/o/oauth2/v2/auth?scope=openid%20email&include_granted_scopes=${true}&redirect_uri=${window.location.origin}/google&response_type=token&client_id=836131905097-k989bkib5nu42ksclkqgr05q97g62b33.apps.googleusercontent.com`} target='_blank' className="login100-social-item">
				            <img src="/src/img/icons/google.svg" />
				          </a>
				          <a  target='_blank' className="login100-social-item social-login__telegram" id='telegramButton'>
										
 							 <TelegramLoginButton dataOnauth={this.handleTelegramResponse} botName="LBPassportTestBot" >
										<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={25} width={25} version="1.1" id="Режим_изоляции" x="0px" y="0px" viewBox="0 0 288.2 241.7" style={{enableBackground: 'new 0 0 288.2 241.7'}} xmlSpace="preserve">
										  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t.st0{fill:#C8DAEA;}\n\t.st1{fill:#A9C9DD;}\n\t.st2{fill:url(#SVGID_1_);}\n" }} />
										  <path className="st0" d="M108.4,227.1c-8.6,0-7.1-3.2-10.1-11.4l-25.2-83.1L267.4,17.3L108.4,227.1z" />
										  <path className="st1" d="M112.9,159.5l44.1,26.6l-35.3,34.4c-3.7,3.6-6.6,6.6-13.2,6.6L112.9,159.5z" />
										  <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="64.8177" y1="163.1597" x2="64.9524" y2="162.7943" gradientTransform="matrix(288.1709 0 0 -241.7013 -18513.7129 39545.1016)">
										    <stop offset={0} style={{stopColor: '#EFF7FC'}} />
										    <stop offset={1} style={{stopColor: '#FFFFFF'}} />
										  </linearGradient>
										  <path className="st2" d="M235.8,48.6c5.4-4.8-1.2-7.1-8.3-2.8L75.8,141.5l-65.5-20.4C-3.9,116.7-4,107,13.5,100L268.7,1.6  c11.7-5.3,22.9,2.8,18.5,20.6l-43.5,204.9c-3,14.6-11.8,18-24,11.3l-106.8-78.9" />
										</svg>
										</TelegramLoginButton>
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
				          // <a href={`https://www.facebook.com/v3.0/dialog/oauth?client_id=${fbAppId}&&response_type=token&redirect_uri=${window.location.origin}/fb&state=testString`} className="login100-social-item" target='_blank'>
				          //   <img src="/src/img/icons/fb2.png" className='popup__button_fb'/>
				          // </a>   

				          				//          <a href={`https://accounts.google.com/o/oauth2/v2/auth?scope=openid%20email&include_granted_scopes=${true}&redirect_uri=${window.location.origin}/google&response_type=token&client_id=836131905097-k989bkib5nu42ksclkqgr05q97g62b33.apps.googleusercontent.com`} target='_blank' className="login100-social-item">
