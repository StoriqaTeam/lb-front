
import { connect }            from 'react-redux'
import * as userActions       from './../../../../actions/userActions'
import { bindActionCreators } from 'redux'
import {API_URL, GET_USER}    from './../../../../constants/constantsAPI' 



import ReactDOM           from 'react-dom';
import React, {Component} from 'react'
import  {Cookies}         from "react-cookie"
import Popup              from './../../../elements/popup/Popup'
import style              from './style.css'


class Add2FAForm extends Component {

	constructor(){
		super()
		this.state = {}
	}

	async getTwoFAData(){
		let headers = new Headers();

 		let TwoFAData  = await fetch(`${API_URL}/api/v1/2fa`,{
 			method: 'GET'
 		})
 		.then(
 			res => res.json(),
 			err => err
 		)
 		.then (json => {
 			console.log(json)
			return json.secret && this.setState({
				twoFAData: json
			})
 		})		
	}

	validateCode(){
		let code = this.refs.code.value.replace(/\D/g, '')
		return code.length < 6 
		? this.refs.code.value = code
		: this.setTwoFA(code)

	}

	async setTwoFA(code){
		let cookies = new Cookies,
		component = this,
 		FASet = await fetch(`${API_URL}/api/v1/2fa`,{
 			method: 'POST',
 			headers: new Headers({
				'Content-Type': 'application/json',
				'X-Auth-Token': cookies.get('token') 				
 			}),
 			body:JSON.stringify({
 				secret: this.state.twoFAData.secret, 
 				token: code  			
 			})
 		})
 		.then(
 			res => res.json(),
 			err => err
 		)
 		.then (async json => {
 			console.log(json)
 			if (json.error){
 				return this.setState({
	 				error: json.error
	 			})
 			}
			let user = FASet && await GET_USER(cookies.get('token'))
 			return  user && component.props.userActions.getProfile(user)
 		})		
	}

	componentDidMount(){
		this.getTwoFAData()
	}

  render(){
    return (
			<div className="container-login100">
		    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
		   		<div className='popup__close' onClick={() => this.props.closePopup()}>×</div>

		      <div className="login100-form validate-form" >
		        <span className="login100-form-title p-b-49">
		          Add 2-factor auth.
		        </span>
			      {this.state.twoFAData 
			      	? <div className='text-center'>
			      			<div> Scan this QR-code with Google Authenticator and enter the code below </div>
				          < img src={this.state.twoFAData.image} className='m-auto' />
				          <div className='mt-2 text-center'>
				          	<b>Secret:</b>&nbsp;
				          	{this.state.twoFAData.secret}
				          </div>	
				          <div className="mt-2 wrap-input100 validate-input m-b-23 m-auto two-fa__code text-center" data-validate="Username is reauired">
					          <input className="input100 p-0 text-center" type="text" ref="code" maxLength={6} placeholder="Type your code" autoComplete="off" onChange={() => this.validateCode()} />
				          </div>
					        <small className="text-danger d-block error" data-symbol="">{this.state.error}</small>

				        </div> 
					   
					    : 'Getting 2-factor authentication data'	
					  }
		      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Add2FAForm)
