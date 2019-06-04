import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'lazysizes/plugins/respimg/ls.respimg';
import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import 'lazysizes';

const Picture = styled.picture`
	position: relative;
	width: 100%;
	height: ${({ objectFit }) => (objectFit ? '100%' : 'auto')};
	background-color: #ededef;
	padding-bottom: ${props =>
		props.objectFit ? '0' : `${props.aspectRatio * 100}%`};
`;

const Source = styled.source`

`;



const Img = styled.img`
	position: absolute;
	display: block;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: ${({ objectFit }) => objectFit || 'inherit'};
	object-position: ${({ objectPosition }) => objectPosition || 'unset'};
	font-family: ${({ objectFit, objectPosition }) =>
		objectFit
			? `"object-fit: ${objectFit}, object-position: ${objectPosition ||
					'unset'}"`
			: 'inherit'};
`;

const Image = ({ alt, className, objectFit, objectPosition }) => {
	return (
		<Picture
			aspectRatio={aspectRatio}
			className={className}
			objectFit={objectFit}
		>
            <Source type='image/webp' srcSet=''/>
            <Source type='image/jpeg' data-srcset=''/>
            <Img src='' className='lazyload' alt={alt}/>
        </Picture>
	);
};
