import React, {Component} from 'react'

      import { connect }            from 'react-redux'
import { bindActionCreators }    from 'redux'
import * as userActions          from './../../../actions/userActions'

import style              from './style.css'

class Logout extends Component {

 

  render(){

  	return(
			<div className='logout'><a  className='logout__button' onClick={() => this.props.userActions.logout() }>EXIT</a></div>
    )
  }
}

			

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    userActions:   bindActionCreators(userActions,   dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)

