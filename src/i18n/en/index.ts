import type { BaseTranslation } from '../i18n-types'

const en: BaseTranslation = {
	// TODO: your translations go here
	params: {
		'options': 'Options',
		'verticalGap': 'Vertical Gap',
		'lineGap': 'Line Gap',
		'straightLength': 'Straight Part',
		'textAlignment': 'Text Alignment',
		'displayLanguage': 'Display Language',
		'text': 'Text',
		'fontFamily': 'Font Family',
		'default': 'Default',
		'serif': 'Serif',
		'sansSerif': 'Sans Serif',
		'monospace': 'Monospace',
		'fontStyle': 'Font Style',
		'normal': 'Normal',
		'italic': 'Italic',
		'bold': 'Bold',
		'boldItalic': 'Bold Italic',
		'fontSize': 'Font Size',
	},
	input: {
		'input': 'Input',
		'placeholder': 'Input new sentence here...',
		'add': 'Add',
		'guidance': 'Each word are separated automatically by space and punctuations. Use {delimiter:string} for further separation or non-space separated script, such as Chinese / Japanese / Thai / Tibetan / etc., e.g. {example:string}',
	},
	footer: {
		'info': 'The illustration generated by this application is released under the {license:string} license, which means it will be in public domain and completely free to use. It’s not obligated, but welcomed to share and credit.',
	}
}
export default en
