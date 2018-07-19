import React, { Component } from "react"
import {Cookies}            from "react-cookie"
import {Link}               from 'react-router-dom'


class Footer extends Component {

	render(){
		let cookies = new Cookies,
		token = cookies.get('token');
		return 	(

<footer className="footer">
  <div className="container">
    <nav className="footer__menu">
      <ul>
        <li><a href="#">WHAT IS LUCKY BLOCK</a></li>
        <li><a href="#">TERMS AND CONDITIONS</a></li>
        <li><a href="#">COMPLAINTS</a></li>
        <li><a href="#">CONTACT US</a></li>
        <li><Link to="/faq">F.A.Q.</Link></li>
      </ul>
    </nav>
  </div>
  <div className="footer__bottom">
    <a href="#" className="footer__logo"><img src="/src/img/header/logo.svg" alt="Lucky Block" /></a>
    <div className="footer__soc">
      <a href="#" className="footer__soc-link footer__soc-link--twitter" target="_blank" title="twitter">twitter</a>
      <a href="#" className="footer__soc-link footer__soc-link--hz" target="_blank" title />
      <a href="#" className="footer__soc-link footer__soc-link--medium" target="_blank" title="medium">medium</a>
      <a href="#" className="footer__soc-link footer__soc-link--facebook" target="_blank" title="facebook">facebook</a>
      <a href="#" className="footer__soc-link footer__soc-link--telegram" target="_blank" title="telegram">telegram</a>
    </div>
    <div className="footer__copyright">LUCKY BLOCK (c) 2018. All rights reserved.</div>
  </div>
</footer>


		)			
	}
}

export default Footer