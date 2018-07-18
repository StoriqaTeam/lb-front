

 const  getCodeFromUrl = function( prop, separator = '#' )  {
	  var params = {};
	  var search = decodeURIComponent( window.location.href.slice( window.location.href.indexOf( separator ) + 1 ) );
	  var definitions = search.split( '&' );

	  definitions.forEach( function( val, key ) {
	      var parts = val.split( '=', 2 );
	      params[ parts[ 0 ] ] = parts[ 1 ];
	  } );

	  return ( prop && prop in params ) ? params[ prop ] : null;
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

const copyToClipboard = (id) => {
	if (document.selection) { 
	    var range = document.body.createTextRange();
	    range.moveToElementText(document.getElementById(id));
	    range.select().createTextRange();
	    document.execCommand("copy"); 

	} else if (window.getSelection) {
	    var range = document.createRange();
	     range.selectNode(document.getElementById(id));
	     window.getSelection().addRange(range);
	     document.execCommand("copy");
	}
}

export  {getCodeFromUrl, openSocAuthModal, fbAppId, addOneYear, copyToClipboard}