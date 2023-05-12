import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getCurrentLanguage } from '../helpers/storage'

const resources = {
	en: {
		translation: {
			welcome: 'Good morning.',
		},
	},
	ko: {
		translation: {
			welcome: '좋은 아침 입니다.',
		},
	},
	jp: {
		translation: {
			welcome: 'おはようございます。',
		},
	},
}
i18n.use(initReactI18next).init({
	resources,
	lng: getCurrentLanguage() ? getCurrentLanguage() : 'ko',
})
export default i18n
