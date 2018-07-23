import React, { Component } from "react"
import {Cookies}            from "react-cookie"
import CurrencyIframe       from './CurrencyIframe';
import {API_URL}            from './../../../../constants/constantsAPI' 
import {copyToClipboard}    from './../../../../constants/constantsApp' 
import css                  from './style.css'

class Profile extends Component {

 
  shareFB(){
    window.FB.ui({
      method: 'share',
      href: `http://yandex.ru/?ref=${Math.pow(this.props.user.id, 2)}`
    }, function(response){});
  }

  copy(id){
    var copyText = document.getElementById("copyRef");
    copyText.select();
    document.execCommand("copy");
    this.refs[id].innerHTML = 'Link copied'
    window.setTimeout(()=>    this.refs[id].innerHTML = 'Copy referral link', 3000)
  }

  async sendRef(e){
    e.preventDefault()

    let sentRef  = await fetch(`${API_URL}/api/v1/send_ref`,{
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        email: this.refs.email.value, 
        id:    this.props.user.id  
      })
    })
    .then(
      res => res.json(),
      err => err
    )
    .then (json => {
      console.log(json)
      return json.status === 'success' ? 1 : 0
    })

    if (sentRef){
      this.refs.email.value = 'Referal link sent'
      window.setTimeout(()=>    this.refs.email.value = '', 3000)

    }
  }

  render(){

    let date = this.props.user.signed_up.split('T')[0].split('-')

    return  (

      <div className="container profile">
        <div className="main__header profile__header">
          <h1>PROFILE</h1>
        </div>
        <div className="greed">
          <div className="greed__sec">
            <div className="blc">
              <div className="profile">
                <div className="profile__img"><img src={this.props.user.img ? decodeURIComponent(this.props.user.img) : "/src/img/example/ava-big.png"} alt /></div>
                <div className="profile__main">
                  <div className="profile__title">Nickname:</div>
                  <div className="profile__name">{this.props.user.name || `LuckyBlock user ${this.props.user.id}`}</div>
                  <div className="profile__balance">Balance: <strong>${this.props.user ? '0,00' : '1,274'}</strong></div>
                  <div className="profile__row">
                    <div className="profile__title profile__title--row">Wallet:</div>
                    <div className="profile__val">0x7cB57B5A97eAbe94205Cv63h67</div>
                  </div>
                  <div className="profile__row">
                    <div className="profile__title profile__title--row">Join date:</div>
                    <div className="profile__val">{date[2]}.{date[1]}.{date[0]}</div>
                  </div>
                  <div className="profile__row">
                    <div className="profile__title profile__title--row">Email:</div>
                    <div className="profile__val">{this.props.user.email}</div>
                  </div>
                  <button className="btn btn--green profile__btn">Withdraw</button>
                </div>
              </div>
            </div>
          </div>
          <div className="greed__sec">
            <div className="blc">
              <div className="referal">
                <div className="referal__title">REFERRAL</div>
                <div className="referal__alert">Get your bonuses by inviting friends!</div>
                <div className="referal__txt">Give your friends 3% of probability for winning jackpot. And get your 2% lucky bonus.</div>
                <form action="#" method="post" className="referal__form">
                  <div className="referal__form-name">Share your Referral</div>
                  <form className="referal__form-row"onSubmit={(e) => this.sendRef(e)}>
                    <input type="email" ref='email' name="email" required ref='email' className="input referal__input" placeholder="myfriend@domain.com" />
                    <input className="btn referal__form-submit" type="submit" value='Send'/>
                  </form>
                </form>
                <div className="referal__bar">
                  <div class="btn btn--facebook referal__facebook" 
                    onClick={()=> this.shareFB()}
                    data-href={`https://lb-front.stq.cloud/?ref=${Math.pow(this.props.user.id, 2)}`} 
                    data-size='large'
                    data-layout="button">Share referral via Facebook
                  </div>
                  <button className="btn btn--twitter referal__twitter h__disabled_gray h__disabled">Share referral via Twitter</button>
                  <button className="btn btn--green btn--copy referal__copy" ref='copyRef' onClick={() => this.copy('copyRef')}>Copy referral link</button>
                  <input style={{opacity: 0, height: 0}} id='copyRef' value={`${window.location.origin}?ref=${Math.pow(this.props.user.id, 2)}`}/>
                </div>
              </div>
            </div>
          </div>
          <div className="profile__iframes greed__sec">
            <div className="blc">
              <div className="referal">
                <div className="referal__title">DEPOSIT</div>
                <CurrencyIframe/>
              </div>
            </div>
          </div> 
          <div className="greed__sec">
            <h2 className="greed__sec-title">Game history</h2>
            <div className="blc blc--table">
              <div className="table-overlay">
                <table className="table">
                  <thead>
                    <tr>
                      <th><span>Date</span></th>
                      <th><span>Value of jackpot</span></th>
                      <th><span>My bet</span></th>
                      <th><span>Prize</span></th>
                    </tr>
                  </thead>
                  <tbody>
                   {Array(5).fill(0).map((item, i) =>  {
                      let jackpot = (Math.random()  * (250 - 100) + 50).toFixed(0),
                      bet         = (Math.random()  * (250 - 100) + 50).toFixed(0),
                      won         = Number(bet) + Number((Math.random()  * (250 - 100) + 50))
                      return (
                        <tr key={i} >
                          <td>02 Feb 2018</td>
                          <td>${jackpot},200</td>
                          <td>${bet}</td>
                          <td>${won.toFixed(0)}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="greed__sec">
            <h2 className="greed__sec-title">Referral history</h2>
            <div className="blc blc--table">
              <div className="table-overlay">
                <table className="table">
                  <thead>
                    <tr>
                      <th><span>Nickname</span></th>
                      <th><span>Bet</span></th>
                      <th><span>My bonus</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array(5).fill(0).map((item, i) =>  {
                      let bet =   (Math.random()  * (400 - 100) + 50).toFixed(0),
                      bonus         = bet / 25
                      return (
                        <tr key={i}>
                          <td>
                            <div className="table__user">
                              <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
                              <div className="table__user-nane">LuckyBlock user {(Math.random()  * (1000 - 50)).toFixed(0)}</div>
                            </div>
                          </td>
                          <td>${bet}</td>
                          <td>${bonus.toFixed(2)}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  )}
}

export default Profile
