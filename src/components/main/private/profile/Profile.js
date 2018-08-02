import React, { Component } from "react"
import {Cookies}            from "react-cookie"
import CurrencyIframe       from './CurrencyIframe';
import Referral             from './../../../elements/referral/Referral'
import css                  from './style.css'

class Profile extends Component {


  render(){
    let  date = this.props.user.createdAt && this.props.user.createdAt.split('T')[0].split('-')  

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
                    <div className="profile__val">{date ? `${date[2]}.${date[1]}.${date[0]}`: ''}</div>
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
