import React, { Suspense, useContext } from 'react';
import styled from 'styled-components';
import { Dialog, Slide, Button, Card, LinearProgress } from '@material-ui/core';
import { Formik } from 'formik';

import DeviceContext from '../../providers/device/context';
import { Form, FormRow, Select } from '../global/Form';

import { ThreeGIcon } from '../../assets/svgs';

const StyledDialog = styled(Dialog)`
	position: relative;
`;

const StyledForm = styled(Form)`
	height: 80vh;
`;

const StyledCard = styled(Card)`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 20px 25px;
`;

const FormFields = styled.div`
	display: flex;
	flex-direction: column;
	padding: 15px 25px;
`;

const FormActions = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
	height: 50px;
	width: 100%;
	border: 1px solid red;
	justify-self: flex-end;
`;

const Title = styled.h1`
	font-size: 24px;
	text-align: left;
	font-weight: 400;
`;

const Name = styled.h1`
	font-size: 18px;
	text-align: left;
	font-weight: 400;
`;

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const NewDeviceDialog = ({ open, handleClose }) => {
	const device = useContext(DeviceContext);
	return (
		<Suspense fallback={<div>Load...</div>}>
			<Dialog
				open={open}
				onClose={handleClose}
				maxWidth="sm"
				fullWidth
				TransitionComponent={Transition}
				arialabelledby="new-device-dialog"
			>
				<Formik initialValues={{}} onSubmit={() => {}}>
					{({ errors, status, touched, isSubmitting }) => (
						<StyledForm>
							<StyledCard>
								<Title>Connect New Device</Title>
								<FormFields>
									<FormRow name="Device Name" input={<Select/>}/>
								</FormFields>
								<FormActions>
									<Button>Cancel</Button>
									<Button>Connect</Button>
								</FormActions>
							</StyledCard>
						</StyledForm>
					)}
				</Formik>
			</Dialog>
		</Suspense>
	);
};

export default NewDeviceDialog;
