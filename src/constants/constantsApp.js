
export default {

	openSocAuthModal(name, url, config = null) {
		config = config || "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"
		return window.open(url, name, config)
	},
	fbAppId: 208605113193116
}