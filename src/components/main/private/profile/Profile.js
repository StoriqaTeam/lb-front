import React, { Component } from "react"
import {Cookies}            from "react-cookie"
import css                  from './style.css'

class Profile extends Component {

 
  shareFB(){
    window.FB.ui({
      method: 'share',
      href: `http://yandex.ru/?ref=${Math.pow(this.props.user.id, 2)}`
    }, function(response){});
  }

  render(){

    return  (

      <div className="container profile">
        <div className="main__header profile__header">
          <h1>PROFILE</h1>
        </div>
        <div className="greed">
          <div className="greed__sec">
            <div className="blc">
              <div className="profile">
                <div className="profile__img"><img src="/src/img/example/ava-big.png" alt /></div>
                <div className="profile__main">
                  <div className="profile__title">Nickname:</div>
                  <div className="profile__name">CyberBigDaddy</div>
                  <div className="profile__balance">Balance: <strong>$1,274</strong></div>
                  <div className="profile__row">
                    <div className="profile__title profile__title--row">Wallet:</div>
                    <div className="profile__val">0x7cB57B5A97eAbe94205Cv63h67</div>
                  </div>
                  <div className="profile__row">
                    <div className="profile__title profile__title--row">Join date:</div>
                    <div className="profile__val">01 April 2018</div>
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
                  <div className="referal__form-row">
                    <input type="email" name="email" className="input referal__input" placeholder="Write an email of your friend" />
                    <button className="btn referal__form-submit" type="submit">Send</button>
                  </div>
                </form>
                <div className="referal__bar">
                  <div class="btn btn--facebook referal__facebook" 
                    onClick={()=> this.shareFB()}
                    data-href={`http://yandex.ru/?ref=${Math.pow(this.props.user.id, 2)}`} 
                    data-size='large'
                    data-layout="button">Share referral via Facebook
                  </div>
                  <button className="btn btn--twitter referal__twitter">Share referral via Twitter</button>
                  <button className="btn btn--green btn--copy referal__copy">Copy referral link</button>
                </div>
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
                    <tr>
                      <td>02 Feb 2018</td>
                      <td>$450,200</td>
                      <td>$500</td>
                      <td>$300</td>
                    </tr>
                    <tr>
                      <td>02 Feb 2018</td>
                      <td>$450,200</td>
                      <td>$500</td>
                      <td>$300</td>
                    </tr>
                    <tr>
                      <td>02 Feb 2018</td>
                      <td>$450,200</td>
                      <td>$500</td>
                      <td>$300</td>
                    </tr>
                    <tr>
                      <td>02 Feb 2018</td>
                      <td>$450,200</td>
                      <td>$500</td>
                      <td>$300</td>
                    </tr>
                    <tr>
                      <td>02 Feb 2018</td>
                      <td>$450,200</td>
                      <td>$500</td>
                      <td>$300</td>
                    </tr>
                    <tr>
                      <td>02 Feb 2018</td>
                      <td>$450,200</td>
                      <td>$500</td>
                      <td>$300</td>
                    </tr>
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
                    <tr>
                      <td>
                        <div className="table__user">
                          <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
                          <div className="table__user-nane">CyberBigDaddy</div>
                        </div>
                      </td>
                      <td>$120</td>
                      <td>$3.6</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="table__user">
                          <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
                          <div className="table__user-nane">CyberBigDaddy</div>
                        </div>
                      </td>
                      <td>$120</td>
                      <td>$3.6</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="table__user">
                          <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
                          <div className="table__user-nane">CyberBigDaddy</div>
                        </div>
                      </td>
                      <td>$120</td>
                      <td>$3.6</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="table__user">
                          <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
                          <div className="table__user-nane">CyberBigDaddy</div>
                        </div>
                      </td>
                      <td>$120</td>
                      <td>$3.6</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="table__user">
                          <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
                          <div className="table__user-nane">CyberBigDaddy</div>
                        </div>
                      </td>
                      <td>$120</td>
                      <td>$3.6</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="table__user">
                          <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
                          <div className="table__user-nane">CyberBigDaddy</div>
                        </div>
                      </td>
                      <td>$120</td>
                      <td>$3.6</td>
                    </tr>
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
