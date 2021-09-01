import React from 'react';
import Input from './Input';

export default {
	title: 'Neumorphic/input',
	component: Input,
	parameters: {
		layout:' centered',
		backgrounds: {
			default: 'light',
			values: [
				{ name: 'light', value: '#dde1e7'}
			]
		}
	}
};

const Template = (args) => <Input {...args}></Input>

export const Default = Template.bind({});
Default.args = {};