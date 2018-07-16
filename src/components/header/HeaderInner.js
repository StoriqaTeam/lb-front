import React, { Component } from "react"
import {Cookies}            from "react-cookie"
import {Link}               from 'react-router-dom'
import LoginBlock           from './../elements/login_block/LoginBlock'
import Popup                from './../elements/popup/Popup'
import css                  from './style.css'

class HeaderInner extends Component {

	constructor(){
		super()
		this.state = {}
	}

	render(){
		let cookies = new Cookies,
		token = cookies.get('token');
		return 	(
			<header className="header">
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
			            <li><a className='disabled'>RULES</a></li>
			            <li><Link to="/winners">WINNERS</Link></li>
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
			  </div>
			</header>


		)			
	}
}

export default HeaderInner







