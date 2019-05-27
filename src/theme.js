const theme = () => ({
	font: {
		regular: '',
		bold: '',
		title: '',
	},
	gutter: {
		mobile: '0px',
		tablet: '0px',
		desktop: '20px',
		projector: '80px',
	},
	breakpoint: {
		projector: '1920px',
		desktop: '1280px',
		tablet: '720px',
		mobile: '480px',
	},
	border: {
		radiusSm: '3px',
		radiusLg: '7px',
	},
	app: {
		color: {
			primary: '#222f3e',
			secondary: '#f9f9f9',
			alternate: '#949897',
		},
		loggedIn: '',
		loggedOut: '',
	},
	air: {
		color: {
			primary: '#94b5c2',
			secondary: '#f7f5f0',
			alternate: '#cec4bc',
		},
	},
	earth: {
		color: {
			primary: '#6b3603',
			secondary: '#6b8e4e',
			alternate: '#474d3c',
		},
	},
	water: {
		color: {
			primary: '#0093b7',
			secondary: '#006089',
			alternate: '#eeeeed',
		},
	},
	accelerate: animation => `
		will-change: ${animation};
		transform: translateZ(0);
		backface-visibility: hidden;
		perspective: 1000px;
	`,
});

export default theme;
