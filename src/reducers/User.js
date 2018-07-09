const  initialState = null

export default function userReducer( state = initialState, action) {
  let payload = action.payload
  switch (action.type ){
    case 'GOT_USER':
    	let emailVerification, 
    	{activated} = payload
    	activated == 1         ? emailVerification = 'verified' : emailVerification = 'unverified'
      let day   = payload.birth_day, 
          month = payload.birth_month;
      if (payload.birth_day){
        day   = day.toString(), 
        month = month.toString();
        day   = (day.length == 2) ? day : `0${day}`;
        month =  (month.length == 2) ? month : `0${month}`;
      }
      return Object.assign({}, state, {
        ...payload
      })
      break
    case 'CURRENCY_CHANGED':  
      return Object.assign({}, state, {
        ...state,
        balance: payload
      })
      break
    case 'USER_LOGOUT':
      console.log(payload)
      return null
      break    
    case 'GOT_AVATAR':
      return Object.assign({}, state, {
        ...state,
        isFetching: false,
        personal: {
          ...state.personal,
          avatar: payload
        }
      })
      break 
    default:
      return state
      break
  }
}
