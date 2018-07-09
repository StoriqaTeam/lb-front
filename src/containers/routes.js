import React, { Component }         from 'react'
import {  Route, Switch, Redirect } from 'react-router-dom'
import { withCookies, Cookies }     from 'react-cookie'
import FBRedirect                   from './../components/stuff/FBRedirect'
import Main                         from './../components/main/Main'
import IndexPage                         from './../components/main/public/index_page/IndexPage'


class Routes extends Component {
  render(){
    let cookies = new Cookies;
    return (
    	<Switch>
    		<Main>
    			< Route path='/'  render={(props)  => < IndexPage  {...props}  {...this.props} /> }  key='IndexPage'/ >
	 				< Route path='/fb'  render={(props)  => < FBRedirect  {...props}  {...this.props} /> }  key='FBRedirect'/ >
	 				< Route path='* '   render={(props)  => '404' }/ >   	
    		</Main>
    	</Switch>
    )
  }
}

export default Routes;

//todo: разобраться с лишними props
//             < Route exact path='/'                          render={(props)  => < IndexPage      {...props}  {...this.props} /> }                                                          key='IndexPage'/ >
//import ScrollToTop                  from './ScrollToTop'
// import { securityPolicy, 
//          securityPolicyExtension }  from './../constants/constantsApp'
