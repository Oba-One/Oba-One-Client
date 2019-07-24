const provider = {
	user: {
		uuid: ``,
		username: ``,
		avatar: ``,
		token: ``,
		loggedIn: null,
		settings: {},
	},
	device: {
		activeDevice: {
			name: ``,
			id: ``,
			thumbnail: ``,
		},
		devices: [
			{
				name: 'Arduino',
				largeThumbnail: 'https://via.placeholder.com/160',
				smallThumbnail: 'https://via.placeholder.com/50',
				description: 'Fuck it up ooh ooh',
				info: {},
				status: 'CONNECTED',
				lastUse: '11/27/1991',
			},
			{
				name: 'Arduino',
				largeThumbnail: 'https://via.placeholder.com/160',
				smallThumbnail: 'https://via.placeholder.com/50',
				description: 'Fuck it up ooh ooh',
				info: {},
				status: 'DISCONNECTED',
				lastUse: '11/27/1991',
			},
			{
				name: 'Arduino',
				largeThumbnail: 'https://via.placeholder.com/160',
				smallThumbnail: 'https://via.placeholder.com/50',
				description: 'Fuck it up ooh ooh',
				info: {},
				status: 'DISCONNECTED',
				lastUse: '11/27/1991',
			},
		],
	},
	ecosystem: {
		activeEcosystem: '',
		earthSettings: {},
		waterSettings: {},
		airSettings: {},
	},
};
export default provider;
