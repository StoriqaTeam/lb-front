import React, { Component } from "react"
import {Cookies}            from "react-cookie"
import css from './style.css'

class Calendar extends Component {

	constructor(){
		super()
		let date = new Date()
		this.state = {
			year: date.getFullYear(),
			month: date.getMonth() + 1,
			week:  null,
			day:   date.getDate()
		}
	}

 	update(newProps){
 		this.setState({
 			...this.state,
 			...newProps
 		})
 		this.props.refresh()
 	}

	render(){
    let cookies = new Cookies,
    token = cookies.get('token'),
    date  = new Date(this.state.year, this.state.month - 1),
    nextDate = new Date(this.state.year, this.state.month ),
    months = [ 'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'	],
  	longMonth = ((this.state.month <= 7) && (this.state.month % 2 != 0)) || ((this.state.month >= 8) && (this.state.month % 2 == 0)),
  	february = this.state.month == 2,
  	leapFebruary = this.state.month == 2 && this.state.year % 4 == 0,
  	getInitialDay = date.getDay(),
  	getNextDay = nextDate.getDay(),
  	daysNum = longMonth ? 31 : february ? leapFebruary ? 29 : 28: 30,
  	weeksNum,
  	counter = 0
  	switch (true){
  		case daysNum == 28 && getInitialDay == 0:
  			weeksNum = 4
  			break
  		case daysNum == 28 && getInitialDay != 0:
  		case daysNum == 30 && getInitialDay <= 5:
  		case daysNum == 31 && getInitialDay < 5:
  			weeksNum = 5
  			break
  		default:
  			weeksNum = 6		
  	}
  	console.log(getNextDay)
    return(
			[
				<div className="greed__sec">
			      <div className="blc">
			        <div className="calendar">                                
			          <div className="slider calendar__slider">
			            <button className="btn slider__arrow slider__arrow--prev" title="Prev">Prev</button>
			            <div className="calendar__pagination">
			              <button className="btn calendar__pagination-item" onClick={() => this.update({year: this.state.year - 1})}>{this.state.year - 1}</button>
			              <button className="btn calendar__pagination-item active">{this.state.year}</button>
			              <button className="btn calendar__pagination-item" onClick={() => this.update({year: this.state.year + 1})}>{this.state.year + 1}</button>
			            </div>
			            <div className="calendar__main">
			            	{
			            		months.map((month, i) => {
				              	return (
					              	<div 
					              		className={`calendar__item ${this.state.month == months.indexOf(months[i + 1]) ? 'active' : ''}`} 
					              		onClick={() =>this.update({month:  months.indexOf(months[i + 1]), day: 1})}>
					              		{months[i]}
					              	</div>
					              )
				            	})
				            }
			              <div className="calendar__item calendar__item--long">SUPER JACKPOT {date.getFullYear()} — ${this.state.year - 2001},000,000</div>
			            </div>
			            <button className="btn slider__arrow slider__arrow--next" title="Next">Next</button>
			          </div>
			        </div>
			      </div>
			    </div>,
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
			                    {
				                    Array(weeksNum).fill(0).map((week, weekIndex )=> {
															
				                    	return (
					                    	<tr>
						                      <td 
						                      	className={`datepicker__table-week ${this.state.week === weekIndex  ? 'active' : ''}`} 
						                      	onClick={() => this.update({week: weekIndex, day: null})}>
						                      	{weekIndex + 1}
						                      </td>
						                      { Array(7).fill(0).map((day, i) => {

																			day = (weekIndex == 0 &&  i < getInitialDay) ? '' : counter - 1
						                      		if (day || day === 0){
																				counter += 1
																			}
																			let thisDay = counter
																			let lastDay = (weekIndex === weeksNum -1 && counter > daysNum )
																			console.log(lastDay, weeksNum, weekIndex, i, getNextDay)
						                      		return (
						                      			<td onClick={() => this.update({day: thisDay, week: null })} className={lastDay || !counter ? 'disabled' : ''}>
						                      				<span className={this.state.day === counter ? 'active' : ''} >
						                      					{counter && !lastDay ? counter : ''}
						                      				</span>
						                      			</td>
						                      		)
						                      	})
						                   		}	
						                    </tr>
															)
				                   	})
			                    }
			                  </tbody>
			                </table>
			              </div>
			              <div className="datepicker__bar">
			                <div className="datepicker__hours">
			                  Hours <b>07</b>
			                </div>
			                  <input type="range" name="points" min="0" max="10" id='lol'/>
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
			]
    )
  }
}

export default Calendar