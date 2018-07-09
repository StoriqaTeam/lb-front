import React, { Component } from "react"
import {Cookies}            from "react-cookie"


class IndexPage extends Component {

    render(){
        let cookies = new Cookies,
        token = cookies.get('token');
        return (
          <div className="container">
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
                        <tr>
                          <td>
                            <div className="table__user">
                              <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
                              <div className="table__user-nane">CyberBigDaddy</div>
                            </div>
                          </td>
                          <td>$120</td>
                          <td>15%</td>
                          <td><div className="table__circle table__circle--viol" /></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table__user">
                              <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
                              <div className="table__user-nane">CyberBigDaddy</div>
                            </div>
                          </td>
                          <td>$120</td>
                          <td>15%</td>
                          <td><div className="table__circle table__circle--green" /></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table__user">
                              <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
                              <div className="table__user-nane">CyberBigDaddy</div>
                            </div>
                          </td>
                          <td>$120</td>
                          <td>15%</td>
                          <td><div className="table__circle table__circle--blue" /></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table__user">
                              <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
                              <div className="table__user-nane">CyberBigDaddy</div>
                            </div>
                          </td>
                          <td>$120</td>
                          <td>15%</td>
                          <td><div className="table__circle table__circle--black" /></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table__user">
                              <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
                              <div className="table__user-nane">CyberBigDaddy</div>
                            </div>
                          </td>
                          <td>$120</td>
                          <td>15%</td>
                          <td><div className="table__circle table__circle--viol" /></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table__user">
                              <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
                              <div className="table__user-nane">CyberBigDaddy</div>
                            </div>
                          </td>
                          <td>$120</td>
                          <td>15%</td>
                          <td><div className="table__circle table__circle--green" /></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table__user">
                              <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
                              <div className="table__user-nane">CyberBigDaddy</div>
                            </div>
                          </td>
                          <td>$120</td>
                          <td>15%</td>
                          <td><div className="table__circle table__circle--blue" /></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table__user">
                              <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
                              <div className="table__user-nane">CyberBigDaddy</div>
                            </div>
                          </td>
                          <td>$120</td>
                          <td>15%</td>
                          <td><div className="table__circle table__circle--black" /></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table__user">
                              <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
                              <div className="table__user-nane">CyberBigDaddy</div>
                            </div>
                          </td>
                          <td>$120</td>
                          <td>15%</td>
                          <td><div className="table__circle table__circle--viol" /></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table__user">
                              <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
                              <div className="table__user-nane">CyberBigDaddy</div>
                            </div>
                          </td>
                          <td>$120</td>
                          <td>15%</td>
                          <td><div className="table__circle table__circle--green" /></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table__user">
                              <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
                              <div className="table__user-nane">CyberBigDaddy</div>
                            </div>
                          </td>
                          <td>$120</td>
                          <td>15%</td>
                          <td><div className="table__circle table__circle--blue" /></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table__user">
                              <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
                              <div className="table__user-nane">CyberBigDaddy</div>
                            </div>
                          </td>
                          <td>$120</td>
                          <td>15%</td>
                          <td><div className="table__circle table__circle--black" /></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table__user">
                              <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
                              <div className="table__user-nane">CyberBigDaddy</div>
                            </div>
                          </td>
                          <td>$120</td>
                          <td>15%</td>
                          <td><div className="table__circle table__circle--viol" /></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table__user">
                              <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
                              <div className="table__user-nane">CyberBigDaddy</div>
                            </div>
                          </td>
                          <td>$120</td>
                          <td>15%</td>
                          <td><div className="table__circle table__circle--green" /></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table__user">
                              <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
                              <div className="table__user-nane">CyberBigDaddy</div>
                            </div>
                          </td>
                          <td>$120</td>
                          <td>15%</td>
                          <td><div className="table__circle table__circle--blue" /></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table__user">
                              <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
                              <div className="table__user-nane">CyberBigDaddy</div>
                            </div>
                          </td>
                          <td>$120</td>
                          <td>15%</td>
                          <td><div className="table__circle table__circle--black" /></td>
                        </tr>
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
                    <div className="register__main">REGISTER FOR CHAT</div>
                    <button className="btn register__btn">Join</button>
                  </div>
                </div>
              </div>                  
            </div>
          </div>

        )
    }
}

export default IndexPage        