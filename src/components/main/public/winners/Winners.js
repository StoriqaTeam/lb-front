import React, { Component } from "react"
import {Cookies}            from "react-cookie"
import Calendar             from './Calendar'


class Winners extends Component {

render(){
    let cookies = new Cookies,
    token = cookies.get('token'),
    date  = new Date(),
    month  = date.getMonth() + 1

    return(
			<div className="container">
			  <div className="main__header">
			    <h1>PROFILE</h1>
			  </div>
			  <div className="greed">
			   	<Calendar refresh={()=> this.setState({refreshed: true})} />
			    <div className="greed__sec greed__sec--long">
			      <h2 className="greed__sec-title">Winners</h2>
			      <div className="blc blc--table">
			        <div className="winners">
			          <div className="winners__header">
			            <h3 className="winners__title">ROUND STATISTICS</h3>
			            <div className="winners__bar">
			              <div className="winners-counters">
			                <div className="winners-counter">
			                  <div className="winners-counter__name">Total players:</div>
			                  <div className="winners-counter__val">4,734</div>
			                </div>
			                <div className="winners-counter">
			                  <div className="winners-counter__name">Value of jackpot:</div>
			                  <div className="winners-counter__val">8,323,455 ETH</div>
			                </div>
			                <div className="winners-counter">
			                  <div className="winners-counter__name">Date of the draw:</div>
			                  <div className="winners-counter__val">{`${date.getFullYear()}.${month < 10 && 0}${month}.${date.getDate()}`}</div>
			                </div>
			              </div>
			            </div>
			            <h3 className="winners__title">WINNERS LIST</h3>
			            <div className="winners__tables">
			              <div className="table-overlay">
			                <table className="table">
			                  <thead>
			                    <tr>
			                      <th className="table__numb">#</th>
			                      <th><span>Nickname</span></th>
			                      <th><span>Bet</span></th>
			                      <th><span>Win rate</span></th>
			                      <th><span>Prize</span></th>
			                    </tr>
			                  </thead>
			                  <tbody>
  												{Array(5).fill(0).map((item, i) =>  {
	                          let percent = (Math.random()  * (10 - 0.1)  + 10).toFixed(0),
	                          cash        = (Math.random()  * (1000 - 50) + 50).toFixed(0),
	                          won         = Number(cash) + Number((cash / 100) * percent)
	                          return (
	                     			  <tr>
					                      <td className="table__numb">#{i + 1}</td>
					                      <td>
					                        <div className="table__user">
					                          <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
					                          <div className="table__user-nane">LuckyBlock user {(Math.random()  * (1000 - 50)).toFixed(0)}</div>
					                        </div>
					                      </td>
					                      <td>${cash}</td>
					                      <td>{percent}%</td>
					                      <td>${won.toFixed(0)}</td>
					                    </tr>
	                          )
	                        })}                                                   
			                  </tbody>
			                </table>
			              </div>
			              <div className="table-overlay">
			                <table className="table">
			                  <thead className='table__thead_desktop'>
			                    <tr>
			                      <th className="table__numb">#</th>
			                      <th><span>Nickname</span></th>
			                      <th><span>Bet</span></th>
			                      <th><span>Win rate</span></th>
			                      <th><span>Prize</span></th>
			                    </tr>
			                  </thead>
			                  <tbody>
  												{Array(5).fill(0).map((item, i) =>  {
	                          let percent = (Math.random()  * (10 - 0.1)  + 10).toFixed(0),
	                          cash        = (Math.random()  * (1000 - 50) + 50).toFixed(0),
	                          won         = Number(cash) + Number((cash / 100) * percent)
	                          return (
	                     			  <tr>
					                      <td className="table__numb">#{i + 6}</td>
					                      <td>
					                        <div className="table__user">
					                          <div className="table__user-icn"><img src="/src/img/example/ava.png" alt /></div>
					                          <div className="table__user-nane">LuckyBlock user {(Math.random()  * (1000 - 50)).toFixed(0)}</div>
					                        </div>
					                      </td>
					                      <td>${cash}</td>
					                      <td>{percent}%</td>
					                      <td>${won.toFixed(0)}</td>
					                    </tr>
	                          )
	                        })}                                                    
			                  </tbody>
			                </table>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
    )
  }
}

export default Winners