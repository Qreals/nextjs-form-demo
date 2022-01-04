import React from 'react';
// import { withDesign } from 'storybook-addon-designs';
import type { Story } from '@storybook/react';
import Button, { GCButtonProps } from './button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Molecules/Button',
	// decorators: [withDesign],
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		type: {
			control: {
				type: 'radio',
				options: ['primary', 'default'],
			},
		},
		htmlType: {
			control: {
				type: 'radio',
				options: ['submit', 'button', 'reset'],
			},
		},
	},
	parameters: {
		jest: ['button.test.tsx'],
	},
};

const Template: Story<GCButtonProps> = (args) => (
	<div>
		<h2>control button</h2>
		<Button {...args} />
		<br />
		<br />
		<div>
			<h2>button collection</h2>
			<div className={'flex justify-between'}>
				<Button {...args} type={'primary'} children={'primary button'} />
				<br />
				<br />
				<Button {...args} type={'default'} children={'default button'} />
				<br />
				<br />
				<Button {...args} ghost={true} children={'ghost button'} />
			</div>
			<br />
			<div className={'flex justify-between'}>
				<Button {...args} disabled={true} children={'disable button'} />
			</div>
		</div>
	</div>
);

export const primary = Template.bind({});
primary.storyName = 'Button';
// More on args: https://storybook.js.org/docs/react/writing-stories/args
primary.args = {
	type: 'primary',
	width: 250,
	children: 'primary button',
};
