import React, {Component} from 'react'
import style              from './style.css'

class SignIn extends Component {

 

  render(){

  	return(<div className="container-login100" style={{backgroundImage: 'url("/src/img/bg-01.jpg")'}}>
			    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
			      <form className="login100-form validate-form" autoComplete='off'>
			        <span className="login100-form-title p-b-49">
			          Login
			        </span>
			        <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
			          <span className="label-input100">Email</span>
			          <input className="input100" type="text" name="username" placeholder="Type your email"  required autoComplete="off"/>
			          <span className="focus-input100" data-symbol="" />
			        </div>
			        <div className="wrap-input100 validate-input" data-validate="Password is required">
			          <span className="label-input100">Password</span>
			          <input className="input100" type="password" name="pass" placeholder="Type your password" required  autoComplete="off"/>
			          <span className="focus-input100" data-symbol="" />
			        </div>
			        <div className="text-right p-t-8 p-b-31">

			        </div>
			        <div className="container-login100-form-btn">
			          <div className="wrap-login100-form-btn">
			            <div className="login100-form-bgbtn" />
			            <button className="login100-form-btn">
			              Login
			            </button>
			          </div>
			        </div>
			    
			        <div className="flex-col-c p-t-155">
			          <span className="txt1 p-b-17">
			            or sign up
			          </span>
			          <a href="#" className="txt2" onClick={() => this.props.switch()}>
			            Sign up
			          </a>
			        </div>
			      </form>
			    </div>
			  </div>
			  )
			}
}
			export default SignIn