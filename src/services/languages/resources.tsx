import * as React from 'react';

export interface ILanguageData {
    id: string,
    locale: string,
    localeCode: string,
    name: string,
    icon: React.ReactNode
}

const configLanguage = {
    vietnam: "layout:language:vietnam",
    english: "layout:language:english"
}

export const LANGUAGE = {
    VIETNAM: { id: 'vi', locale: 'vi', localeCode: 'vi-VN', name: configLanguage.vietnam, icon: <svg width={21} height={15}> <defs> <rect id="prefix_vn__a" width={21} height={15} rx={2} /> </defs> <g fill="none" fillRule="evenodd"> <mask id="prefix_vn__b" fill="#fff"> <use xlinkHref="#prefix_vn__a" /> </mask> <use fill="#FFF" xlinkHref="#prefix_vn__a" /> <path fill="#EA403F" mask="url(#prefix_vn__b)" d="M0 0h21v15H0z" /> <path fill="#FFFE4E" mask="url(#prefix_vn__b)" d="M10.5 9.255l-2.645 1.886.976-3.099L6.22 6.109l3.248-.029L10.5 3l1.032 3.08 3.248.029-2.611 1.933.976 3.099z" /> </g> </svg> } as ILanguageData,
    ENGLISH: { id: 'en', locale: 'en-au', localeCode: 'en-US', name: configLanguage.english, icon: <svg width={21} height={15}> <defs> <rect id="prefix_english__a" width={21} height={15} rx={2} /> </defs> <g fill="none" fillRule="evenodd"> <mask id="prefix_english__b" fill="#fff"> <use xlinkHref="#prefix_english__a" /> </mask> <use fill="#FFF" xlinkHref="#prefix_english__a" /> <path fill="#0A17A7" mask="url(#prefix_english__b)" d="M0 0h21v15H0z" /> <path fill="#FFF" d="M5.005 10H0V5h5.005L-2.08.22l1.118-1.657L8 4.608V-1h5v5.608l8.962-6.045L23.08.22 15.995 5H21v5h-5.005l7.085 4.78-1.118 1.657L13 10.392V16H8v-5.608l-8.962 6.045-1.118-1.658L5.005 10z" mask="url(#prefix_english__b)" /> <path stroke="#DB1F35" strokeLinecap="round" strokeWidth={0.667} d="M14.001 4.75L23.5-1.5" mask="url(#prefix_english__b)" /> <path stroke="#DB1F35" strokeLinecap="round" strokeWidth={0.667} d="M15.01 16.013l8.515-5.74" mask="url(#prefix_english__b)" transform="matrix(1 0 0 -1 0 26.286)" /> <path stroke="#DB1F35" strokeLinecap="round" strokeWidth={0.667} d="M6.004 4.733l-8.882-5.986" mask="url(#prefix_english__b)" /> <path stroke="#DB1F35" strokeLinecap="round" strokeWidth={0.667} d="M6.968 16.733l-9.846-6.53" mask="url(#prefix_english__b)" transform="matrix(1 0 0 -1 0 26.937)" /> <path fill="#E6273E" mask="url(#prefix_english__b)" d="M0 9h9v6h3V9h9V6h-9V0H9v6H0z" /> </g> </svg> } as ILanguageData,
    PHILIPPINES: { id: 'fi' }
}

export const listLANGUAGE = [
    LANGUAGE.VIETNAM,
    LANGUAGE.ENGLISH
]

export const LANGUAGE_COOKIES = 'Language';

import {
    layout_VN
} from './vi';

import {
    layout_EN
} from './en';

export const resources = {
    [LANGUAGE.VIETNAM.id]: {
        translation: {
            layout: layout_VN
        }
    },
    [LANGUAGE.ENGLISH.id]: {
        translation: {
            layout: layout_EN
        }
    }
}