import { newE2EPage } from '@stencil/core/testing';

describe('mai-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<mai-avatar username="Alice Bob"></mai-avatar>');
    const element = await page.find('mai-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
