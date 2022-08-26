module.exports = {
	mode: 'jit',
	content: [
		'./public/**/*.html',
		//'./public/index.html', // uncomment this while building tailwind for index.html & comment everthing else.
		'./public/**/*.js',
		'./public/handbook/**/*.html',
		'./public/react-build/**/*.html',
		'./public/react-build/**/*.js',
		'./src/**/*.js'
	],
	//darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			transitionProperty: {
				'width': 'width'
			},
			width: {
				'1/16': '6.25%',
				'm-content' : 'max-content'
			},
			boxShadow: {
				'custom-1': 'rgb(0 0 0 / 20%) 4px 4px 0px 0px',
				'custom-2': 'rgb(0 0 0 / 20%) 5px 5px',
				'custom-3': 'rgba(9, 9, 9, 0.2) 4px 4px',
				'custom-4': 'rgba(0, 0, 0, 0.2) 6px 6px',
				'custom-5': 'rgba(0, 0, 0, 0.25) 5px 5px',
				'custom-6': 'rgba(0, 0, 0, 0.2) 3px 3px',
				'custom-7': 'rgb(0 0 0) 10px 10px 0px 0px',
				'custom-8': 'rgb(255 255 255 / 60%) 4px 4px 0px 0px',
				'custom-9': 'inset 0 8px 8px 0 rgba(0, 0, 0, 0.25)',
				'custom-10': '0 10px 10px 0 rgba(0, 0, 0, 0.25)',
				'custom-12': 'rgb(0 0 0 / 20%) 0px 0px 7px 5px',
				'custom-13': 'rgb(10 11 30 / 7%) 1px 1px 3px 0px',
				'custom-14': 'rgb(10 11 30) 1px 1px 0px 0px',
				'custom-15': 'rgb(10 11 30 / 7%) 1px 0px 1px 0px;',
			},
			cursor: {
				grab: 'grab',
				grabbing: 'grabbing'
			}
		},
		groupLevel: 10,
		// will result in as many direct child selectors as defined here
		groupScope: "scope",
		// will result in group-scope being available in addition to the base group
		groupVariants: ["hover", "focus"],
		// will result in group-scope:hover and group-scope:focus variantsn
	},
	plugins: [
		require("tailwindcss-nested-groups")
	],
}