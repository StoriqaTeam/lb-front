import React, {Component} from 'react'
import { connect }            from 'react-redux'
import * as userActions       from './../../../actions/userActions'
import { bindActionCreators } from 'redux'
import style                  from './style.css'
import {API_URL}              from './../../../constants/constantsAPI' 
import SocialLogin            from './SocialLogin'

class SignIn extends Component {

	constructor(){
		super()
		this.state = {}
	}

 	async signIn(e){
 		e.preventDefault()
 		let headers = new Headers();
 		headers.append('Content-Type', 'application/json')

 		let user  = await fetch(`${API_URL}/api/v1/signin`,{
 			method: 'POST',
 			headers: headers,
 			body: JSON.stringify({
 				email:    this.refs.email.value, 
 				password: this.refs.password.value
 			})
 		})
 		.then(
 			res => res.json(),
 			err => err
 		)
 		.then (json => {
 			if (json.status === 'success'){
 			 return json.message 
 			} else {  
 				this.setState({error: json.message})
 				return null
 			}
 		})
 		return user && this.props.userActions.getProfile(user) 
 	}

  render(){

  	return(<div className="container-login100">
			    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
			      				<div className='popup__close' onClick={() => this.props.closePopup()}>×</div>

			      <form className="login100-form validate-form" autoComplete='off' onSubmit={(e)=> this.signIn(e)}>
			        <span className="login100-form-title p-b-49">
			          Login.
			        </span>
			        <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
			          <span className="label-input100">Email</span>
			          <input className="input100" type="text" name="username" ref='email' placeholder="Type your email"  required autoComplete="off"/>
			          <span className="focus-input100" data-symbol="" />
			        </div>
			        <div className="wrap-input100 validate-input" data-validate="Password is required">
			          <span className="label-input100">Password</span>
			          <input className="input100" type="password" name="pass" ref='password' placeholder="Type your password" required  autoComplete="off"/>
			          <span className="focus-input100" data-symbol="" />
			        </div>
			        <div className="text-right p-t-8 p-b-31">
			    		{this.state.error && <div className='label-input100'>{this.state.error}</div>}

			        </div>
			        <div className="container-login100-form-btn">
			          <div className="wrap-login100-form-btn">
			            <input className="btn btn--green header-main__right-btn" type='submit' value='Login'/>
			              
			          </div>
			        </div>
			       <SocialLogin />

			        <div className="flex-col-c p-t-25">
			          <span className="txt1 p-b-17">
			            or sign up
			          </span>
			          <a  className="txt2" onClick={() => this.props.switch()}>
			            Sign up
			          </a>
			        </div>
			      </form>
			    </div>
			  </div>
			  )
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

