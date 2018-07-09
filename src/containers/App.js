import React, { Component } from "react"
import {Cookies}            from "react-cookie"
import {  BrowserRouter }   from 'react-router-dom';
import { connect }            from 'react-redux'
import { bindActionCreators }    from 'redux'
import * as userActions          from './../actions/userActions'
import Routes               from './routes'
import css                  from './style.css'

class App extends Component {

	
	


	render(){
		let cookies = new Cookies,
		token = cookies.get('token');
		return (
			<BrowserRouter>
				<Routes updateApp={() => this.forceUpdate()}/>
			</BrowserRouter>
				
		)
	}


}


function mapStateToProps(state) {
  return {
    user:   state.userReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions:   bindActionCreators(userActions,   dispatch)
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App)

