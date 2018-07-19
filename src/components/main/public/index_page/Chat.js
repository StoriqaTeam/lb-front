import React, { Component } from "react"
import {Cookies}            from "react-cookie"
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import {API_URL}            from './../../../../constants/constantsAPI' 

class Chat extends Component {

  constructor(){
    super()
    this.state = {
      messages: []
    }
  }

  openSignModal(){
    let button = document.getElementById('login')
    console.log(button, this.props)
    button && !this.props.user && button.click()
  }

  validateInput(){
    return this.refs.message.value
     ? this.refs.sendMessage.classList.remove('disabled')
     : this.refs.sendMessage.classList.add('disabled')
  }

  componentDidMount(){
    this.getChat()
  }


  async getChat(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')

    let user  = await fetch(`${API_URL}/api/v1/get_messages`,{
      method: 'GET'
    })
    .then(
      res => res.json(),
      err => err
    )
    .then (json => {
      this.setState({
        messages: json.message
      })
    })
  }

  async sendMessage(e){
    e.preventDefault()
    if (!this.refs.message.value){
      return
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')

    let user  = await fetch(`${API_URL}/api/v1/create_message`,{
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        user_name: this.props.user.name || `LuckyBlock user #${this.props.user.id}`, 
        content:   encodeURIComponent(this.refs.message.value),
        img:       this.props.user.img  || ''
      })
    })
    .then(
      res => res.json(),
      err => err
    )
    .then (json => {
      console.log(json)
      this.setState({
        messages: json.message
      })
    })
  }


  render(){
    let cookies = new Cookies,
    token       = cookies.get('token'),
    date        = new Date()

    return (
      <div className="greed__sec">
        { !this.props.user &&
          <div className="register">
            <div className="register__main">REGISTER FOR CHAT</div>,
            <button className="btn register__btn" onClick={() => this.openSignModal()}>Join</button>
          </div>
        }
        <div className="blc chat-blc">
          <div className="chat__wrap">
            <h3 className="chat__title">CHAT</h3>
            <div className="chat__list">
              { this.state.messages == 0
                ? <div className="chat__item">
                    There're no messages here
                  </div>
                : this.state.messages.reverse().map((message, i) => {
                    return (
                      <div className="chat__item" key={message.id}>
                        <div className="chat__icn"><img src={message.img ? decodeURIComponent(message.img) : "/src/img/example/ava.png"} alt /></div>
                        <div className="chat__main">
                          <div className="chat__name chat__name--green">{message.user_name} <img src="/src/img/icons/cup-yello.svg" alt /></div>
                          <div className="chat__txt">{decodeURIComponent(message.content)}</div>
                        </div>
                        <div className="chat__time">{message.created_at}</div>
                      </div>
                    )
                  })
              } 
            </div>
          </div>
          { this.props.user
            ? <form className="register" onSubmit={(e) => this.sendMessage(e)}>
                <Widget />
                <input type='text' ref='message' className='register__main' onChange={() => this.validateInput()} placeholder='Type your message' />
                <input className="btn register__btn disabled btn btn--green header-main__right-btn" ref='sendMessage' type='submit' value='SEND'/>
              </form>
            :  <div className="register">
                <div className="register__main">REGISTER FOR CHAT</div>
                <button className="btn register__btn" onClick={() => this.openSignModal()}>Join</button>
              </div>
          }
        </div>
      </div>                  
    )
  }
}

export default Chat        