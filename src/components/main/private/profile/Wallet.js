import ReactDOM from 'react-dom';
import React, {Component} from 'react'
import  {Cookies}            from "react-cookie"
import {API_URL}     from './../../../../constants/constantsAPI' 
import style              from './style.css'


class Wallet extends Component {

	constructor(){
		super()
		this.state = {}
	}
	async getWallet(){
		console.log(this.props.user.id)
 		let headers = new Headers();
 		headers.append('Content-Type', 'application/json')

 		let response  = await fetch(`${API_URL}/api/v1/user/deposit-address`,{
 			method: 'POST',
 			headers: headers,
 			body:JSON.stringify({
 				"user_id": this.props.user.id
 			})
 		})
 		.then(
 			res => res.json(),
 			err => err
 		)
 		.then (json => {
 			console.log(json)
 			return json.address && this.setState({
 				address: json.address
 			})
 		})/*
		user = response && response.token ? await GET_USER(response.token) : this.refs.error.innerHTML = response.error
 		return response.token ? this.props.userActions.getProfile(user) : null
 	*/
	}

	componentDidMount(){
		this.getWallet()
	}

  render(){
    return  (
        <div className="profile__row">
          <div className="profile__title profile__title--row">Wallet:</div>
          <div className="profile__val">{this.state.address || 'Requesting wallet address...'}</div>
        </div>
    )
  }
}



  export default Wallet