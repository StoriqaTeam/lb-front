import React, { Component } from "react"
import {Cookies}            from "react-cookie"
import {Link}               from 'react-router-dom'
import LoginBlock           from './../elements/login_block/LoginBlock'
import Popup                from './../elements/popup/Popup'
import css                  from './style.css'

class Header extends Component {

	constructor(){
		super()
		this.state = {}
	}

	componentDidMount(){
		let component = this,
		{minutes, seconds} = this.refs
		window.setInterval(() => {
			let content = minutes.innerHTML != '00' ? minutes.innerHTML - 1  : '59'
			minutes.innerHTML = content < 10 ? '0' + content : content
		}, 60000)
		window.setInterval(() => {
			let content = seconds.innerHTML != '00' ? seconds.innerHTML - 1  : '59'
			seconds.innerHTML = content < 10 ? '0' + content : content
		}, 1000)
	}

	render(){
		let cookies = new Cookies,
		token = cookies.get('token');
		return 	(
			<header className="header header--main">
			  <div className="container">
			    <div className="header__wrap">
			      <a href="/" className="logo"><img src="/src/img/header/logo.svg" alt="Lucky Block" /></a>
			      <a href="/" className="logo-mob"><img src="/src/img/header/logo-mob.svg" alt="Lucky Block" /></a>
			      <button className="btn mob-menu" onclick="menuOpen(this);"><span />
			        <span />
			        <span /></button>
			      <div className="header__bar">
			        <nav className="header__menu" id="js-menu">
			          <ul>
			            <li><a className='disabled'>F.A.Q.</a></li>
			            <li><a  className='disabled'>RULES</a></li>
			            <li><Link to='/winners'>WINNERS</Link></li>
			          </ul>                            
			        </nav>
			        { this.props.user
			        	?	<Link to='/profile' class="user-btn">
										<img src="/src/img/example/ava.png"/>
									</Link>

			        	: [<a  className="user-btn" onClick={() => this.setState({popup: true})} id='login'/>,
				        	this.state.popup &&
				        		<Popup closePopup={() => this.setState({popup: false})} scrollable>
				        			<LoginBlock  closePopup={() => this.setState({popup: false})}/>
				        		</Popup>
				        	]
			        }
			      </div>
			    </div>
			    <div className="header-main">
			      <div className="header-main__left">
			        <div className="header-main__left-title">PREVIOUS WINNER</div>
			        <div className="header-main__left-wrap">
			          <div className="header-main__left-icn"><img src="/src/img/example/ava.png" alt /></div>
			          <div className="header-main__left-main">
			            <div className="header-main__left-name">Cryptozadrot16</div>
			            <div className="header-main__left-code">1KoX6AA5VTdbBTkw27YEqKfAtTe</div>
			          </div>                            
			        </div>
			        <div className="header-main__left-row">
			          <div className="header-main__left-col">
			            <div className="header-main__left-col-name">JACKPOT</div>
			            <div className="header-main__left-col-val">$1,000</div>
			          </div>
			          <div className="header-main__left-col">
			            <div className="header-main__left-col-name">WINRATE</div>
			            <div className="header-main__left-col-val">32%</div>
			          </div>
			        </div>
			      </div>
			      <div className="header-main__middle">
			        <div className="header-main__slider">
			          <button className="btn header-main__prev" title="Prev">Prev</button>
			          <div className="header-main__slide">
			            <div className="header-main__slide-current"><img src="/src/img/header/current.svg" alt="Current" /></div>
			            <div className="header-main__slide-jackpot"><img src="/src/img/header/WeekJackpot.svg" alt="Week Jackpot" /></div>
			            <div className="header-main__slide-s600k"><span>$</span> 600,000,000</div>
			            <div className="header-main__timer">
			              <div className="header-main__timer-title">NEXT ROUND IN</div>
			              <div className="header-main__timer-wrap">
			                <div className="header-main__timer-item">
			                  <div className="header-main__timer-name">DAYS</div>
			                  <div className="header-main__timer-val">2</div>
			                </div>
			                <div className="header-main__timer-dotes">:</div>
			                <div className="header-main__timer-item">
			                  <div className="header-main__timer-name">HOURS</div>
			                  <div className="header-main__timer-val">14</div>
			                </div>
			                <div className="header-main__timer-dotes">:</div>
			                <div className="header-main__timer-item">
			                  <div className="header-main__timer-name">MINUTES</div>
			                  <div className="header-main__timer-val"  ref='minutes'>59</div>
			                </div>
			                <div className="header-main__timer-dotes">:</div>
			                <div className="header-main__timer-item">
			                  <div className="header-main__timer-name" >SECONDS</div>
			                  <div className="header-main__timer-val" ref='seconds'>59</div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <button className="btn header-main__next" title="Next">Next</button>
			        </div>
			      </div>
			      <div className="header-main__right">
			        <div className="header-main__right-wrap">
			          <div className="header-main__right-qr"><img src="/src/img/header/qr.svg" alt /></div>
			          <div className="header-main__right-main">
			            <div className="header-main__right-top">
			              <div className="header-main__right-title">GET YOUR LUCK!</div>
			              <div className="header-main__right-code">
			                Contract address to participate:<span>3fc2e9a9-7f6d-4f0d-b201-df103e7ef240</span>
			              </div>
			            </div>
			            <button className="btn btn--green header-main__right-btn">COPY ADDRESS</button>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</header>

		)			
	}
}

export default Header