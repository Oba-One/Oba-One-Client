import React, { Suspense } from 'react';
import styled from 'styled-components';
import {
	Dialog,
	Slide,
	AppBar,
	Button,
	Toolbar,
	IconButton,
} from '@material-ui/core';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


import { FourGIcon } from '../../assets/svgs';

const StyledField = styled(Field)``;

const StyledForm = styled(Form)`
	width: 80%;
	height: 1000px;
	padding-top: 80px;
	margin: 0 auto;
	border: 2px solid black;
`;

const StyledError = styled(ErrorMessage)``;

const schema = Yup.object().shape({
	message: Yup.string().required('Please enter a message'),
})

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const SettingsDialog = ({ open, handleClose }) => {
	return (
		<Suspense fallback={<div>Load...</div>}>
			<Dialog
				open={open}
				onClose={handleClose}
				fullScreen
				TransitionComponent={Transition}
				arialabelledby="settings-dialog"
			>
				<AppBar>
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							onClick={handleClose}
							aria-label="Close"
						>
							<FourGIcon />
						</IconButton>
						<Button color="inherit" onClick={handleClose}>
							save
						</Button>
					</Toolbar>
				</AppBar>
				<Formik
					initialValues={{}}
					onSubmit={(values, actions) => {}}
					validationSchema={schema}
					render={({ errors, status, touched, isSubmitting }) => (
						<StyledForm>
							<StyledField type="email" name="email" />
							<StyledError name="email" component="div" />
							<StyledField
								type="text"
								className="error"
								name="social.facebook"
							/>
							<StyledError name="social.facebook">
								{errorMessage => <div className="error">{errorMessage}</div>}
							</StyledError>
							<StyledField type="text" name="social.twitter" />
							<StyledError
								name="social.twitter"
								className="error"
								component="div"
							/>
							{status && status.msg && <div>{status.msg}</div>}
							<button type="submit" disabled={isSubmitting}>
								Submit
							</button>
						</StyledForm>
					)}
				/>
			</Dialog>
		</Suspense>
	);
};

export default SettingsDialog;
