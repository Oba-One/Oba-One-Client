import React from 'react';
import styled from 'styled-components';
import {
	Field,
	Form as FormikForm,
	ErrorMessage as FormikError,
} from 'formik';
import {
	Select as MuiSelect,
	TextField as MuiTextField,
	Radio as MuiRadio,
	RadioGroup as MuiRadioGroup,
	FormControlLabel as MuiFormControlLabel,
	Switch as MuiSwitch,
	Slider as MuiSlider,
} from '@material-ui/core';

const StyledForm = styled(FormikForm)``;

const StyledError = styled(FormikError)``;

const Option = styled.option`
	text-transform: capitalize;
`;

const FieldName = styled.p``;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const TextField = ({
	className,
	handleChange,
	value = '',
	name = '',
	rows = '',
	type = 'text',
}) => (
	<Field
		name="text"
		render={({ field }) => (
			<MuiTextField
				{...field}
				id={name}
				label={name}
				placeholder={name}
				name={name}
				className={className}
				value={value}
				onChange={handleChange}
				multiline={rows}
				rows={rows}
				type={type}
				margin="normal"
			/>
		)}
	/>
);

const Radio = ({
	className,
	name = '',
	value = '',
	handleChange,
	options = [],
}) => (
	<Field
		name="radio"
		render={({ field }) => (
			<MuiRadioGroup
				aria-label=""
				{...field}
				name={name}
				value={value}
				onChange={handleChange}
				className={className}
			>
				{options.map(option => (
					<MuiFormControlLabel
						value={option}
						label={option}
						control={<MuiRadio id={option} name={option} />}
					/>
				))}
			</MuiRadioGroup>
		)}
	/>
);

const Switch = ({
	name = '',
	value = '',
	icon,
	checked = false,
	handleChange,
}) => (
	<Field
		name="switch"
		render={({ field }) => (
			<MuiSwitch
				id={name}
				icon={icon}
				checked={checked}
				{...field}
				value={value}
				onChange={handleChange}
				type="switch"
			/>
		)}
	/>
);

const Slider = ({
	className,
	handleChange,
	defaultValue = 0,
	marks = false,
	orientation = 'horizontal',
	step = 0,
	min = 0,
	max = 100,
}) => (
	<MuiSlider
		className={className}
		onChange={handleChange}
		defaultValue={defaultValue}
		aria-labelledby="slider"
		valueLabelDisplay="auto"
		orientation={orientation}
		step={step}
		marks={marks}
		min={min}
		max={max}
	/>
);

const Select = ({ handleChange, value = ``, options = ['option'] }) => (
	<Field
		name="select"
		render={({ field }) => (
			<MuiSelect native {...field} value={value} onChange={handleChange}>
				{options.map(option => (
					<Option value={option}>{option}</Option>
				))}
			</MuiSelect>
		)}
	/>
);


//
const FormRow = ({ className, name = `field`, input = <MuiSelect /> }) => (
	<Row className={className}>
		<FieldName>{name}</FieldName>
		{input}
	</Row>
);

const FormError = ({ children, className, name, component }) => (
	<StyledError className={className} name={name} component={component}>
		{children}
	</StyledError>
);

const Form = ({ children, className, handleSubmit }) => (
	<StyledForm onSubmit={handleSubmit} className={className}>
		{children}
	</StyledForm>
);

export { Form, FormError, FormRow, Select, TextField, Switch, Radio, Slider };
