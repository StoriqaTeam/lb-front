import ReactDOM           from 'react-dom';
import React, {Component} from 'react'
import  {Cookies}         from "react-cookie"
import {API_URL}          from './../../../../constants/constantsAPI' 
import Popup              from './../../../elements/popup/Popup'
import Add2FAForm         from './Add2FAForm'
import style              from './style.css'


class Withdraw extends Component {

	constructor(){
		super()
		this.state = {}
	}

  validateAddress(e){
    e.preventDefault()
    return /^0x[a-fA-F0-9]{40}$/.test(this.refs.address.value)
    ? this.withdrawFunds()
    : this.setState({
        error: 'Wrong address format. \n Must look like 0xf674e8402c2dc09e1a69d5b96ecf9054e1d8d5f6'
      })

  }

  async withdrawFunds(){
   let cookies = new Cookies,
    component = this,
    FASet = await fetch(`${API_URL}/api/v1/wallet/add`,{
      method: 'POST',
      headers: new Headers({
        'X-Auth-Token': cookies.get('token'),
        'Content-Type': 'application/json'        
      }),
      body:JSON.stringify({
        currency: 'eth', 
        address: this.refs.address.value,
        user_id: this.props.user.id       
      })
    })
    .then(
      res => res.json(),
      err => err
    )
    .then (async json => {
      console.log(json)
      // if (json.error || json.message === 'token not equal'){
        this.setState({
          error: null,
          wallets: [...this.state.wallets, json],
          message: 'Address added successfully'
        })
      // }
     
    })    
  }

  componentDidMount(){
  }

  render(){
    return(
      [
        <button className="btn btn--green profile__btn" onClick={()=> this.setState({addWallet: true})}>Withdraw</button>,
    		 this.state.addWallet &&
      		<Popup closePopup={() => this.setState({addWallet: false})} scrollable>
            <div className="container-login100">
            <div className="wrap-login100 p-l-25 p-r-25 p-t-65 p-b-54">
              <div className='popup__close' onClick={() => this.setState({addWallet: false})}>×</div>

              <div className="login100-form validate-form" >
                <span className="login100-form-title p-b-49">
                  Withdraw funds
                </span>
                <div className='text-center'>
                  { this.state.message
                    || <form className='text-center' onSubmit={(e) => this.validateAddress(e)}>
                      <div> Withdraw funds.</div>    
                      <div className="mt-2 wrap-input100 validate-input m-b-23 m-auto   text-center"  >
                        <input className="input100 p-0 text-center" type="text" ref="qty" maxLength={42} placeholder="Enter sum" autoComplete="off"  />
                      </div>
                      <div className="mt-2 wrap-input100 validate-input m-b-23 m-auto   text-center"  >
                        <input className="input100 p-0 text-center" type="text" ref="address" maxLength={42} placeholder="Enter  your address" autoComplete="off"  />
                      </div>                      
                      <input type="submit" className=" mt-2 btn btn--green header-main__right-btn popup__confirm" value="Add" />
                      <small className="text-danger d-block error" data-symbol="">{this.state.error }</small>

                    </form> 
                  }
                </div>  
              </div>   
            </div>    
          </div>                          
    		</Popup>	
      ]
    )
  }
}



  export default Withdraw