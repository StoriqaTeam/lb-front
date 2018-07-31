

const API_URL = ({
		'lb-front.stq.cloud': 'https://lb-back.stq.cloud',
		'localhost':      		'http://localhost:3000'
	})[window.location.hostname]

const GET_USER = async (code) => {
	let headers = new Headers()
	headers.append('X-Auth-Token', code)
	let googleProfile =	await fetch(`${API_URL}/api/v1/user/profile`,{
			method: 'GET',
			headers: new Headers({
				'X-Auth-Token': code,
				'Content-Type' : 'application/json'

			})
		})
		.then(
			res => {
				console.log(res)
				return res
			},
			err => err
		)
		.then(json => {
			console.log(json)
			//return json.id && json	
		})
}

export  {API_URL, GET_USER}
