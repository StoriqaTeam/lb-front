import React, {Component} from 'react'
import Popup              from './../../../elements/popup/Popup'

class Cloudpayments extends Component {

  constructor(){
    super();
    this.state = {}
  }

  myCallback(){
    
  }

  componentDidUpdate(prevProps, prevState){
    if (!this.state.cloudPay && prevState.cloudPay){
      return
    }
      const createCloudPaymentFrame = async () => {
          const pay = function () {
              var widget = new cp.CloudPayments();
              widget.charge({ // options
                      publicId: 'pk_e71a0cfec105f2c031cda42c6f4e2',  //id из личного кабинета
                      description: 'Payment luckyblock',
                      amount: 100, //сумма
                      currency: 'RUB', //валюта
                      invoiceId: '1234567',
                      accountId: this.props.user.id
                  },
                  function (options) { // success
                      //действие при успешной оплате
                  },
                  function (reason, options) { // fail
                      //действие при неуспешной оплате
                  });
          };
      };

      createCloudPaymentFrame()


  }

  render(){
    return ([
      <button className="btn btn--green profile__btn" onClick={()=> this.setState({cloudPay: true})}>Pay Visa/Mastercard</button>
    ])
  }
}

export default Cloudpayments;
