import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/MaiButton',
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/fCkLO9XCKffMYLP0fxTB6w/marica.io?node-id=204%3A2"
    }
  },
  component: (args) => `<mai-button disabled="${args.disabled}">Button</mai-button>`,
};

export const Primary = {
  args: {
    disabled: false
  }
};

export const Disabled = {
  args: {
    disabled: true
  }
};
