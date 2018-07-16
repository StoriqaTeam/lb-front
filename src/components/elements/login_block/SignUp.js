import React, {Component} from 'react'
import  {Cookies}            from "react-cookie"
import SocialLogin            from './SocialLogin'
import {API_URL}          from './../../../constants/constantsAPI' 



import style              from './style.css'

class SignUp extends Component {

	constructor(){
		super()
		this.state = {}
	}

 	async signUp(e){
 		e.preventDefault()
 		 		let cookies = new Cookies

 		let headers = new Headers();
 			    headers.append('Content-Type', 'application/json')

 		let user  = await fetch(`${API_URL}/api/v1/signup`,{
 			method: 'POST',
 			headers: headers,
 			body: JSON.stringify({
 				email:    this.refs.email.value, 
 				password: this.refs.password.value,
 				ref:      cookies.get('ref')
 			})
 		})
 		.then(
 			res => res.json(),
 			err => err
 		)
 		.then (json => {
 			return json.status === 'success' ? json.message : null
 		})

 		if (user){
 			this.setState({
 				success: true
 			})
 		}
 	}


  render(){

  	return(<div className="container-login100" >
			    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
			    			      				<div className='popup__close' onClick={() => this.props.closePopup()}>×</div>

			      <form className="login100-form validate-form" autoComplete='off' onSubmit={(e) => this.signUp(e)}>
			        <span className="login100-form-title p-b-49">
			          Sign up
			        </span>
			        <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
			          <span className="label-input100">Email</span>
			          <input className="input100" type="email" name="username"  required ref='email' placeholder="Type your email"  required  autoComplete="off"/>
			          <span className="focus-input100" data-symbol="" />
			        </div>
			        <div className="wrap-input100 validate-input"  required  data-validate="Password is required">
			          <span className="label-input100">Password</span>
			          <input className="input100" type="password" name="pass" placeholder="Type your password" ref='password'  required autoComplete="off"/>
			          <span className="focus-input100" data-symbol="" />
			        </div>
			        <div className="text-right p-t-8 p-b-31">

			        </div>
			        <div className="container-login100-form-btn">
			          <div >
			            <input type='submit' className="btn btn--green header-main__right-btn popup__confirm" value='Sign up'/>
			          </div>
			        </div>
			    		{this.state.success && <div className='label-input100'>Регистрация успешна</div>}
			        
			       <SocialLogin />


			        <div className="flex-col-c p-t-25">
			          <span className="txt1 p-b-17">
			            already have an account?
			          </span>
			          <a  className="txt2" onClick={() => this.props.switch()}>
			            Sign in
			          </a>
			        </div>
			      </form>
			    </div>
			  </div>
			  )
			}
}
			export default SignUp
