import React from 'react';

const Star = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		className={className}
	>
		<path d="M12 6.7l1.45 3.85L17.3 12l-3.85 1.45L12 17.3l-1.45-3.85L6.7 12l3.85-1.45L12 6.7M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8z" />
	</svg>
);

export default Star;