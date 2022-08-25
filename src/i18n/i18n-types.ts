// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'
	| 'ja'
	| 'zh'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	params: {
		/**
		 * Vertical Gap
		 */
		verticalGap: string
		/**
		 * Line Gap
		 */
		lineGap: string
		/**
		 * Text Alignment
		 */
		textAlignment: string
		/**
		 * Display Language
		 */
		displayLanguage: string
	}
	input: {
		/**
		 * Input new sentence here...
		 */
		placeholder: string
		/**
		 * Add
		 */
		add: string
		/**
		 * Each word are separated automatically by space and punctuations. Use {delimiter} for further separation or non-space separated script, such as Chinese / Japanese / Thai / Tibetan / etc., e.g. {example}
		 * @param {string} delimiter
		 * @param {string} example
		 */
		guidance: RequiredParams<'delimiter' | 'example'>
	}
	footer: {
		/**
		 * The illustration generated by this application is released under the {license} license, which means it will be in public domain and completely free to use. It's not obligated, but welcomed to share and credit.
		 * @param {string} license
		 */
		info: RequiredParams<'license'>
	}
}

export type TranslationFunctions = {
	params: {
		/**
		 * Vertical Gap
		 */
		verticalGap: () => LocalizedString
		/**
		 * Line Gap
		 */
		lineGap: () => LocalizedString
		/**
		 * Text Alignment
		 */
		textAlignment: () => LocalizedString
		/**
		 * Display Language
		 */
		displayLanguage: () => LocalizedString
	}
	input: {
		/**
		 * Input new sentence here...
		 */
		placeholder: () => LocalizedString
		/**
		 * Add
		 */
		add: () => LocalizedString
		/**
		 * Each word are separated automatically by space and punctuations. Use {delimiter} for further separation or non-space separated script, such as Chinese / Japanese / Thai / Tibetan / etc., e.g. {example}
		 */
		guidance: (arg: { delimiter: string, example: string }) => LocalizedString
	}
	footer: {
		/**
		 * The illustration generated by this application is released under the {license} license, which means it will be in public domain and completely free to use. It's not obligated, but welcomed to share and credit.
		 */
		info: (arg: { license: string }) => LocalizedString
	}
}

export type Formatters = {}