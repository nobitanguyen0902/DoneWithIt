import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { listLANGUAGE, LANGUAGE, LANGUAGE_COOKIES, ILanguageData, resources } from './resources';
export { listLANGUAGE, LANGUAGE, LANGUAGE_COOKIES, ILanguageData }

i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        lng: LANGUAGE.VIETNAM.id,
        fallbackLng: LANGUAGE.VIETNAM.id,
        interpolation: { escapeValue: false }, // React already does escaping
        react: { useSuspense: false },
        keySeparator: ':',
        resources: resources
    })

export default i18next;