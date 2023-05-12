export const setCurrentLanguage = (lang) => {
	localStorage.setItem('lang', lang)
}

export const removeCurrentLanguage = () => {
	localStorage.removeItem('lang')
}

export const getCurrentLanguage = () => {
	return localStorage.getItem('lang')
}
