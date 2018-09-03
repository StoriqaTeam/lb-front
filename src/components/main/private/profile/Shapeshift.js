import React, { Component } from "react"
import {Cookies}            from "react-cookie"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
 import Dropdown from 'react-dropdown'
 import  {DropdownButton, MenuItem} from  'react-bootstrap'
import 'react-dropdown/style.css'
import css                  from './style.css'

class Shapeshift extends Component {

  constructor(){
  	super()
  	this.state = {}
  }

	componentDidMount(){
		this.getCoins()
	}

	getCoins(){
		fetch('https://shapeshift.io/getcoins')
		.then(
			res => res.json(),
			err => err
		)
		.then(json => {
			console.log(json)
			this.setState({
				coins: json

			})
		})
	}

	makeTransaction(e, from, to, val = 100){
		e.preventDefault()
		fetch('https://cors.shapeshift.io/sendamount', {
			method: 'POST',
			headers: {
        "Content-Type": "application/x-www-form-urlencoded"
     },
			body: JSON.stringify({
				"amount": val , 
				"pair": `${from.toLowerCase()}_${to}`
			})
		})
			.then(
				res => {
					console.log(res)
					return res.json()
				},
				err => err
			)
			.then(json => {
				console.log(json)
				
			})
		}
	

  render(){

  	if (!this.state.coins){
  		return (<div>Requesting coins...</div>)
  	}

  						let top = ['BTC', 'DASH', 'XMR', 'LTC']


    return  (
					<Tabs>
					  <TabList className='currency__tab currency__tab-list_crypt'>
					  	{ Object.values(this.state.coins).filter(c => top.includes(c.symbol)).map(coin => {
									return(
										<Tab className='position-relative currency__tab_small'>
							      	<i className='position-relative currency__marker currency__marker_crypt'/>
							      	<img src={coin.imageSmall} className='currency__tab_img' alt />
							      </Tab>
							     )
					  		})
				
					  	}	
						<DropdownButton
				      title='select currency'
				    >
				    	{
				    		Object.values(this.state.coins).filter(c => !top.includes(c.symbol)).map(c =>{
					    		 return [
					    		 	<Tab>{c.symbol}</Tab>,
					    		 	<MenuItem eventKey={c.symbol} className='shapeshift__item'>{c.symbol}</MenuItem>
					    		 ]
					    	})
				    	}
				    </DropdownButton>  
				    </TabList>
						{ Object.values(this.state.coins).map(coin => {
								return(
					    		<TabPanel className='currency__tab-panel_small currency__gray'>
					    			<form className='shapeshift__form' onSubmit={(e) => this.makeTransaction(e, coin.symbol, 'eth', this.refs.amount.value)}>
											<div className='shapeshift__logo'>
												<img className='shapeshift__img' src={coin.image}/> 
												<img className='shapeshift__img' src='https://shapeshift.io/images/coins/ether.png'/>  

											</div>
											<input type='number'  ref='amount' className='shapeshift__number'/>
											<input type='submit' value='transfer'  className='shapeshift__submit'/>
					    			</form>
									</TabPanel>	
								)
							})
						} 		 
		    	</Tabs>	

		)
  }
}

  export default Shapeshift