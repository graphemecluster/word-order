import type { Translation } from '../i18n-types'

const ja: Translation = {
  params: {
    'verticalGap': '行間隔',
    'lineGap': '直線隙間',
    'textAlignment': 'テキスト配置',
    'displayLanguage': '表示言語',
  },
  input: {
    'placeholder': '新しい文章を入力してください...',
    'add': '追加',
    'guidance': '各単語は自動的にスペースや約物で区切られています。更に区切る場合や、日本語・中国語・タイ語等のスペースによって単語が分けられていない言語を区切りたい場合は、{delimiter}を使用してください。例えば、{example}',
  },
  footer: {
    'info': 'このツールにて生成されたイラストは、{license} ライセンスにて公開されています。即ち完全著作権フリーであり、自由に使用することができます。また、強制ではないが、利用する際にシェアや引用リツイートすると製作者は歓びます。',
  }
}

export default ja
