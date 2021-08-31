import React from 'react';
import Paper  from './Paper';

export default {
	title: 'Components/Paper',
	component: Paper,
	argTypes: {
		elevation: {	
			description: 'elevation height btween 0 to 5 inclusive both',
			defaultValue: 1,
			type: { name: 'number', required: false },
			table: {
				type: { summary: 'number: [0,5]' },
				defaultValue: { summary: '1' },
			},
		},
		className: {
			type: { name: 'string', required: false},
		}
	}
}

const Template = (args) => <Paper {...args}>Content</Paper>

export const Default = Template.bind({})
Default.args = {}

Default.parameters = {
  backgrounds: {
    values: [
      { name: 'gray', value: '#eeeeee' },
    ],
  },
};