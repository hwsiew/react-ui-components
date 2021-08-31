import React from 'react';
import SearchInput from './SearchInput';

export default {
	title: 'components/SearchInput',
	component: SearchInput,
	decorators: [(Story) => <div className="w-60"><Story /></div>],
	argTypes: {
		onSearch: {
			description: 'Callback when search action is trigger',
		},
		focusClass: {
			description: 'class name to add when component is focus',
		},
		disabled: {
			description: 'disabled search input',
		}
	}
};

const Template = (args) => <SearchInput {...args}></SearchInput>

export const Default = Template.bind({});
Default.args = {};


export const Color = Template.bind({});
Color.args = {
	className: "text-blue-500",
	focusClass: "border-blue-500",
};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
};