

const API_URL = ({
		'lb-front.stq.cloud': 'http://lb-back.stq.cloud',
		'localhost':      'http://localhost:5000'
	})[window.location.hostname]

export  {API_URL}