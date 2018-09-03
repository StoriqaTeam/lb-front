import React, { Component } from "react"
import {Cookies}            from "react-cookie"
import CurrencyIframe       from './CurrencyIframe';
import Referral             from './../../../elements/referral/Referral'
import Wallet               from './Wallet'
import { Scrollbars }       from 'react-custom-scrollbars';
import Withdraw             from './../../../elements/withdraw/Withdraw'
import css                  from './style.css'
import TwoFA                from './TwoFA'
class Profile extends Component {

  constructor(){
    super()
    this.state = {}
  }

  render(){
    let  date = this.props.user.createdAt && this.props.user.createdAt.split('T')[0].split('-') ; 
    if (this.state.withdraw) {
      return (        <Withdraw close={() => this.setState({withdraw: false})} />  )
    }
    return  (
      <div className="container profile">
        <div className="main__header profile__header">
          <h1>PROFILE</h1>
        </div>
        <div className="greed">
          <div className="greed__sec">
            <div className="blc">
              <div className="profile">
                <div className="profile__img"><img src={this.props.user.avatar ? decodeURIComponent(this.props.user.avatar).replace('sz=50', 'sz=160') : "/src/img/example/ava-big.png"} alt /></div>
                <div className="profile__main">
                  <div className="profile__title">Nickname:</div>
                  <div className="profile__name">{this.props.user.name || `LuckyBlock user ${this.props.user.id}`}</div>
                  <div className="profile__balance">Balance: <strong>${this.props.user ? '0,00' : '1,274'}</strong></div>
                  <Wallet user={this.props.user}/>
                  <div className="profile__row">
                    <div className="profile__title profile__title--row">Join date:</div>
                    <div className="profile__val">{date ? `${date[2]}.${date[1]}.${date[0]}`: ''}</div>
                  </div>
                  <div className="profile__row">
                    <div className="profile__title profile__title--row">Email:</div>
                    <div className="profile__val">{this.props.user.email}</div>
                  </div>
                  <button className="btn btn--green profile__btn" onClick={()=> this.setState({withdraw: true})}>Withdraw</button>
                  <TwoFA user={this.props.user} />
                </div>
              </div>
            </div>
          </div>
          <div className="greed__sec">
            <div className="blc">
              <Referral user={this.props.user} />
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
                <table className="table profile__table_game">
                  <thead>
                    <tr>
                      <th><span>Date</span></th>
                      <th><span>Value of jackpot</span></th>
                      <th><span>My bet</span></th>
                      <th><span>Prize</span></th>
                    </tr>
                  </thead>
                  <tbody style={{display: 'none'}}/>
                  </table>
                  <Scrollbars style={{ height: 240 }}   >

                   <table className="table ">
                    <thead style={{display: 'none'}}>
                      <tr>
                        <th><span>Date</span></th>
                        <th><span>Value of jackpot</span></th>
                        <th><span>My bet</span></th>
                        <th><span>Prize</span></th>
                      </tr>
                    </thead>
                    <tbody >

                   {Array(15).fill(0).map((item, i) =>  {
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
                 </Scrollbars>
              </div>
            </div>
          </div>

          <div className="greed__sec">
            <h2 className="greed__sec-title">Referral history</h2>
            <div className="blc blc--table">
              <div className="table-overlay">
                <table className="table profile__table_ref">
                  <thead>
                    <tr>
                      <th><span>Nickname</span></th>
                      <th><span>Bet</span></th>
                      <th><span>My bonus</span></th>
                    </tr>
                  </thead>
                  <tbody style={{display: 'none'}}/>
                  </table>
                 <Scrollbars style={{ height: 240 }}   >
                    <table className="table">

                  <thead style={{display: 'none'}}>
                    <tr>
                      <th><span>Nickname</span></th>
                      <th><span>Bet</span></th>
                      <th><span>My bonus</span></th>
                    </tr>
                  </thead>
                  <tbody >
                    {Array(15).fill(0).map((item, i) =>  {
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
                </Scrollbars>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
