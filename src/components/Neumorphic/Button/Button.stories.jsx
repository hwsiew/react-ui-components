import classNames from 'classnames';
import React from 'react';
import Button from '.';

export default {
	title: 'Neumorphic/Button',
	component: Button,
	parameters:{
    layout: 'centered',
		backgrounds: {
			default: 'light',
			values: [
				{ name: 'light', value: '#dde1e7'}
			]
		}
  },
};

const Template = (args) => <Button {...args}>Button</Button>

export const Default = Template.bind({});
Default.args = {}

export const TopLeft = Template.bind({});
TopLeft.args = {
	shadow: 'top-left',
}

export const BottomLeft = Template.bind({});
BottomLeft.args = {
	shadow: 'bottom-left'
}

export const BottomRight = Template.bind({});
BottomRight.args = {
	shadow: 'bottom-right'
}