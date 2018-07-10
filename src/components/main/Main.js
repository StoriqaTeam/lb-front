import React, { Component } from "react"
import {Cookies}            from "react-cookie"
import Header                       from './../header/Header'
import HeaderInner                    from './../header/HeaderInner'

import Footer                       from './../footer/Footer'


class Main extends Component {

    render(){
        let cookies = new Cookies,
        token = cookies.get('token');
        return ([ 
    		 this.props.location.pathname == '/' 
                ? <Header {...this.props}/>
                : <HeaderInner {...this.props} />
            ,

		        <main className="main" id='main'>
		       			{this.props.children}
		        </main>,
		        <Footer />

        ])
    }
}

export default Main        