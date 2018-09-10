import React, { Component } from "react"
import {Cookies}            from "react-cookie"
import {Link}               from 'react-router-dom'
import {copyToClipboard}    from './../../constants/constantsApp' 
import LoginBlock           from './../elements/login_block/LoginBlock'
import Popup                from './../elements/popup/Popup'
import Logout               from './../elements/logout/Logout'
import VerifyEmail          from './../elements/verify_email/VerifyEmail'
import css                  from './style.css'



class Header extends Component {

	constructor(){
		super()
		this.state = {
			jackpot: 'week'
		}
	}

	toggleMenu(){
    this.refs.toggleMenu.classList.toggle('open');
    this.refs.menuList.classList.toggle('open');
	}

	copy(id){
		var copyText = document.getElementById("copyAddress");
		copyText.select();
		document.execCommand("copy");
		this.refs[id].innerHTML = 'ADDRESS COPIED'
		window.setTimeout(()=> 		this.refs[id].innerHTML = 'COPY ADDRESS', 3000)
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
		let jackpots = {
			hour:  '10,000', 
			day:   '50,000', 
			week:  '300,000',
			month: '1,000,000', 
			year:  '100,000,000', 
			super: '1,000,000,000'
		}
		return 	(
			<header className="header header--main">
			  <div className="container">
			    <div className="header__wrap">
			      <a href="/" className="logo"><img src="/src/img/header/logo.svg" alt="Lucky Block" /></a>
			      <a href="/" className="logo-mob"><img src="/src/img/header/logo-mob.svg" alt="Lucky Block" /></a>
			      <button className="btn mob-menu" ref='toggleMenu' onClick={() => this.toggleMenu()}><span />
			        <span />
			        <span /></button>
			      <div className="header__bar">
			        <nav className="header__menu" id="js-menu" ref='menuList' onClick={() => this.toggleMenu()}>
			          <ul>
			            <li><Link to='/faq'>F.A.Q.</Link></li>
			            <li><Link to='/rules'>RULES</Link></li>
			            <li><Link to='/winners'>WINNERS</Link></li>
			            {this.props.user && <li className='header__logout'><Logout /></li>}
			          </ul>                            
			        </nav>
			        { this.props.user
			        	?	[
			        			<Link to='/profile' class="user-btn">
									  	<img src={this.props.user && this.props.user.avatar ? decodeURIComponent(this.props.user.avatar) : "/src/img/example/ava-big.png"}/>
										</Link>,
										<Logout />

									]

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
			            <div className="header-main__left-name"> LuckyBlock user {(Math.random()  * (1000 - 50)).toFixed(0)}</div>
			            <div className="header-main__left-code">1KoX6AA5VTdbBTkw27YEqKfAtTe</div>
			          </div>                            
			        </div>
			        <div className="header-main__left-row">
			          <div className="header-main__left-col">
			            <div className="header-main__left-col-name">JACKPOT</div>
			            <div className="header-main__left-col-val">${(Math.random()  * (10 - 1)).toFixed(0)},000</div>
			          </div>
			          <div className="header-main__left-col">
			            <div className="header-main__left-col-name">WINRATE</div>
			            <div className="header-main__left-col-val">{(Math.random()  * (50 - 10) + 10).toFixed(0)}%</div>
			          </div>
			        </div>
			      </div>
			      <div className="header-main__middle">
			        <div className="header-main__slider">
			                          {this.state.jackpot != 'hour' &&

                            <button className="btn header-main__prev" title="Prev" onClick={() => this.setState({jackpot: Object.keys(jackpots)[Object.keys(jackpots).indexOf(this.state.jackpot) - 1]})}>Prev</button>
                          }
			          <div className="header-main__slide">
			            <div className="header-main__slide-current"><img src="/src/img/header/current.svg" alt="Current" /></div>
			            <div className="header-main__slide-jackpot"><img className='jackpot' src={`/src/img/header/${this.state.jackpot}.png`} alt="Week Jackpot" /></div>
			            <div className="header-main__slide-s600k"><span>$</span>{ jackpots[this.state.jackpot]}</div>
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
                  {this.state.jackpot != 'super' &&
                  	<button className="btn header-main__next" title="Next" onClick={() => this.setState({jackpot: Object.keys(jackpots)[Object.keys(jackpots).indexOf(this.state.jackpot) + 1]})}>Next</button>
                  }
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
			              	<input type='text' style={{opacity: 0, height: 0}} id='copyAddress' value='3fc2e9a9-7f6d-4f0d-b201-df103e7ef240'/>
			              </div>
			            </div>
			            <button className="btn btn--green header-main__right-btn" ref='copyAddress' onClick={() => this.copy('copyAddress')}>
			            	COPY ADDRESS
			            </button>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			  <img className='jackpot' src={`/src/img/header/year.png`} alt="Week Jackpot" className='d-none' />
			  <img className='jackpot' src={`/src/img/header/month.png`} alt="Week Jackpot" className='d-none' />
			  <img className='jackpot' src={`/src/img/header/week.png`} alt="Week Jackpot" />
			  <img className='jackpot' src={`/src/img/header/day.png`} alt="Week Jackpot"  className='d-none'/>
			  <img className='jackpot' src={`/src/img/header/hour.png`} alt="Week Jackpot"  className='d-none'/>
			  <img className='jackpot' src={`/src/img/header/super.png`} alt="Week Jackpot" className='d-none' />
				{ this.props.user && <VerifyEmail user={this.props.user} /> }
			</header>

		)			
	}
}

export default Header


			          // <button className="btn header-main__prev" title="Prev">Prev</button>

			          // <button className="btn header-main__next" title="Next">Next</button>
