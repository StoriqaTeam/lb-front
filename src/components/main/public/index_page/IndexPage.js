import React, { Component } from "react"
import {Cookies}            from "react-cookie"
import { Widget }           from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import Referral             from './../../../elements/referral/Referral'
import Chat                 from './Chat'
import css                  from './style.css'

class IndexPage extends Component {

  openSignModal(){
    let button = document.getElementById('login')
    console.log(button, this.props)
    button && !this.props.user && button.click()
  }

  render(){
    let cookies = new Cookies,
    token       = cookies.get('token'),
    date        = new Date()

    return (
      <div className="container index-page">
        <div className="greed">
          <div className="greed__sec">
            <div className="blc blc--table">
              <div className="current">
                <div className="current__main">
                  <h3 className="current__title">CURRENT ROUND PARTICIPANTS</h3>                                
                  <div className="winners-counters">
                    <div className="winners-counter">
                      <div className="winners-counter__name">Total players:</div>
                      <div className="winners-counter__val">4,734</div>
                    </div>
                    <div className="winners-counter">
                      <div className="winners-counter__name">Value of jackpot:</div>
                      <div className="winners-counter__val">8,323,455 ETH</div>
                    </div>
                    <div className="winners-counter">
                      <div className="winners-counter__name">Date of the draw:</div>
                      <div className="winners-counter__val">{date.getFullYear()}.{(date.getMonth() + 1).toString().length === 1 ? `0${date.getMonth() + 1}` : date.getMonth()}.{date.getDate() + 1}</div>
                    </div>
                  </div>                                
                  <div className="rainbow" />
                </div>
              </div>
              <div className="table-overlay">
                <table className="table">
                  <thead>
                    <tr>
                      <th><span>Nickname</span></th>
                      <th><span>Deposit</span></th>
                      <th><span>Win rate</span></th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {Array(16).fill(0).map((item, i) =>  {
                      let percent = (Math.random()  * (10 - 0.1)  + 10).toFixed(0),
                      cash        = (Math.random()  * (1000 - 50) + 50).toFixed(0)
                      return (
                          <tr key={i}>
                          <td>
                            <div className="table__user">
                              <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
                              <div className="table__user-nane">LuckyBlock user {(Math.random()  * (1000 - 50)).toFixed(0)}</div>
                            </div>
                          </td>
                          <td>${cash}</td>
                          <td>{percent}%</td>
                          <td><div className="table__circle table__circle--viol" /></td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>  
         <div className="greed__sec">
           { !this.props.user 
              ? <div className="blc blc_referral">
                <Referral user={this.props.user} />
              </div> 
              : <div className="register">
                  <div className="register__main">REGISTER FOR GET YOUR REFERRAL BONUSES</div>,
                  <button className="btn register__btn" onClick={() => this.openSignModal()}>Join</button>
                </div>
            }  
          <Chat user={this.props.user}/> 
         </div>                 
        </div>
      </div>

    )
  }
}

export default IndexPage        