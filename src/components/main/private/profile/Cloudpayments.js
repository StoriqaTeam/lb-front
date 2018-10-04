import React, {Component} from 'react'
import Popup from './../../../elements/popup/Popup'
import {API_URL} from './../../../../constants/constantsAPI'
import {Cookies} from "react-cookie"

class Cloudpayments extends Component {

  constructor(){
    super();
    this.state = {}
  }

  myCallback(){
    
  }

    async successCallback(options){
        let cookies = new Cookies,
            component = this,
            successCall = await fetch(`${API_URL}/api/v1/cloud/success`,{
                method: 'POST',
                headers: new Headers({
                    'X-Auth-Token': cookies.get('token'),
                    'Content-Type': 'application/json'
                }),
                body:JSON.stringify(options)
            })
                .then(
                    res => res.json ? res.json() : res,
                    err => err
                )
                .then (async json => {
                    console.log(json)
                    if (json.error || json.message === 'Error'){
                      return this.setState({error: json.error})
                    }
                });
    }


  callThePayment () {
    const widget = new cp.CloudPayments();
    widget.charge({ // options
      publicId: 'pk_e71a0cfec105f2c031cda42c6f4e2',  //id из личного кабинета
      description: 'Payment luckyblock',
      amount: 100, //сумма
      currency: 'RUB', //валюта
      invoiceId: '1234567',
      accountId: this.props.user.id
    },
    function (options) { // success
      console.log("cloud success", options);
        this.successCallback(options);
    },
    function (reason, options) { // fail
        //действие при неуспешной оплате
    });
  }

  render(){
    return (
      <button className="btn btn--green profile__btn" onClick={()=> this.callThePayment()}>Pay Visa/Mastercard</button>
 
    )
  }
}

export default Cloudpayments;
