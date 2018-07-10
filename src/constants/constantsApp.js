

 const  getCodeFromUrl = function( prop, separator = '#' )  {
	  var params = {};
	  var search = decodeURIComponent( window.location.href.slice( window.location.href.indexOf( separator ) + 1 ) );
	  var definitions = search.split( '&' );

	  definitions.forEach( function( val, key ) {
	      var parts = val.split( '=', 2 );
	      params[ parts[ 0 ] ] = parts[ 1 ];
	  } );

	  return ( prop && prop in params ) ? params[ prop ] : params;
	}
	function openSocAuthModal(name, url, config = null) {
		config = config || "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"
		return window.open(url, name, config)
	}
	const  fbAppId =  208605113193116

const addOneYear = () => {
   let date = new Date()
   date.setFullYear(date.getFullYear() + 1)
   return date
}


export  {getCodeFromUrl, openSocAuthModal, fbAppId, addOneYear}