import 'babel-polyfill'
import { Cookies } from 'react-cookie'
import * as reducers  from '../reducers'


const getProfile = (user, token, deviceId) => {
  let cookies = new Cookies;
  user.token = token || cookies.get('token')
  user.deviceId = deviceId  || cookies.get('deviceId');
  if (!cookies.get('refId')){
    cookies.set('refId',  user.id ** 2,  {expires: plusOneYear(), path: '/'})
  }
  return ({
    type: 'GOT_USER',
    payload: user
  })
}

const logout = () => {
  let cookies = new Cookies;
  cookies.remove('token', {path: '/'})
  cookies.remove('deviceId', {path: '/'})
  cookies.remove('refId', {path: '/'})
  cookies.remove('noMobileApp', {path: '/'})
  cookies.remove('utmData', {path: '/'})
  document.cookie = 'token=;domain=.backmy.cash;expires=Thu, 01 Jan 1970 00:00:00 GMT;'
	return {
		type: 'USER_LOGOUT'
	}
}



export {  getProfile, logout }

