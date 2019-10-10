const observer = new MutationObserver((mutationLists, observer) => {
	let el = document.getElementById('bh-date')
	if (el)
		el.textContent = 'Tout va bien poto !'
})

window.onload = () => {
	const target = document.querySelector('body > div.page > div.page-content.page-content-fluid > div > div.align-top > div > div.container-item.profile-item.full-width')

	observer.observe(target, {
		attributes: true,
		childList: true,
		subtree: true
	})

}

window.onunload = () => {
	observer.disconnect()
}