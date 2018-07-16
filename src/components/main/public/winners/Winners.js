import React, { Component } from "react"
import {Cookies}            from "react-cookie"


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
			    <div className="greed__sec">
			      <div className="blc">
			        <div className="calendar">                                
			          <div className="slider calendar__slider">
			            <button className="btn slider__arrow slider__arrow--prev" title="Prev">Prev</button>
			            <div className="calendar__pagination">
			              <button className="btn calendar__pagination-item">2017</button>
			              <button className="btn calendar__pagination-item active">2018</button>
			              <button className="btn calendar__pagination-item">2019</button>
			            </div>
			            <div className="calendar__main">
			              <div className="calendar__item">JANUARY</div>
			              <div className="calendar__item">FEBRUARY</div>
			              <div className="calendar__item">MARCH</div>
			              <div className="calendar__item">APRIL</div>
			              <div className="calendar__item">MAY</div>
			              <div className="calendar__item">JUNE</div>
			              <div className="calendar__item active">JULY</div>
			              <div className="calendar__item">AUGUST</div>
			              <div className="calendar__item">SEPTEMBER</div>
			              <div className="calendar__item">OCTOBER</div>
			              <div className="calendar__item">NOVEMBER</div>
			              <div className="calendar__item">DECEMBER</div>
			              <div className="calendar__item calendar__item--long">SUPER JACKPOT 2018 — $6,000,000</div>
			            </div>
			            <button className="btn slider__arrow slider__arrow--next" title="Next">Next</button>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="greed__sec">
			      <div className="blc">
			        <div className="datepicker">
			          <div className="slider datepicker__slider">
			            <button className="btn slider__arrow slider__arrow--prev" title="Prev">Prev</button>
			            <div className="datepicker__main">
			              <div className="datepicker__table">
			                <table>
			                  <thead>
			                    <tr>
			                      <th className="datepicker__table-week">week</th>
			                      <th>sun</th>
			                      <th>mon</th>
			                      <th>tue</th>
			                      <th>wed</th>
			                      <th>thu</th>
			                      <th>fri</th>
			                      <th>sat</th>
			                    </tr>
			                  </thead>
			                  <tbody>
			                    <tr>
			                      <td className="datepicker__table-week">31</td>
			                      <td><span>1</span></td>
			                      <td><span>2</span></td>
			                      <td><span>3</span></td>
			                      <td><span>4</span></td>
			                      <td><span>5</span></td>
			                      <td><span>6</span></td>
			                      <td><span>7</span></td>
			                    </tr>
			                    <tr>
			                      <td className="datepicker__table-week">32</td>
			                      <td><span>8</span></td>
			                      <td><span>9</span></td>
			                      <td><span>10</span></td>
			                      <td><span>11</span></td>
			                      <td><span>12</span></td>
			                      <td><span>13</span></td>
			                      <td><span>14</span></td>
			                    </tr>
			                    <tr>
			                      <td className="datepicker__table-week">33</td>
			                      <td><span>15</span></td>
			                      <td><span className="active">16</span></td>
			                      <td><span>17</span></td>
			                      <td><span>18</span></td>
			                      <td><span>19</span></td>
			                      <td><span>20</span></td>
			                      <td><span>21</span></td>
			                    </tr>
			                    <tr>
			                      <td className="datepicker__table-week active">34</td>
			                      <td><span>22</span></td>
			                      <td><span>23</span></td>
			                      <td><span>24</span></td>
			                      <td><span>25</span></td>
			                      <td><span>26</span></td>
			                      <td><span>27</span></td>
			                      <td><span>28</span></td>
			                    </tr>
			                    <tr>
			                      <td className="datepicker__table-week">35</td>
			                      <td><span>29</span></td>
			                      <td><span>30</span></td>
			                      <td><span>31</span></td>
			                      <td><span>1</span></td>
			                      <td><span>2</span></td>
			                      <td><span>3</span></td>
			                      <td><span>4</span></td>
			                    </tr>
			                    <tr>
			                      <td className="datepicker__table-week">36</td>
			                      <td><span>5</span></td>
			                      <td><span>6</span></td>
			                      <td><span>7</span></td>
			                      <td><span>8</span></td>
			                      <td><span>9</span></td>
			                      <td><span>10</span></td>
			                      <td><span>11</span></td>
			                    </tr>
			                  </tbody>
			                </table>
			              </div>
			              <div className="datepicker__bar">
			                <div className="datepicker__hours">
			                  Hours <b>07</b>
			                </div>
			                <div className="datepicker__sliderbar">
			                  <div className="datepicker__progress" style={{width: '50%'}} />
			                  <div className="datepicker__tumbler" style={{left: '50%'}} />
			                  <div className="datepicker__hours-mark datepicker__hours-mark--1 active" />
			                  <div className="datepicker__hours-mark datepicker__hours-mark--2 active" />
			                  <div className="datepicker__hours-mark datepicker__hours-mark--3 active" />
			                  <div className="datepicker__hours-mark datepicker__hours-mark--4 active" />
			                  <div className="datepicker__hours-mark datepicker__hours-mark--5 active" />
			                  <div className="datepicker__hours-mark datepicker__hours-mark--6 active" />
			                  <div className="datepicker__hours-mark datepicker__hours-mark--7" />
			                  <div className="datepicker__hours-mark datepicker__hours-mark--8" />
			                  <div className="datepicker__hours-mark datepicker__hours-mark--9" />
			                  <div className="datepicker__hours-mark datepicker__hours-mark--10" />
			                  <div className="datepicker__hours-mark datepicker__hours-mark--11" />
			                  <div className="datepicker__hours-mark datepicker__hours-mark--12" />
			                  <div className="datepicker__hours-mark datepicker__hours-mark--13" />
			                </div>
			                <div className="datepicker__am-pm">
			                  <button className="btn datepicker__am-pm-btn active">am</button>
			                  <button className="btn datepicker__am-pm-btn">pm</button>
			                </div>
			              </div>
			            </div>
			            <button className="btn slider__arrow slider__arrow--next" title="Next">Next</button>
			          </div>
			        </div>
			      </div>
			    </div>
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
					                          <div className="table__user-nane">{i === 1 ? 'Nagibator' :  Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10)}</div>
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
					                          <div className="table__user-nane">{i === 3 ? 'CyberBigDaddy' :  Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10)}</div>
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