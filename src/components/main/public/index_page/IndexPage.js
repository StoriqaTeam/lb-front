import React, { Component } from "react"
import {Cookies}            from "react-cookie"
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

class IndexPage extends Component {

  openSignModal(){
    let button = document.getElementById('login')
    button && !this.props.user && button.click()
  }

  render(){
    let cookies = new Cookies,
    token = cookies.get('token')

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
                      <div className="winners-counter__val">2018.04.22</div>
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
                              <div className="table__user-nane">{i === 1 ? 'Nagibator' :  Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10)}</div>
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
            <div className="blc register-blc">
              <div className="register">
                <div className="register__main">REGISTER FOR GET YOUR REFERRAL BONUSES</div>
                <button className="btn register__btn">Join</button>
              </div>
            </div>
            <div className="blc chat-blc">
              <div className="chat__wrap">
                <h3 className="chat__title">CHAT</h3>
                <div className="chat__list">
                  <div className="chat__item">
                    <div className="chat__icn"><img src="/src/img/example/ava.png" alt /></div>
                    <div className="chat__main">
                      <div className="chat__name chat__name--green">Nagibator <img src="/src/img/icons/cup-yello.svg" alt /></div>
                      <div className="chat__txt">Может примеры других решений им показать? Тот же PundiX или то решение для алипэй, чью фотку я скидывал</div>
                    </div>
                    <div className="chat__time">12:07</div>
                  </div>
                  <div className="chat__item">
                    <div className="chat__icn"><img src="/src/img/example/ava.png" alt /></div>
                    <div className="chat__main">
                      <div className="chat__name chat__name--blue">0x7cB57B5A97eAbe94205C</div>
                      <div className="chat__txt">Может примеры других решений им показать? Тот же PundiX или то решение для алипэй, чью фотку я скидывал</div>
                    </div>
                    <div className="chat__time">12:07</div>
                  </div>
                  <div className="chat__item">
                    <div className="chat__icn"><img src="/src/img/example/ava.png" alt /></div>
                    <div className="chat__main">
                      <div className="chat__name chat__name--viol">Nagibator <img src="/src/img/icons/cup-green.svg" alt /></div>
                      <div className="chat__txt">Может примеры других решений им показать? Тот же PundiX или то решение для алипэй, чью фотку я скидывал</div>
                    </div>
                    <div className="chat__time">12:07</div>
                  </div>
                  <div className="chat__item">
                    <div className="chat__icn"><img src="/src/img/example/ava.png" alt /></div>
                    <div className="chat__main">
                      <div className="chat__name chat__name--red">Nagibator <img src="/src/img/icons/cup-green.svg" alt /></div>
                      <div className="chat__txt">Может примеры других решений им показать? Тот же PundiX или то решение для алипэй, чью фотку я скидывал</div>
                    </div>
                    <div className="chat__time">12:07</div>
                  </div>
                  <div className="chat__item">
                    <div className="chat__icn"><img src="/src/img/example/ava.png" alt /></div>
                    <div className="chat__main">
                      <div className="chat__name chat__name--green">Nagibator <img src="/src/img/icons/cup-yello.svg" alt /></div>
                      <div className="chat__txt">Может примеры других решений им показать? Тот же PundiX или то решение для алипэй, чью фотку я скидывал</div>
                    </div>
                    <div className="chat__time">12:07</div>
                  </div>
                  <div className="chat__item">
                    <div className="chat__icn"><img src="/src/img/example/ava.png" alt /></div>
                    <div className="chat__main">
                      <div className="chat__name chat__name--blue">0x7cB57B5A97eAbe94205C</div>
                      <div className="chat__txt">Может примеры других решений им показать? Тот же PundiX или то решение для алипэй, чью фотку я скидывал</div>
                    </div>
                    <div className="chat__time">12:07</div>
                  </div>
                  <div className="chat__item">
                    <div className="chat__icn"><img src="/src/img/example/ava.png" alt /></div>
                    <div className="chat__main">
                      <div className="chat__name chat__name--viol">Nagibator <img src="/src/img/icons/cup-green.svg" alt /></div>
                      <div className="chat__txt">Может примеры других решений им показать? Тот же PundiX или то решение для алипэй, чью фотку я скидывал</div>
                    </div>
                    <div className="chat__time">12:07</div>
                  </div>
                  <div className="chat__item">
                    <div className="chat__icn"><img src="/src/img/example/ava.png" alt /></div>
                    <div className="chat__main">
                      <div className="chat__name chat__name--red">Nagibator <img src="/src/img/icons/cup-green.svg" alt /></div>
                      <div className="chat__txt">Может примеры других решений им показать? Тот же PundiX или то решение для алипэй, чью фотку я скидывал</div>
                    </div>
                    <div className="chat__time">12:07</div>
                  </div>
                </div>
              </div>
              <div className="register">
                {
                  this.props.user
                  ? <Widget />
                  : <div>
                      <div className="register__main">REGISTER FOR CHAT</div>
                      <button className="btn register__btn" onClick={() => this.openSignModal()}>Join</button>
                    </div>

                }
              </div>  
            </div>
          </div>                  
        </div>
      </div>

    )
  }
}

export default IndexPage        