import React, { Component } from "react"
import {Cookies}            from "react-cookie"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import css                  from './style.css'

class CurrencyIframe extends Component {

  copy(id){
    var copyText = document.getElementById(id);
    copyText.select();
    document.execCommand("copy");
    this.refs[id].innerHTML = 'Address copied'
    window.setTimeout(()=>    this.refs[id].innerHTML = 'Copy address', 3000)
  }


   open_widget(a, e) {
      e.preventDefault();
      var link = a.href;
      window.open(link, 'Changelly', 'width=600,height=470,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=0,left=0,top=0');
      return false;
  }


  render(){
    return  (
		  <Tabs className='currency__tabs'>
		    <TabList className='currency__tab_top'>
		      <Tab className='currency__tab_li currency__tab_curr'>Fiat <img src="/src/img/profile/card.png" alt /></Tab>
		      <Tab className='currency__tab_li currency__tab_crypt'>Cryptocurrency <img src="/src/img/profile/coin.png" alt /></Tab>
		    </TabList>

		    <TabPanel className='currency__tab-panel'>
					<Tabs>
					  <TabList className='currency__tab'>
				      <Tab className='position-relative currency__tab_small  currency__tab_curr_small'><i className='position-relative currency__marker'/>EUR</Tab>
				      <Tab className='position-relative currency__tab_small  currency__tab_curr_small'><i className='position-relative currency__marker'/>USD</Tab>
				    </TabList>

		    		<TabPanel className='currency__tab-panel_small'>



						<a className='currency__exchange' target='_blank' href="https://changelly.com/widget/v1?auth=email&from=EUR&to=ETH&merchant_id=aba39711a80e&address=&amount=1&ref_id=aba39711a80e&color=00cf70">
						  <img src="https://changelly.com/pay_button_exchange.png" alt="Changelly" />
						</a>


							<iframe src="https://changelly.com/widget/v1?auth=email&from=EUR&to=ETH&merchant_id=17cd70c57129&address=0xfa06f1dc467f3398374b59afe92103580115877d&amount=50&ref_id=17cd70c57129&color=48d9a7" width={600} height={400} className="changelly currency__iframe" scrolling="no" style={{overflowY: 'hidden', border: 'none'}}>
							  Can't load widget
							</iframe>	
						</TabPanel>	
						<TabPanel className='currency__tab-panel_small'>

						<a className='currency__exchange' target='_blank' href="https://changelly.com/widget/v1?auth=email&from=USD&to=ETH&merchant_id=aba39711a80e&address=&amount=1&ref_id=aba39711a80e&color=00cf70">
						  <img src="https://changelly.com/pay_button_exchange.png" alt="Changelly" />
						</a>
							<iframe src="https://changelly.com/widget/v1?auth=email&from=USD&to=ETH&merchant_id=17cd70c57129&address=0xfa06f1dc467f3398374b59afe92103580115877d&amount=50&ref_id=17cd70c57129&color=48d9a7" width={600} height={400} className="changelly currency__iframe" scrolling="no" style={{overflowY: 'hidden', border: 'none'}}>
							  Can't load widget
							</iframe>
		    		</TabPanel>	  
		    	</Tabs>	  
				</TabPanel>
				<TabPanel className='currency__tab-panel'>
					<Tabs>
					  <TabList className='currency__tab currency__tab-list_crypt'>
				      <Tab className='position-relative currency__tab_small'>
				      	<i className='position-relative currency__marker currency__marker_crypt'/>
				      	<img src="/src/img/profile/bit.png" className='currency__tab_img' alt />
				      </Tab>
				      <Tab className='position-relative currency__tab_small'>
				      	<i className='position-relative currency__marker currency__marker_crypt'/>
				      	<img src="/src/img/profile/cash.png"className='currency__tab_img'  alt />
				      </Tab>
				      <Tab className='position-relative currency__tab_small'>
				      	<i className='position-relative currency__marker currency__marker_crypt'/>
				      	<img src="/src/img/profile/dash.png"className='currency__tab_img'  alt />
				      </Tab>				      
				    </TabList>

		    		<TabPanel className='currency__tab-panel_small currency__gray'>
							<img src="/src/img/profile/code.png"className='currency__tab_img'  alt />
							<div className='currency__text'>Contract address to participate:</div>
							<div className='currency__address'><b>3fc2e9a9-7f6d-4f0d-b201-df103e7ef240</b></div>
							<button class="btn btn--green profile__btn currency__btn" ref='copyBitcoin'onClick={()=> this.copy('copyBitcoin')}>Copy address</button>
              <input style={{opacity: 0, height: 0}} id='copyBitcoin' value='3fc2e9a9-7f6d-4f0d-b201-df103e7ef240'/>
						</TabPanel>	
						<TabPanel className='currency__tab-panel_small currency__gray'>
						<img src="/src/img/profile/code.png"className='currency__tab_img'  alt />
							<div className='currency__text'>Contract address to participate:</div>
							<div className='currency__address'><b>3fc2e9a9-7f6d-4f0d-b201-df103e7ef241</b></div>
							<button class="btn btn--green profile__btn currency__btn" ref='copyCash'onClick={()=> this.copy('copyCash')}>Copy address</button>
              <input style={{opacity: 0, height: 0}} id='copyCash' value='3fc2e9a9-7f6d-4f0d-b201-df103e7ef241'/>
		    		</TabPanel>	 
						<TabPanel className='currency__tab-panel_small currency__gray'>
						<img src="/src/img/profile/code.png"className='currency__tab_img'  alt />
							<div className='currency__text'>Contract address to participate:</div>
							<div className='currency__address'><b>3fc2e9a9-7f6d-4f0d-b201-df103e7ef242</b></div>
							<button class="btn btn--green profile__btn currency__btn" ref='copyDash'onClick={()=> this.copy('copyDash')}>Copy address</button>
              <input style={{opacity: 0, height: 0}} id='copyDash' value='3fc2e9a9-7f6d-4f0d-b201-df103e7ef242'/>
		    		</TabPanel>		    		 
		    	</Tabs>	
				 </TabPanel>
		  </Tabs>
		)
  }
}

  export default CurrencyIframe