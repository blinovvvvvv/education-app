module.exports = {
	customSyntax: 'postcss-scss',
	extends: 'stylelint-config-standard-scss',
	plugins: ['stylelint-prettier'],
	rules: {
		'color-no-invalid-hex': true,
		'prettier/prettier': true,
		'scss/at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'tailwind',
					'apply',
					'variants',
					'responsive',
					'screen',
				],
			},
		],
		'declaration-block-trailing-semicolon': null,
		'no-descending-specificity': null,
	},
}
