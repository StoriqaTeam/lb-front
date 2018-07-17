

const API_URL = ({
		'lb-front.stq.cloud': 'https://lb-back.stq.cloud:3022',
		'localhost':      		'http://localhost:5000'
	})[window.location.hostname]

export  {API_URL}
