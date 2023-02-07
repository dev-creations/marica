export default {
  title: 'Components/MaiButton',
};

const Template = (args) => `<mai-button disabled="${args.disabled}">Button</mai-button>`;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
