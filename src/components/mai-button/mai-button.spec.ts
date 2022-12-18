import { newSpecPage } from '@stencil/core/testing';
import { MaiButton } from './mai-button';

describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MaiButton],
      html: '<mai-button></mai-button>',
    });
    expect(root).toEqualHtml(`
      <mai-button>
        <mock:shadow-root>
          <button type="button">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </mai-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MaiButton],
      html: `<mai-button>test</mai-button>`,
    });
    expect(root).toEqualHtml(`
      <mai-button>
        <mock:shadow-root>
          <button type="button">
            <slot></slot>
          </button>
        </mock:shadow-root>
        test
      </mai-button>
    `);
  });
});
