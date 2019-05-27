import React, { useEffect, useRef } from 'react';
import shaka from 'shaka-player';

var manifestUri =
	'//storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';

const ShakaPlayer = ({ manifest, src }) => {
	const videoRef = useRef(null);

	function onError(error) {
		// Log the error.
		console.error('Error code', error.code, 'object', error);
	}
	function onErrorEvent(event) {
		// Extract the shaka.util.Error object from the event.
		onError(event.detail);
	}
	function initPlayer() {
		const player = new shaka.Player(videoRef);

		// Listen for error events.
		player.addEventListener('error', onErrorEvent);

		// Try to load a manifest.
		// This is an asynchronous process.
		player
			.load(manifestUri)
			.then(function() {
				// This runs if the asynchronous load is successful.
				console.log('The video has now been loaded!');
			})
			.catch(onError); // onError is executed if the asynchronous load fails.
	}

	useEffect(() => {
		shaka.polyfill.installAll();
		if (shaka.Player.isBrowserSupported()) {
			initPlayer();
		}

		return function cleanUp() {};
	});

	return (
		<div>
			<video
				ref={videoRef}
				width="640"
				poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
				controls
				autoPlay
			/>
		</div>
	);
};
